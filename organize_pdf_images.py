import os
import shutil

src_dir = os.path.join(os.getcwd(), 'public', 'extracted_images')
dst_dir = os.path.join(os.getcwd(), 'public', 'pdf_images')
os.makedirs(dst_dir, exist_ok=True)

# Define mapping from extracted filenames to clean semantic filenames
mapping = {
    # Cover
    "p1_img1_2119.jpeg": "cover.jpg",
    # Preface
    "p2_img1_2213.jpeg": "preface_1.jpg",
    "p2_img2_2214.jpeg": "preface_2.jpg",
    # Intro
    "p7_img1_2235.jpeg": "intro.jpg",
    # Keys 1..20 main images
    "p9_img1_2236.jpeg": "key_1.jpg",
    "p10_img1_2237.jpeg": "key_2.jpg",
    "p12_img1_2238.jpeg": "key_3.jpg",
    "p14_img1_2239.jpeg": "key_4.jpg",
    "p15_img1_2240.jpeg": "key_5.jpg",
    "p17_img1_2181.jpeg": "key_6.jpg",
    "p18_img1_2241.jpeg": "key_7.jpg",
    "p19_img1_2242.jpeg": "key_8.jpg",
    "p21_img1_2243.jpeg": "key_9.jpg",
    "p23_img1_2190.jpeg": "key_10.jpg",
    "p25_img1_2244.jpeg": "key_11.jpg",
    "p27_img1_2245.jpeg": "key_12.jpg",
    "p29_img1_2246.jpeg": "key_13.jpg",
    "p30_img1_2247.jpeg": "key_14.jpg",
    "p32_img1_2248.jpeg": "key_15.jpg",
    "p34_img1_2198.jpeg": "key_16.jpg",
    "p35_img1_2249.jpeg": "key_17.jpg",
    "p37_img1_2250.jpeg": "key_18.jpg",
    "p39_img1_2202.jpeg": "key_19.jpg",
    "p41_img1_2205.jpeg": "key_20.jpg",
    # TOC thumbnails (keys 1..20)
    "p3_img1_2215.jpeg": "toc_key_1.jpg",
    "p3_img2_2216.jpeg": "toc_key_2.jpg",
    "p3_img3_2217.jpeg": "toc_key_3.jpg",
    "p3_img4_2218.jpeg": "toc_key_4.jpg",
    "p3_img5_2219.jpeg": "toc_key_5.jpg",
    "p3_img6_2220.jpeg": "toc_key_6.jpg",
    "p4_img1_2221.jpeg": "toc_key_7.jpg",
    "p4_img2_2222.jpeg": "toc_key_8.jpg",
    "p4_img3_2223.jpeg": "toc_key_9.jpg",
    "p4_img4_2224.jpeg": "toc_key_10.jpg",
    "p4_img5_2225.jpeg": "toc_key_11.jpg",
    "p4_img6_2226.jpeg": "toc_key_12.jpg",
    "p5_img1_2227.jpeg": "toc_key_13.jpg",
    "p5_img2_2228.jpeg": "toc_key_14.jpg",
    "p5_img3_2229.jpeg": "toc_key_15.jpg",
    "p5_img4_2230.jpeg": "toc_key_16.jpg",
    "p5_img5_2231.jpeg": "toc_key_17.jpg",
    "p5_img6_2232.jpeg": "toc_key_18.jpg",
    "p6_img1_2233.jpeg": "toc_key_19.jpg",
    "p6_img2_2234.jpeg": "toc_key_20.jpg",
    # Conclusion & Acknowledgements
    "p43_img1_2208.jpeg": "conclusion_1.jpg",
    "p43_img2_2209.jpeg": "conclusion_2.jpg",
    "p45_img1_2136.jpeg": "acknowledgements.jpg",
}

for src_name, dst_name in mapping.items():
    src_file = os.path.join(src_dir, src_name)
    dst_file = os.path.join(dst_dir, dst_name)
    if os.path.exists(src_file):
        shutil.copy(src_file, dst_file)
        print(f"Copied {src_name} -> {dst_name}")
    else:
        print(f"WARNING: Source image {src_name} not found!")

print("Organized image mapping complete!")
