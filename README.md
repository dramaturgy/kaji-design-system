### MVP-CMS

#### Setup

Minimum requirements: __node 8.5.0, npm 5.6.0, yarn 1.3.2__

1. Install yarn
```
brew install yarn --without-node
```

3. Install __gulp 4__
```
# Uninstall previous Gulp installation and related packages, if any
cd ~
npm rm gulp -g
npm rm gulp-cli -g
cd [repo-dir]/mvp-cms
npm rm gulp --save-dev
npm rm gulp --save
npm rm gulp --save-optional
npm cache clean

# Install latest Gulp CLI globally
npm install gulpjs/gulp-cli -g

# Install Gulp 4 into the repo-dir/mvp-cms from 4.0 GitHub branch as dev dependency
npm install gulpjs/gulp#4.0 --save-dev
gulp -v


# should display like following
[16:04:53] CLI version 2.0.0
[16:04:53] Local version 4.0.0-alpha.3
```

2. Clone repo and cd `[repo-dir]/mvp-cms`

3. Install dependencies
```
# make sure you're at mvp-cms not the repo dir
# then run yarn

yarn
```

4. Build & serve (using browsersync)
```
gulp
```

5. Open `localhost:1985/cms` from your browser

### UI Migration Checklist

```
Page: Tuition
Components:
– Root HTML: mvp-cms/src/template/_layout/cms.html (status: UI DONE)
– Footer JS: mvp-cms/src/template/_include/cms/footer-script.html (status: UI DONE)
– Navbar: mvp-cms/src/template/_include/cms/navbar.html (status: UI DONE)
– Sidenav: mvp-cms/src/template/_include/cms/sidenav.html (status: UI DONE)
– Filter Bar: mvp-cms/src/template/_include/cms/tuition/filter-bar.html (status: UI DONE)
– Tuition Table: N/A (status: UI ON PROGRESS)
– Popups & Modal: N/A (status: UI BACKLOG)

Page: Home
– Timeline: N/A (status: UI BACKLOG)

Page: Login
– Form: N/A (status: UI BACKLOG)
```