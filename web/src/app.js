/*
* File: app.js
* Author: Bartha Levente
* Copyright: 2025, Bartha Levente
* Group: IN
* Date: 2025-05-21
* Github: https://github.com/barthaleventegabor/
* Licenc: MIT
*/
const tbody = document.querySelector('#tbody')
const url = 'http://localhost:8000/api/bikes'
var bikeList = []

function getBikes(){
    fetch(url)
    .then(response => response.json())
    .then(result => {
        console.log(result.data)
        bikeList = result.data
        renderTbody()
    })
}

function renderTbody(){
    let rows = ""
    for(let bike of bikeList){
        
        rows += `
        <tr>
            <td>${bike.id}</td>
            <td>${bike.name}</td>
            <td>${bike.wheel}</td>
            <td>${bike.usage}</td>
            <td>${bike.price}</td>
        </tr>
        `
        
        
    }
    console.log(rows)
    tbody.innerHTML = rows
}

getBikes()
