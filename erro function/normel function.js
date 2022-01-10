function normel() {
    class User{
        constructor( firstName, email){
            this.firstName=firstName;
            this.email=email;
        }
    }  
    var user1=newUser(document.getElementById("fname").value, document.getElementById("email").value);
console.log("hello");
alert(user1.firstName+"and "+user1.email);
}