# 🎂 Happy Birthday Bhavika! 🎉

A cute, interactive birthday website with animations and a pixel art cake.

## Features

- ✨ Beautiful dark theme with golden text
- 🎂 Interactive pixel art cake
- 🕯️ Clickable candle that you can blow out
- 🎊 Confetti animation when candles are blown
- 📱 Fully responsive design
- 🎨 Smooth animations and transitions

## How to Use Locally

1. Clone or download this repository
2. Open `index.html` in your web browser
3. Click the cake, then blow out the candles!

## How to Deploy to GitHub Pages (Free Hosting)

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Name your repository (e.g., `bhavika-birthday`)
5. Make it **Public** (required for free GitHub Pages)
6. **Do NOT** initialize with README, .gitignore, or license
7. Click "Create repository"

### Step 2: Upload Your Files

#### Option A: Using GitHub Web Interface

1. In your new repository, click "uploading an existing file"
2. Drag and drop all files from this folder:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `README.md`
3. Scroll down and click "Commit changes"

#### Option B: Using Git Command Line

```bash
# Navigate to this folder
cd /path/to/Bhavika

# Initialize git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit: Birthday website for Bhavika"

# Add your GitHub repository as remote (replace YOUR_USERNAME and REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" in the left sidebar
4. Under "Source", select "Deploy from a branch"
5. Choose "main" branch and "/ (root)" folder
6. Click "Save"
7. Wait a few minutes for GitHub to deploy your site
8. Your site will be available at: `https://YOUR_USERNAME.github.io/REPO_NAME/`

## Customization

### Change the Name

Edit `index.html` and replace "Bhavika" with your desired name in the `<h1>` tag.

### Change Colors

Edit `styles.css` and modify the color values:
- Background: `background-color: #000000;` (line ~12)
- Text color: `color: #FFD700;` or `#FFA500;` (golden colors)
- Cake color: Modify the `#FF8C00` and related orange colors in the `.tier` styles

### Add More Content

You can add more sections to `index.html` before the closing `</div>` of the `.content` div.

## Browser Compatibility

Works on all modern browsers:
- Chrome/Edge
- Firefox
- Safari
- Opera

## License

Free to use and modify for personal projects!

---

Made with ❤️ for Bhavika's birthday!

