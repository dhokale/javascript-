
class User{
        constructor( fname, email){
            this.fname= fname;
            this.email= email;
        }
   newRegister()
   {
let tr=document.createElement("tr");
tr.setAttribute("id","myTr");
document.getElementById("table").appendChild(tr);
let td=document.createElement("td");
let  t =document.createTextNode(this.fname);
td.appendChild(t);
document.getElementById("myTr").appendChild(td);
let td1=document.createElement("td");
let t1 = document.createTextNode(this.email);
td1.appendChild(t1);
document.getElementById("myTr").appendChild(td1);
   } 
}