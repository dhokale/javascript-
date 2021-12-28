var select=document.getElementById("list1");
const select1=document.getElementById("list");
let request = new XMLHttpRequest();
request.open("get","data.json");
request.responseType="json";
request.send();
request.onload=function(){
    const text=request.response; 
    valid(text);
}
function valid(obj){
    const hero=obj["state"];
   for( let i=0;i<hero.length;i++){
    const option=document.createElement('option');
    option.textContent=hero[i];
select.appendChild(option);
}
if(document.activeElement=hero[0]){
    const request1=new XMLHttpRequest();
    request1.open("get","data.json");
    request1.responseType="json";
    request1.send();
    request1.onload=function(){
        const text1=request1.response; 
    lode(text1);
    }
    }
    else if(document.activeElement=hero[1]){
        const request2=new XMLHttpRequest();
        request2.open("get","data.json");
        request2.responseType="json";
        request2.send();
        request2.onload=function(){
            const text2=request2.response; 
        karalae(text2);
        }
    }
}


function lode(obj){
    var maharashtra=obj["maharashtra"];
    for( let i=0;i<maharashtra.length;i++ ){
        const option1=document.createElement("option");
option1.textContent=maharashtra[i];
select1.appendChild(option1);      
    }
}

function karalae(obj){
    var karala=obj["karala"];
    for( let i=0;i<karala.length;i++ ){
        const option2=document.createElement("option");
option2.textContent=karala[i];
select1.appendChild(option2);      
    }
}