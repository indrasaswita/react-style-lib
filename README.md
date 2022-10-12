# React Style Library
A customized style library of React. You can install this package from [npm](https://www.npmjs.com/package/react-style-template) by typing `npm i react-style-template` to your repository.

## Way to deploy locally
1. Clone this repo.
	```
	git clone https://github.com/indrasaswita/react-style-lib.git
	cd react-style-lib

	# now you are working on the master branch
	```
2. Compile SCSS file with node-sass. You can use `npm run watch:scss` in your terminal. Each time you change the scss file, it should automatically change the css file. Note: The component only use `*.css` file, 
3. To run the storybook, you can use `npm run storybook`. When it successed, you will be rediecting to `http://localhost:6006/`. [Storybook](https://storybook.js.org/) allows you to see all the components in this repository.

## Way to publish the app
1. First you need to run the rollup. You can use `npm run rollup` to create dist folder in the root. Fyi, [npm](https://www.npmjs.com/package/react-style-template) will publish this content to their server.
2. Find `package.json` inside root, then you can change the version. It should not be the same as previous version.
3. Then you can login to npm by using terminal. Just typing `npm login`, then you can fill username, password, email, and OTP. Once will be enough, you don't need to do it twice or more. *Or if you have no account yet, you can go to [NPM Website](https://www.npmjs.com/) to sign up*
4. When you are logged in, you can publish your library through npm by using `npm publish`.

### Others
It's my personal library. You can visit:
1. (Alex's Lesson)[https://dev.to/alexeagleson/how-to-create-and-publish-a-react-component-library-2oe] as my original tutorial. 
2. (Atomic Design)[https://atomicdesign.bradfrost.com/chapter-2/]

Hope this help! And I also open for further discussion.