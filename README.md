## ✨ Mana Wiki
The official Wiki repository for Mana, the Discord bot. This is where you can find the Vuepress source of the wiki hosted on [wiki.manabot.fun], any commits merged to `master`
branch will immediately be deployed over at the site, so please make sure all PRs are tested.

## ❤️ How does it work?
Vuepress works by generating static wikis through Vue.js, you can write down an `.md` file on a folder that would then be the category. All the content on the `.md` file should
be written in `markdown` text language. You can feel free to run your content via Grammarly or other grammar checkers if you like, but that's purely optional. As for images, 
please host them on another location like [ImgBB](https://imgbb.com) or Discord's CDN.

## 💙 Testing
To test your PRs or build, you can run the NPM command below which will host the project on your localhost
at port 8080 which you can then view the changes realtime.
```npm
npm run dev
```

## :package: Build status
[![Netlify Status](https://api.netlify.com/api/v1/badges/01d7354b-2de2-40b1-acf0-bb2fc5f95f34/deploy-status)](https://app.netlify.com/sites/fervent-murdock-049285/deploys)
