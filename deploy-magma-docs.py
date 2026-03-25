"""
deploy-magma-docs.py
Copies all generated files to C:\PROJECTS\magma-docs\
Run from anywhere after downloading all files to Downloads.
"""
import shutil, os

DL   = r"C:\Users\MAXI KROOKED\Downloads"
DOCS = r"C:\PROJECTS\magma-docs"

# 1. Config files
configs = [
    (f"{DL}\\docusaurus.config.ts", f"{DOCS}\\docusaurus.config.ts"),
    (f"{DL}\\custom.css",           f"{DOCS}\\src\\css\\custom.css"),
    (f"{DL}\\sidebars.ts",          f"{DOCS}\\sidebars.ts"),
]

for src, dst in configs:
    os.makedirs(os.path.dirname(dst), exist_ok=True)
    shutil.copy2(src, dst)
    print(f"✅ {os.path.basename(src)}")

# 2. All doc MD files from downloads
import glob
doc_files = glob.glob(f"{DL}\\docs\\*.md")
if not doc_files:
    # Try flat — user might have put them directly in Downloads
    doc_files = []
    doc_names = [
        'introduction.md','capital-efficiency-problem.md','ybncm.md',
        'conviction-score.md','discovery-multiplier.md','echo-pool.md',
        'oracle-architecture.md','narrative-categories.md','token-economics.md',
        'technical-architecture.md','seeker-skr.md','competitive-positioning.md',
        'roadmap.md','legal.md','appendix-a.md','appendix-b.md',
    ]
    for name in doc_names:
        path = f"{DL}\\{name}"
        if os.path.exists(path):
            doc_files.append(path)

dst_docs = f"{DOCS}\\docs"
os.makedirs(dst_docs, exist_ok=True)

# Remove old tutorial docs
for old in ['intro.md', 'tutorial-basics', 'tutorial-extras']:
    old_path = os.path.join(dst_docs, old)
    if os.path.exists(old_path):
        if os.path.isdir(old_path):
            shutil.rmtree(old_path)
        else:
            os.remove(old_path)
        print(f"🗑  Removed {old}")

for src in doc_files:
    dst = os.path.join(dst_docs, os.path.basename(src))
    shutil.copy2(src, dst)
    print(f"✅ docs/{os.path.basename(src)}")

# 3. Assets
assets = [
    (f"{DL}\\MAGMA-Icon_App_Dark_512.png",  f"{DOCS}\\static\\img\\logo.png"),
    (f"{DL}\\MAGMA-Icon_App_Dark_512.png",  f"{DOCS}\\static\\img\\favicon.png"),
    (f"{DL}\\MAGMA-OG-v2.png",              f"{DOCS}\\static\\img\\og-image.png"),
]
for src, dst in assets:
    if os.path.exists(src):
        os.makedirs(os.path.dirname(dst), exist_ok=True)
        shutil.copy2(src, dst)
        print(f"✅ {os.path.basename(dst)}")

print("\n✅ All files deployed to magma-docs!")
print("Next steps:")
print("  cd C:\\PROJECTS\\magma-docs")
print("  npm start   (preview locally)")
print("  git add .")
print("  git commit -m 'feat: MAGMA branded docs with whitepaper content'")
print("  git push")
