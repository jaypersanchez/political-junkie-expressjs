This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Project Overview

Political Junkie is a social media website is geared for those who follow politics.  This is a place where people can speak their mind no matter what their political leanings are.  There is no safe space here but personal attacks will not be permitted.  This project was motivated during the 2020 U.S Presidential election when Twitter and Facebook started to be accused of muting any comments not accepted by each giant organization. 

## Features to Add

1. Hashing of user password
2. Join groups that are private
3. Allow comments to post and reply to comments
4. Use Redux to replace sessionStorage
5. UI cosmetic work

## Development and Creating New React Project

1. Create an empty directory for the project and change directory into it
2. Run command to create the React application

```
npx create-react-app client
```
where 'client' is the application name

3. Test newly created application by changing directory into the app name and run the command

```
npm start
```

4. If the application starts in the browser, the application setup is successful.  Now edit the app.js and remove the boiler plate code wich is the '<header>' tag

5. Download bootstrap library from bootstrapcdn.com.  As of this writing, you copy and paste the link below into the index.html

```
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
```

6. Then copy/paste the script tab above the closing body tag

```
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
```

7. Test the above links but creating a button component in App.js

```
<button className='btn btn-primary'>Submit</button>
```
8. Install the React Router library.  This allows page navigation

```
npm install react-router-dom
```

9. Remove the import of logo line in App.js.  Not using that anymore.  Should be located in line 2

```
import logo from './logo.svg';
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

## MongoDB

brew services stop mongodb
brew uninstall mongodb

brew tap mongodb/brew
brew install mongodb-community
brew services start mongodb/brew/mongodb-community

 ### Mongod Console

 mongod --dbpath=/Users/jaypersanchez/data/db

 ## Deployment

 Use server Heroku.  Sign up.  Use Heroku for deployment

### The command below will build the entire project and save in a build folder.  Run this command first from the 'client' folder

````
 npm run build
 ````

## Required Install for Deployment

1. Install Heroku CLI and signup for an account
2. Signup for Mongo Atlas a cloud based mongo database cluster

## Deploy Steps

1. Log into your Heroku from console
````
heroku login
````
This will open the Heroku login page on he browser.  Provide your credential
2. Run Command 
````
git init
````
3. change to root, outside client directory, ans run the command below
````
heroku create <name of the project>
````
4. Run the following git commands
````
git add .
git commit -m "comment"
git push heroku master
````


