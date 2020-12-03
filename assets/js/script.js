var a = 5;
var b = 6;

if(a>b){
    console.log('a is greater');
}else{
    console.log('b is greater');
}
// for()
// number , object , boolean and String
//  while
// do while switch


function fireButton (){
   let firstName = document.getElementById('firstName').value;
   let emailId = document.getElementById('emailId').value;
   let message = document.getElementById('message').value;
   let phoneNumber = document.getElementById('phoneNumber').value;
   let arr = [{
       name:firstName,
       email:emailId,
       message:message,
       phoneNumber:phoneNumber
   }]
   console.log(arr);

}
