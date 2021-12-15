const select=document.getElementById("list1");
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
   for( var i=0;i<hero.length;i++){
    const option=document.createElement('option');
    option.textContent=hero[i];
select.appendChild(option);
}
if(hero[i]="maharashtra"){
    const maharashtra=obj["maharashtra"];
    for(let j=0;j<maharashtra.length;j++){
        const option1=document.createElement("option");
        option1.textContent=maharashtra[j];
        select1.appendChild(option1);    
}
}
}

function maharashtra(obj){
    
}