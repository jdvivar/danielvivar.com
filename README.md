# danielvivar.com

<a class="badge-align" href="https://www.codacy.com?utm_source=git@bitbucket.org&amp;utm_medium=referral&amp;utm_content=jdvivar/danielvivar.com&amp;utm_campaign=Badge_Grade"><img src="https://api.codacy.com/project/badge/Grade/82359b0132e64877b0285c561a6b07aa"/></a>
<a href="https://www.netlify.com">
  <img src="https://www.netlify.com/img/global/badges/netlify-color-accent.svg"/>
</a>

This site contains a personal resumé/CV as a simple [Vue.js](https://github.com/vuejs/vue) app. It uses the new [Vue CLI 3](https://github.com/vuejs/vue-cli). You can visit it live in https://www.danielvivar.com. It's still on construction though! 🏗👷

## How to start

Clone the repo locally and install its node dependencies
```
$ git clone git@github.com:jdvivar/danielvivar.com.git
$ cd danielvivar.com
$ npm install
```

That's it. To make the most out the Vue CLI, open its UI from anywhere:
```
$ vue ui
```
Now from there you can point and click any npm task you wish:

![Vue UI](https://i.imgur.com/16QWIBe.png)

## Continuous Deployment with Netlify

This site is designed to be deployed with Netlify. Click the badge to start:

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/jdvivar/danielvivar.com)

Specifically, the AWS Lambda configuration is setup to to serve locally proxied endpoints that will mock the same relative paths on the live server.

# Troubleshooting

## npm gives a weird error for a fontawesome package

This site uses a PRO licence from [FontAwesome](https://fontawesome.com/) for icons, specifically this Vue component: [vue-fontawesome](https://github.com/FortAwesome/vue-fontawesome). Because it's a private package, npm needs a token to verify the instalation. A token is served through an environment variable (it's not available in the code).

If you don't have a FontAwesome licence then you'll need to remove the PRO icons and use the FREE ones instead, manually.
### 1. Remove the PRO icons
```
$ npm uninstall @fortawesome/pro-light-svg-icons
```
### 2. Use the correct file when adding icons to components
Substitute lines like this in Vue components code:
```js
import { faAngleUp } from "@fortawesome/pro-light-svg-icons";
```
with this, note only the source package name changes:
```js
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
```

Now it all should work OK. However, free solid icons doesn't look as good in this site.

## E-mail/phone buttons are not working

Lambda functions are used to serve sensitive data, like the phone or e-mail in this case. We need to run a separate server specifically for them. [netlify-lambda](https://github.com/netlify/netlify-lambda) will help us with that:
```
npm run lambda:serve
```
Why didn't I add this in the `serve` command?
You can and it will work exactly as it works in Netlify, but then Vue UI doesn't capture any of the data from the `vue-cli-service serve` command when it executes the build, so the dashboard just produces terminal lines and then the UI will lose much of its appeal :)
