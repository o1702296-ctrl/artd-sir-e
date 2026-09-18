import pymupdf
import json

pdf_path = r'C:\Users\HP TTS\.gemini\antigravity\brain\7c9af590-c463-4c28-8a66-e103aa09a36d\.user_uploaded\media_1789762213323.pdf'
doc = pymupdf.open(pdf_path)

extracted = []
for page_num in range(len(doc)):
    page = doc[page_num]
    text = page.get_text('text')
    lines = [line.strip() for line in text.split('\n') if line.strip()]
    extracted.append({
        "page": page_num + 1,
        "raw_lines": lines
    })

with open("extracted_pdf_raw.json", "w", encoding="utf-8") as f:
    json.dump(extracted, f, ensure_ascii=False, indent=2)

print(f"Dumped {len(extracted)} pages of text to extracted_pdf_raw.json")
