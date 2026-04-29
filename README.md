# OFF/BEAT — Official Concept Website

> A venture studio concept website built for OFF/BEAT — Aman Gupta's ₹100 Cr venture studio backed by Bessemer Venture Partners. Built with React + Vite.

---

## 🚀 What's Inside

- **Animated Hero** — Glitch + shake effect on main heading, floating badge, orbit rings, BG marquee
- **Scrolling Ticker** — Top-of-page live news ticker
- **Smooth Navbar** — All links scroll to sections, active link highlight, sticky on scroll
- **Studio Section** — Cards showing what OFF/BEAT does
- **AI Tagline Generator** — Real AI (Google Gemini) generates bold brand taglines
- **Creator Application Form** — With toast notification on submit
- **Watch the Story Modal** — YouTube video overlay
- **Stats Footer** — Numbers & achievements

---

## 🛠️ Local Setup (Run on Your Computer)

### Step 1 — Install Node.js
If you don't have Node.js installed:
- Go to https://nodejs.org
- Download the **LTS version** and install it
- Verify: open terminal and run `node --version` (should show v18 or higher)

### Step 2 — Clone the Repo
```bash
git clone https://github.com/vidhiii1711/OFF-BEAT-demo.git
cd OFF-BEAT-demo
```

### Step 3 — Install Dependencies
```bash
npm install
```

### Step 4 — Add Your Gemini API Key
1. Go to https://aistudio.google.com/app/apikey
2. Sign in with Google → Click **"Create API Key"** → Copy it
3. Open the file: `src/components/AITools.jsx`
4. Find line 12:
   ```js
   const GEMINI_API_KEY = ''  // <-- PASTE YOUR KEY HERE
   ```
5. Paste your key inside the quotes:
   ```js
   const GEMINI_API_KEY = 'AIzaSy...'
   ```

### Step 5 — Run the Project
```bash
npm run dev
```
Open your browser and go to: **http://localhost:5173**

---

## 🌐 Deploy to Vercel (Get a Live URL)

### Step 1 — Create a Vercel Account
- Go to https://vercel.com
- Click **Sign Up** → Choose **Continue with GitHub**
- It will ask you to authorize Vercel — click **Authorize**

### Step 2 — Import Your GitHub Repo
- After logging in, click **"Add New..."** → **"Project"**
- You'll see your GitHub repos listed
- Find **OFF-BEAT-demo** and click **"Import"**

### Step 3 — Configure the Project
Vercel will auto-detect it's a Vite project. Settings should look like:
- **Framework Preset:** Vite
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Install Command:** `npm install`

Leave everything else as default.

### Step 4 — Add Your API Key as an Environment Variable
⚠️ **IMPORTANT** — Do NOT hardcode your API key for production. Instead:
1. On the Vercel import screen, click **"Environment Variables"**
2. Add:
   - **Name:** `VITE_GEMINI_API_KEY`
   - **Value:** paste your Gemini API key
3. Click **Add**

Then update `src/components/AITools.jsx` line 12 to:
```js
const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY || ''
```

### Step 5 — Deploy!
- Click **"Deploy"**
- Wait ~1 minute
- You'll get a live URL like: `https://off-beat-demo.vercel.app` 🎉

---

## 📤 Push Changes from VS Code to GitHub

### First Time Setup (only once)

#### Step 1 — Install Git
- Go to https://git-scm.com/downloads and install Git

#### Step 2 — Open Project in VS Code
- Open VS Code → File → Open Folder → select the `OFF-BEAT-demo` folder

#### Step 3 — Connect to Your GitHub Repo
Open the VS Code terminal (**Ctrl + `**) and run:
```bash
git init
git remote add origin https://github.com/vidhiii1711/OFF-BEAT-demo.git
git branch -M main
```

Set your Git identity (first time only):
```bash
git config --global user.email "your@email.com"
git config --global user.name "Your Name"
```

---

### Every Time You Make Changes

In VS Code terminal, run these 3 commands:

```bash
# 1. Stage all changes
git add .

# 2. Commit with a message describing what you changed
git commit -m "describe what you changed here"

# 3. Push to GitHub
git push origin main
```

**OR use VS Code's built-in Git UI:**
1. Click the **Source Control icon** (left sidebar, looks like a branch)
2. Type a commit message in the box at the top
3. Click the **✓ checkmark** to commit
4. Click **"Sync Changes"** to push

---

### Auto-Deploy on Every Push
Once Vercel is connected to your GitHub repo, **every time you push to GitHub, Vercel automatically rebuilds and redeploys your site.** No manual steps needed.

---

## 🔑 Where to Add the API Key

| Scenario | Where to Add |
|---|---|
| Running locally | `src/components/AITools.jsx` line 12, inside the quotes |
| Deployed on Vercel | Vercel Dashboard → Your Project → Settings → Environment Variables |

---

## 📁 Project Structure

```
OFF-BEAT-demo/
├── public/
├── src/
│   ├── components/
│   │   ├── Ticker.jsx / Ticker.css       ← Top scrolling bar
│   │   ├── Navbar.jsx / Navbar.css       ← Navigation
│   │   ├── Hero.jsx / Hero.css           ← Main hero section
│   │   ├── Studio.jsx / Studio.css       ← What we do section
│   │   ├── AITools.jsx / AITools.css     ← AI Tagline Generator ← ADD KEY HERE
│   │   ├── Creators.jsx / Creators.css   ← Creator application form
│   │   ├── StatsBar.jsx / StatsBar.css   ← Stats section
│   │   └── VideoModal.jsx / VideoModal.css ← Watch the Story popup
│   ├── App.jsx                           ← Main app
│   ├── App.css                           ← App-level styles
│   ├── main.jsx                          ← Entry point
│   └── index.css                         ← Global styles + animations
├── index.html
├── vite.config.js
└── package.json
```

---

## 🆓 Free Resources Used

| Tool | Purpose | Cost |
|---|---|---|
| React + Vite | Frontend framework | Free |
| Google Gemini API | AI tagline generation | Free (1500 req/day) |
| Vercel | Hosting & deployment | Free |
| Google Fonts | Bebas Neue, Syne, DM Mono | Free |

---

## 💡 Built as an Internship Application Project

This website was built to demonstrate web development skills and understanding of OFF/BEAT's mission for an internship application. It serves as a concept for what OFF/BEAT's official web presence could look like.

**OFF/BEAT** is Aman Gupta's venture studio backed by Bessemer Venture Partners, focused on building India's next bold consumer brands at the intersection of AI, culture, and technology.
