function normel(){
    class User{
        constructor( firstName, email){
            this.firstName=firstName;
            this.email=email;
        }
    }
var a=document.getElementById("fname").value;
var b= document.getElementById("email").value;  
    var user1 = new User(a,b);
    document.write("welcom!"+user1.firstName+"  email is  "+user1.email)
} 