# Node Package Manager (NPM)

- A libray of thousands of packages published by other developers that we can use for free!!
- A command line tool to easily install and manage those packages in our Node projects

### Add packages 
- npm install <package>

###  Import in the .js
```
const color = require('colors');
```

### Global VS local packages

Installing globally means you can use it outside of the current directory.
```
npm i -g cowsay
```

### Package.json

The package.json has meta data, or data about the app.
- Dependencies
- versions
- json file

### Create Package.json file
```
npm init
```
Any time you download a package it is added to the package.json


### Download dependencies from other projects

The node modules files is usually not uploaded to github.

You would clone the code then add the node modules after.

  - After you clone the code you would type:
```
npm i 
```
- This will install all of the dependencies in the package.json that you need to run the project.

