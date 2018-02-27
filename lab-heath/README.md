# LAB 31: Budget Tracker

---
### Installing and How to use.

To install this program, place fork and 'git clone' this repo to your computer. From the terminal, navigate to  `lab-heath`. once there, install NPM but typing in , `nmp install` and after that, you will neex to install all the dependencies. do this by typing in `npm i`. 

next you need to have these scripts adjusted in your package.json file.

```javascript
"scripts": {
    "test": "jest",
    "watch": "webpack-dev-server --inline --hot"
  },
  ```

from there, you can go to your terminal and type, 

```javascript
node run build
```
this will build out a it builds the app by packaging it all up into a simple file for us to use later on.

to get a preview of your app. you need to run this command also.

```javascript
node run watch
```
once you have done that. you can go to your localhost:8080 and see your project in the browser.

---
## How to use

you have 2 input boxes that will take in a strings. this is a `title` and a `price`. you will have a button below that will submit the data into the app that will return an list item that will have the title, data made, and price.

### fail safe
you need to have both items in the input box or you will get an aleart saying that you need both items. once you have entered both, the button will then work.

above the input form is a running total of the amount spent of items.

### Updating data
you can also double click on the grey box that will open up an update form. Here you can change the data if needed. once you have hit the Update buttin, the running total will also update as well. 

### delete button
Just hit the delete button on the item and it will remove that item from storage.