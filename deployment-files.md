# 🚀 Simple Deployment Files for GitHub Pages

## Option 1: docs/ folder (Recommended)

The cleanest deployment structure is ready in the `docs/` folder:

```
docs/
├── index.html          # Main website file
└── assets/
    ├── index-h1e2jqj_.css    # Styles (92KB)
    └── index-C-3lbp-K.js     # JavaScript (338KB)
```

**Total: Only 3 files!**

### GitHub Pages Setup:
1. Upload the `docs/` folder to your GitHub repository
2. Go to Settings → Pages
3. Source: "Deploy from a branch"
4. Branch: `main`
5. Folder: **`/docs`** (This is key!)
6. Save

Your site will be live at: https://r181104.github.io/WoodCraftIndia/

## Option 2: Root deployment

If you prefer root deployment:
1. Copy files from `docs/` to repository root
2. Update paths in index.html (remove `./` prefix)
3. Set GitHub Pages folder to `/ (root)`

## Why This Fixes Your Issues:

✅ **Fewer Files**: Only 3 files instead of entire project structure
✅ **GitHub Pages Fix**: Using `/docs` folder prevents README from showing
✅ **Clean Structure**: Professional deployment with just the essentials
✅ **Proper Paths**: Asset links work correctly on GitHub Pages

The README will remain in your repository root for documentation, but GitHub Pages will serve the website from the `/docs` folder instead.