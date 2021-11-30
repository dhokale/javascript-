var login=(function(){
        function login(){
            var a=document.getElementById("userr").value
var b =document.getElementById("passs").value
if(a===""|| b===""){
document.getElementById("User name").innerHTML="user name / password is empty "
return false;
}       
else{
    return true;
}
}
return{
    log: login,
};
        })();
    
export{login}