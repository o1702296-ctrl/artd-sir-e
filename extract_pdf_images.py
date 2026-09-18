import pymupdf
import os
from PIL import Image
import io

pdf_path = r'C:\Users\HP TTS\.gemini\antigravity\brain\7c9af590-c463-4c28-8a66-e103aa09a36d\.user_uploaded\media_1789762213323.pdf'
output_dir = os.path.join(os.getcwd(), 'public', 'extracted_images')
os.makedirs(output_dir, exist_ok=True)

doc = pymupdf.open(pdf_path)

extracted_images_by_page = {}
seen_xref = set()

for page_num in range(len(doc)):
    page = doc[page_num]
    image_list = page.get_images(full=True)
    extracted_images_by_page[page_num + 1] = []
    
    for img_index, img in enumerate(image_list):
        xref = img[0]
        # We can allow duplicate xrefs if needed, or track unique images
        base_image = doc.extract_image(xref)
        image_bytes = base_image["image"]
        image_ext = base_image["ext"]
        
        # Open with PIL to filter out tiny decorative elements / masks (e.g. width/height < 50px)
        try:
            pil_img = Image.open(io.BytesIO(image_bytes))
            w, h = pil_img.size
            if w < 50 or h < 50:
                continue # skip tiny icons/masks
        except Exception as e:
            continue

        filename = f"p{page_num + 1}_img{img_index + 1}_{xref}.{image_ext}"
        filepath = os.path.join(output_dir, filename)
        
        with open(filepath, "wb") as f:
            f.write(image_bytes)
            
        extracted_images_by_page[page_num + 1].append({
            "filename": filename,
            "path": f"/extracted_images/{filename}",
            "width": w,
            "height": h,
            "ext": image_ext,
            "xref": xref
        })

print(f"Extraction complete! Total pages checked: {len(doc)}")
for p, imgs in extracted_images_by_page.items():
    if imgs:
        print(f"Page {p}: {[i['filename'] for i in imgs]}")
