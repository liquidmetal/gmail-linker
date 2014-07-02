function parseEmail() {
    console.log("Fetched email contents");
    emailContents = gmail.dom.email_contents();
}

function initialize() {
    window.gmail = Gmail()
    console.log("Logged in from: " + window.gmail.get.user_email());
    console.log("Is threaded: " + window.gmail.check.is_thread());
    console.log("Hangouts: " + window.gmail.chat.is_hangouts());
}

//$(document).ready(initialize);
window.addEventListener('load', initialize);
