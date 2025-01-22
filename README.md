<div align="center">
  <img src="https://github.com/user-attachments/assets/10c3c1ba-aeed-4d82-af2e-d55ec02097a9"/>
</div>

# 🔰 Github-roast

- Use AI to analyze and compare two GitHub profiles. Get praised, get roasted, and most importantly, have fun! Also, see a Chart Comparison between both profiles.

- Web build deployed on `vercel` under free tier [Link](https://github-war.netlify.app/).

## 📚 Tech Stack

- Next.js
- Tailwind CSS
- Shad-CN (UI Component)
- Github API
- Gemini API


## 🔩 Environment Variables

- The environment variables are configured in `.env.example` file
- `NEXT_PUBLIC_GEMINI_API_KEY=`


## 🔨 Setting Up

Follow the following instructions to set up the project and run it locally

- Run `npm install` to install all the dependencies.
- Run `npm run dev` to start the development server.
- Get your API key from Gemini and paste it into the .env file with `NEXT_PUBLIC_GEMINI_API_KEY` this name.
- To make a web build run `npm run build` and the build files will be generated in the `dist` folder.

## ⚡ Features

- The app takes your GitHub username and compares it with the other user's profile you have entered.
- Based on the comparison it trolls you or praises you.
- See the detailed analyses/comparison with the graph at the bottom of the page.
- Set the mode to dark/light according to your need.

## 📁 File Structure :

```
.
├── assets
│   │── images
│   │   
│   │── favicon.png
│   │── splash.png
│   │── icon.png
│   └── adaptive-icon.png
├── components
│   │── UI
│   │── └── ... ShadCn Components
│   │── Cart.tsx
│   │── Chart.tsx
│   │── Footer.tsx
│   │── Mode-toggle.tsx
│   └── Navbar.tsx
├── app
│   └── ... /(root)/github
├── └── page.tsx
├── └── layout.tsx
├── .env.example
├── package.json
├── package-lock.json
├── README.md
└── .gitignore
```

<div align="center">
  <img src="https://github.com/user-attachments/assets/bd1c8c14-8491-446c-835f-9bd053fd2ea8"/>
</div>

## Support

If you like this project, give it a ⭐




