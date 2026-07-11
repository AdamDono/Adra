import urllib.parse
import io
import time
import requests
from PIL import Image, ImageOps

def generate_ad_creative(prompt: str, logo_bytes: bytes = None, brand_colors: list = None, seed: int = None, model: str = None) -> bytes:
    """
    Generates an image using an open AI endpoint, then composites a brand logo onto it using Pillow.
    """
    # 1. Generate the base image using Pollinations.ai (free, no auth required, fast)
    encoded_prompt = urllib.parse.quote(prompt)
    seed_str = f"&seed={seed}" if seed is not None else ""
    model_str = f"&model={model}" if model else ""
    image_url = f"https://image.pollinations.ai/prompt/{encoded_prompt}?width=800&height=800&nologo=true&private=true{seed_str}{model_str}"
    
    max_retries = 3
    base_delay = 1.5  # seconds
    base_image_data = None

    for attempt in range(max_retries):
        try:
            response = requests.get(image_url, timeout=20)
            if response.status_code == 429:
                # Rate limited, back off and retry
                time.sleep(base_delay * (attempt + 1))
                continue
            response.raise_for_status()
            base_image_data = response.content
            break
        except Exception as e:
            print(f"Attempt {attempt + 1} failed for image generation: {e}")
            if attempt == max_retries - 1:
                # Last attempt failed, fall back
                bg = Image.new("RGBA", (800, 800), color=brand_colors[0] if brand_colors else "#1E1E24")
                temp_io = io.BytesIO()
                bg.save(temp_io, format="PNG")
                base_image_data = temp_io.getvalue()
            else:
                time.sleep(base_delay * (attempt + 1))

    # 2. If no logo is provided, just return the generated image
    if not logo_bytes:
        return base_image_data

    # 3. Composite the logo onto the base image
    try:
        base_img = Image.open(io.BytesIO(base_image_data)).convert("RGBA")
        logo_img = Image.open(io.BytesIO(logo_bytes)).convert("RGBA")

        # Resize logo to fit nicely in a corner (e.g. max width/height of 120px)
        max_size = (120, 120)
        logo_img.thumbnail(max_size, Image.Resampling.LANCZOS)

        # Place logo in bottom-right corner with 30px padding
        base_w, base_h = base_img.size
        logo_w, logo_h = logo_img.size
        
        # Position calculations
        x = base_w - logo_w - 30
        y = base_h - logo_h - 30

        # Create a semi-transparent dark pill background behind the logo for premium contrast
        overlay = Image.new("RGBA", base_img.size, (0, 0, 0, 0))
        from PIL import ImageDraw
        draw = ImageDraw.Draw(overlay)
        
        # Draw soft background pill for logo
        padding = 10
        draw.rounded_rectangle(
            [x - padding, y - padding, x + logo_w + padding, y + logo_h + padding],
            radius=8,
            fill=(0, 0, 0, 120) # 120/255 opacity
        )

        # Composite the overlay and the logo
        combined = Image.alpha_composite(base_img, overlay)
        combined.paste(logo_img, (x, y), logo_img)

        # Save result to bytes
        output_io = io.BytesIO()
        combined.save(output_io, format="PNG")
        return output_io.getvalue()

    except Exception as e:
        print(f"Failed to composite logo: {e}")
        return base_image_data
