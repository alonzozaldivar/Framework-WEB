//var url = "https://jsonplaceholder.typicode.com/users"

//var responseData =  fetch (url).then(response=> response.json());
//responseData.then(({username,email}) => {
//  for (const {username,email} in responseData) {
//        console.log("username: " + username)
//
//  }
//})
/*
var url = "https://jsonplaceholder.typicode.com/users"
fetch(url).then(response => response.json())
.then(response =>{
    for(var key in response){
        console.log("username:" + response[key].username)
        console.log("city:" + response[key].address.city)
        console.log("zipcode:" + response[key].address.zipcode)
        console.log("suite: " + response[key].address.suite)
        console.log("nameCompany: " + response[key].company.name)
    }
})
*/
//var url = "https://jsonplaceholder.typicode.com/albums"
//fetch(url).then(response => response.json())
//.then(response =>{
  //  for(var key in response){
    //    console.log("UserId: " + response[key].userId)
      //  console.log("id: " + response[key].id)
        //console.log("Title: " + response [key].title + "\n")
    //}
//})

//fetch(url, {
//    method: "POST",
//    headers: {
//        "Content_type": "application/json"
//    },
//    body: JSON.stringify({
//        userId: 101,
//        id:101,
//        title: "Foo Bar Title"
//    })
//}).then(response => response.json())
//.then(response => console.log(response))

var url = "https://jsonplaceholder.typicode.com/users"

fetch(url, {
    method: "POST",
    headers: {
        "Content_type" : "application/json"
    },
    body: JSON.stringify({
        id: 11,
        name:"Alonzo Zaldivar",
        username: "alonzo",
        email:"alonzo@mail.com",
        address: {
            street: "Real del monte",
            suite: "apt. 22",
            city: "Tijuana",
            zipcode: 2210,
        },
        geo:{
            lat: -37.3159,
            lng: 81.9923,
        },
    })

}).then(response => response.json())
.then(response => console.log(response))


