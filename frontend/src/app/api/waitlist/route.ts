import { NextResponse } from "next/server";
import { neon } from "@neondatabase/serverless";

export async function POST(request: Request) {
  try {
    const { email, business } = await request.json();

    if (!email || !business) {
      return NextResponse.json(
        { error: "Email and business description are required." },
        { status: 400 }
      );
    }

    const databaseUrl = process.env.DATABASE_URL;
    if (!databaseUrl) {
      console.error("DATABASE_URL is not set.");
      return NextResponse.json(
        { error: "Database configuration error. Please try again later." },
        { status: 500 }
      );
    }

    const sql = neon(databaseUrl);

    // Insert user into waitlist
    await sql`
      INSERT INTO waitlist (email, business)
      VALUES (${email.trim().toLowerCase()}, ${business.trim()});
    `;

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error: any) {
    console.error("Waitlist DB Error:", error);

    // Handle unique violation (duplicate email) in Postgres
    if (error.code === "23505") {
      return NextResponse.json(
        { error: "This email is already registered on the waitlist." },
        { status: 409 }
      );
    }

    return NextResponse.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}
