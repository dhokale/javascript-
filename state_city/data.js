var select=document.getElementById("list1");
const select1=document.getElementById("list");
let request = new XMLHttpRequest();
request.open("get","data.json");
request.responseType="json";
request.send();
request.onload=function(){
    const text=request.response; 
 state(text);
}
function state(obj){
    const state=obj["state"];
   for( let i=0;i<state.length;i++){
    const option=document.createElement('option');
    option.textContent=state[i];
select.appendChild(option);
}
}

document.getElementById("list1").addEventListener("change",handelChange);
function handelChange(event){
    var x=document.getElementById("list1").value;
    if(x=="maharashtra"){
        document.getElementById("list").innerHTML=clearInterval;
        const request1=new XMLHttpRequest();
    request1.open("get","data.json");
    request1.responseType="json";
    request1.send();
    request1.onload=function(){
        const text1=request1.response; 
    lode(text1);
    }
    }
    else if(x=="karala"){
        document.getElementById("list").innerHTML=clearInterval;
        const request2=new XMLHttpRequest();
        request2.open("get","data.json");
        request2.responseType="json";
        request2.send();
        request2.onload=function(){
            const text2=request2.response; 
        lode1(text2);
        }
    }
    else if(x=="UP")
    {
        document.getElementById("list").innerHTML=clearInterval;
        const request3=new XMLHttpRequest();
        request3.open("get","data.json");
        request3.responseType="json";
        request3.send();
        request3.onload=function(){
            const text3=request3.response; 
        lode2(text3);
        }   
    }
    else if(x=="MP"){
        document.getElementById("list").innerHTML=clearInterval;
        const request4=new XMLHttpRequest();
        request4.open("get","data.json");
        request4.responseType="json";
        request4.send();
        request4.onload=function(){
            const text4=request4.response; 
        lode3(text4);
        }   
    }
    else if(x=="asam"){
        document.getElementById("list").innerHTML=clearInterval;
        const request5=new XMLHttpRequest();
        request5.open("get","data.json");
        request5.responseType="json";
        request5.send();
        request5.onload=function(){
            const text5=request5.response; 
        lode4(text5);
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

function lode1(obj){
    var karala=obj["karala"];
    for( let j=0;j<karala.length;j++ ){
        const option2=document.createElement("option");
option2.textContent=karala[j];
select1.appendChild(option2);      
    }
}

function lode2(obj){
    var UP=obj["UP"];
    for( let i=0;i<UP.length;i++ ){
        const option3=document.createElement("option");
option3.textContent=UP[i];
select1.appendChild(option3);      
    }
}

function lode3(obj){
    var MP=obj["MP"];
    for( let i=0;i<MP.length;i++ ){
        const option4=document.createElement("option");
option4.textContent=MP[i];
select1.appendChild(option4);      
    }
}

function lode4(obj){
    var asam=obj["asam"];
    for( let i=0;i<asam.length;i++ ){
        const option5=document.createElement("option");
option5.textContent=asam[i];
select1.appendChild(option5);      
    }
}