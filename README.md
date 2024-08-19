# danielvivar.com

<a class="badge-align" href="https://www.codacy.com?utm_source=git@bitbucket.org&amp;utm_medium=referral&amp;utm_content=jdvivar/danielvivar.com&amp;utm_campaign=Badge_Grade"><img src="https://api.codacy.com/project/badge/Grade/82359b0132e64877b0285c561a6b07aa"/></a>
<a href="https://www.netlify.com">
  <img src="https://www.netlify.com/img/global/badges/netlify-color-accent.svg"/>
</a>

This site contains a personal resumé/CV as a [Vue.js](https://github.com/vuejs/vue) app. It makes use of [Vue CLI 3](https://github.com/vuejs/vue-cli).

## Pre-requisites
Specifify a FontAwesome token, see [.env.example](.env.example) for instructions

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

This site was designed to be deployed with Netlify. Click the badge to start:

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/jdvivar/danielvivar.com)

Specifically, the AWS Lambda configuration is setup to to serve locally proxied endpoints that will mock the same relative paths that Netlify provides on the live server.

# Troubleshooting

## npm gives a weird error for a fontawesome package

This site uses a PRO licence from [FontAwesome](https://fontawesome.com/) for icons, via this Vue component: [vue-fontawesome](https://github.com/FortAwesome/vue-fontawesome). Because it's a private package, npm needs a token to verify the installation. A token is served through an environment variable (it's not available in the code).

But don't worry, if you don't have a FontAwesome licence then you'll need to remove the PRO icons and use the FREE ones instead, manually. Proceed as follows:
### 1. Remove the PRO icons package
```
$ npm uninstall @fortawesome/pro-light-svg-icons
```
### 2. Use the correct package when importing icons
Substitute lines like this in Vue components code:
```js
import { faAngleUp } from "@fortawesome/pro-light-svg-icons";
```
with this, note only the source package name changes, from `pro` to `free`:
```js
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
```

That's it. Now it all should work OK. However, free solid icons doesn't look as good for this design!

## E-mail/phone buttons are not working

I've used ƛ functions to provide contact data, so it's not available to spam robots. In Netlify this works seamlessly, but when executing the app locally, these cloud are just not available. We need to spin up a separate server specifically for them. [netlify-lambda](https://github.com/netlify/netlify-lambda) will help us with that. Click on the task in the Vue UI or execute the script:
```
npm run lambda:serve
```
##### Why didn't I add this in the `serve` command?
You can add it and it will work exactly as it works in Netlify, but then Vue UI doesn't capture any of the data from the `vue-cli-service serve` build command when it executes, so the dashboard just produces terminal lines and therefore the UI lose most of its appeal :)
