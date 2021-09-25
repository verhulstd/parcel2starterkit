# ParcelJS (v2) starterkit for syntra front-end development

[Parcel version 2 website](https://v2.parceljs.org/)

## Prerequisites (_do this once_)

    npm i -g parcel surge live-server

## Install repo and start development

    1. md app
    2. cd app
    3. code .
    4. git clone https://github.com/verhulstd/parcel2starterkit.git .
    5. mv \#.gitignore .gitignore
    6. rm -rf .git
    7. git init
    8. npm i
    9. npm start
    10. A new GitHub repo can be made and attached by running "git remote set-url origin <new-repo-url>"
    11. npm libraries can be installed and then imported in the index.js file, e.g.: import randomColor from 'randomcolor';

## Features

### 1. Image minification support

The "@parcel/transformer-image" is used for this (provided in package.json)

**usage:**

    <picture>
        <source src="url:./images/tiger.jpg?as=webp&width=800" type="image/webp"/>
        <source src="url:./images/tiger.jpg?width=800"  type="image/jpeg"/>
        <img src="url:./images/tiger.jpg?width=200"  alt="test image"/>
    </picture>

### 2. SCSS support

The "@parcel/transformer-sass" is used for this (provided in package.json)

### 3. CSS prefixing support

The "autoprefixer" package is used for this (provided in package.json as devdependency)
**config:** _placed in .postcssrc file in root_

### 4. HTML includes support

The "posthtml-include" is used for this (provided in package.json)

**usage:**

    <include src="./header.html"></include>

**config:** _placed in .posthtmlrc file in root_

### 5. icons support (focused on icomoon download)

The icons use an embedded svg sprite included by `<include src="./symbol-defs.svg"></include>`

1.  download your icomoon.io package
2.  place _style.css_ in _/icons_
3.  place _symbol-defs.svg_ in _/includes_

**usage:**

    <svg class="icon icon-download">
        <use href="#icon-download"></use>
    </svg>

**config:** _placed in .htmlnanorc file in root_

### 6. Babel transpilation to es5

"@babel/core" package is provided in package.json along with "@parcel/babel-preset-env" to set what to transpile.

**config:** _placed in .babelrc file in root_

### 7. Environment variables support (_.env_)

**config:** _.env.development_ and _.env.production_ in root

### 8. Build for production

    npm run build

### 9. Test production build

    npm run serve

### 10. Deploy to surge

1. first set your required domainname in package.json script "scripts" : { "deploy" : ... }
2. `npm run serve`

### 11. git support

enable _.gitignore_ by **removing the hashtag** (this is done to provide you the .env files that are default not added to a repo)
