# Vue Sneakers

This application is created to propagate the best practices of developing  Vue applications. 

# Table of Contents
  * [Build Setup](#build-setup)
  * [Practices](#practices)
    * [General guidelines](#general-guidelines)
    * [1. Use Vuex](#1-use-vuex)
    * [2. Do not use Router unless you really need it](#9-do-not-use-router-unless-you-really-need-it)
    * [3 Use async-await](#1-use-async-await)

  
## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build


## Practices
#### General guidelines

### 1. Use Vuex
As it's very easy to integrate and it provides a clear and simple architecture to your application, Vuex should be used for simple projects as well without thinking too much.

### 2. Do not use Router unless you really need it
It seems to be a good idea at first to use the Vue router but think it twice. It can make your application more complex as it's not straightforward to implement the two-way integration with the Vuex store and you have to make workarounds. It's not likely that your project needs the actual page linkable, especially if it is rendered in an iframe. You can easily replace the "page" handling with multiple high level components and a simple property in the Vuex store which tells what main component is active.

### 3. Use async-await

Instead of using Promises, you can always use `async` functions and `await` for async operations including Promise executions. It applies to the tests as well: