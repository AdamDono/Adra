import json
from typing import Optional
from fastapi import APIRouter, File, Form, Response, UploadFile
from services.image_service import generate_ad_creative

router = APIRouter(prefix="/api")

@router.post("/generate")
async def generate_creative(
    prompt: str = Form(...),
    brand_colors: Optional[str] = Form(None), # JSON list of strings e.g. '["#C5A880", "#060608"]'
    logo: Optional[UploadFile] = File(None),
    seed: Optional[int] = Form(None)
):
    logo_bytes = None
    if logo:
        logo_bytes = await logo.read()
        
    colors_list = None
    if brand_colors:
        try:
            colors_list = json.loads(brand_colors)
        except Exception:
            pass

    # Call the image service to generate and composite the ad
    image_bytes = generate_ad_creative(prompt, logo_bytes, colors_list, seed)
    
    return Response(content=image_bytes, media_type="image/png")
