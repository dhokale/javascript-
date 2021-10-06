function handleButtonClick() {
    var too = document.getElementById("too").value;
    var subject = document.getElementById("subject").value;
    var msg = document.getElementById("msg");
    var atach = document.getElementById("file").value;
    var morAtach = document.getElementById("morFile").value;

     
    let a=too+ atach+morAtach +msg; 
document.write( subject);
document.write(a);
 document.write(Date());
}