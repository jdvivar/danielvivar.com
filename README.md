# danielvivar.com

This site contains a personal resumé/CV as a simple [Vue.js](https://github.com/vuejs/vue) app. It uses the new [Vue CLI 3](https://github.com/vuejs/vue-cli). You can visit it live in https://personal.danielvivar.com. It's still on construction though! 🏗👷

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
Substitute this lines in Vue components code:
```js
import { faAngleUp } from "@fortawesome/pro-light-svg-icons";
```
with this other one:
```js
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
```

Now it all should work. However, the free solid icons looks doesn't match the design.

## The buttons for email/phone are not working

Lambda functions are serving sensitive data. We need to run a separate server specifically for them. [netlify-lambda](https://github.com/netlify/netlify-lambda) will help us with that:
```
npm run lambda:serve
```
Why I didn't add this as part as the `serve` command?
Because then Vue UI doesn't capture any of the data from the `vue-cli-service serve` command.
