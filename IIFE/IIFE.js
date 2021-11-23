
    var register=(function()
    {   
function validation()
{
    console.log("hello")
    
var ps=document.getElementById("pass").value 
var cps=document.getElementById("compass").value
var mn=document.getElementById("mobnum").value 
var ei=document.getElementById("emailid").value 
   if(ps=="")
{
document.getElementById("password").innerHTML="**Please fill the password"
return false;
}
else if((ps.length <= 4)|| (ps.length > 20))
{
document.getElementById("password").innerHTML="**Please fill the password between 1 to 20 characters only"
return false;
}
else if(ps === /^[0-9A-Za-z-!@#$%&*]+$/)
{
document.getElementById("password").innerHTML="**Please fill the password between characters only"
return false;
}
else if(cps=="")
{
document.getElementById("comfirmpass").innerHTML="**Please fill the confirm password"
return false;
}


else if(ps!=cps)
{
document.getElementById("comfirmpass").innerHTML="**password is not matching"
return false;
}

else if(mn=="")
{
document.getElementById("mob").innerHTML="**Please fill the mobile number"
return false;
}
else if(isNaN(mn))
{
document.getElementById("mob").innerHTML="**Please fill the mobile number should  be in number"
return false;

}
else if(mn.length<10)
{
document.getElementById("mob").innerHTML="**Please fill the mobile number 10 digit"
return false;
}
else if(ei=="")
{
document.getElementById("email").innerHTML="**Please fill the email id"
return false;
}                                      
else if(ei.indexOf('@') <=0 ) 
{
document.getElementById("email").innerHTML="** @ is invalid position  in email id"
return false;
}  
else if((ei.charAt(ei.length-4)!='.') && (ei.charAt(ei.length-3)!='.'))
{
document.getElementById("email").innerHTML="** . is invalid postion"
return false;
}
else{
    
    return  validateUser()   
alert("done")
}

} 

function validateUser(){
    var un= document.getElementById("user").value
    if(un=="")
    {
    document.getElementById("user name").innerHTML="**Please fill the username"
    return false;
    }
    else if((un.length <= 2)|| (un.length > 20))
    {
    document.getElementById("user name").innerHTML="**Please fill the username between 1 to 20 characters only"
    return false;
    }
    else if (!isNaN(un))
    {
    document.getElementById("user name").innerHTML="**Please fill the username only character not a number"
    return false;
    } 
else{
    return true;
}
}     

return{
    val: validation,
}; 
    })();
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
    