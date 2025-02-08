# SwapCrew Site

This repository contains the **SwapCrew** static site built with **React + Vite** and deployed using **GitHub Pages**.

## 🚀 Getting Started

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/SwapCrew/swapcrew-site.git
cd swapcrew-site
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Start Development Server
```sh
npm run dev
```
This will start the Vite development server at `http://localhost:5173/`.

## 🔄 Pushing Code to `main`
If you are making changes, follow these steps before pushing to the **main** branch:

### **1. Pull Latest Changes**
```sh
git pull origin main --rebase
```
This ensures your local branch is up to date and avoids merge conflicts.

### **2. Add and Commit Your Changes**
```sh
git add .
git commit -m "Your meaningful commit message"
```

### **3. Push to `main`**
```sh
git push origin main
```

## 🚀 Deploying to GitHub Pages
This project is automatically deployed to GitHub Pages using `gh-pages`.
To deploy manually:

```sh
npm run deploy
```
This will build the project and push the `dist/` folder to the `gh-pages` branch.




