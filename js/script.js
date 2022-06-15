'use strict';

const   inputKC = document.querySelector("#kc"),
        inputUSD = document.querySelector("#usd");

inputKC.addEventListener("input", ()=>{
    const request = new XMLHttpRequest();
    request.open('GET','js/current.json');
    request.setRequestHeader('Content-type','application/json; charset=utf-8');
    request.send(); 

    request.addEventListener('load', () =>{
        if(request.status === 200 ) {
            const data = JSON.parse(request.response);
            inputUSD.value = (+inputKC.value / data.current.usd).toFixed(2);
        } else {
            inputUSD.value = "error 404";
        }
         
    });
});
