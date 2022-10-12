# Friendly Solution - code task

## Instalation:
Copy URL: 
```
https://github.com/Liluter/FriendlySolution.git
```
Create new folder on local enviroment. Switch to new folder 
```
$ cd [new-folder]
```
Next use copied URL with github command to clone this repo
```
$ git clone [URL]
```

And then need to install all dependemcies by 
```
$ npm install
```

In case errors with leagacy dependencies add `npm install --legacy-peer-deps` option.

To run on localhost 
```
$ ng serve
```
If everything is ok you can open your browser on localhost:4200 

## Description / Usage

This is simple application to filter data of work orders by passing description fragments into input field.
You can use Case-insensitive text.

## Implementation

Data was deliver by static JavaScript Object so in asset folder the file with data was create as data.json
Then with browser API fetch() method, simulate fetching data from a server.


## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
