/*button = document.getElementById('submit');

function print(){

    button.addEventListener("click", function(){
        Fname = document.getElementById('Fname');
        Sname = document.getElementById('Sname');
        email = document.getElementById('email');
        phoneNo = document.getElementById('phoneNo');
        location = document.getElementById('location');
        packages= document.getElementById('packageId');
        
       alert('form submitted successfully by', Fname.value)
    })

}






function openNav(){
    document.getElementById("myMenubar").style.width = "250px"
}

function closeNav(){
    document.getElementById("myMenubar").style.width = "0"
}


*/






/*twilio message automation*/

const accountSid = 'AC6f704909ebead16a68bde59f81b11f77';
const authToken = '562854e81f3650b3a1ff6a074d5be32b';
const client = require('twilio')(accountSid, authToken);

function sendMessage(){
// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure

client.messages
      .create({from: '+16204904362', body: 'Hi there', to: '+254797955092'})
      .then(message => console.log(message.sid));

}





