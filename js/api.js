let name = document.getElementById("name");
let email = document.getElementById("email");
let subject = document.getElementById("subject");
let message = document.getElementById("message");
const sendBtn = document.getElementById("sendBtn");

const sendMsg = async () => {
    sendBtn.innerText = "Sending...";
    await Email.send({
        Host: "smtp.elasticemail.com",
        Username: "sachinrawat0853@gmail.com",
        Password: "60C6BD4EA6493562637719B06A62DA982169",
        To: 'sachinrawat0853@gmail.com',
        From: "sachinrawat0853@gmail.com",
        Subject: "New message on Portfolio",
        Body: `
        <h3>Name: ${name.value}</h3>
        <h3>Email: ${email.value}</h3>
        <h3>Subject: ${subject.value}</h3>
        <h3>Message: ${message.value}</h3>
        `
    }).then(
        message => {
            if (message === 'OK') {
                alert('Your Message sent sucessfully...');
                sendBtn.innerText = "Send Message";
                name.value = "";
                email.value = "";
                subject.value = "";
                message.value = "";
            } else {
                alert('Failed to send your message...');
            }
        }
    )
};