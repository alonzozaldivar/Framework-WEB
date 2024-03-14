//import axios from 'axios';
const axios = require('axios');

//var url = "https://jsonplaceholder.typicode.com/posts"
var url = "https://jsonplaceholder.typicode.com/albums"

//axios.get(url).then(({data}) => {
    // for (const key in data) {
    //     console.log(data[key].title)
    // }
//}).catch((err) => {
//    console.log(err)
//});

//axios.post(url,{
//    userId: 2,
//    title: "lorem Ipsum Etc etc"
//}).them(({data})=> console.log(data))

axios.get(url).then(({data}) => {
    for (const key in data) {
       console.log(data[key].id)
        console.log(data[key].title)
    }
    //console.log(data)
}).catch((err) => {
console.log(err)
});

