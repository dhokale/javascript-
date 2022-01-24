class User{
    
        constructor( fname, email){
            this.fname= fname;
            this.email= email;
            var newRegister;     
        }
   newRegister=()=>{
    let tr=document.createElement("tr");
let td=document.createElement("td");
td.innerHTML= this.fname;
let td1=document.createElement("td");
td1.innerHTML =this.email   ;
tr.appendChild(td);
tr.appendChild(td1);
 var table=document.getElementById("myTable");
table.appendChild(tr);
       } 
}