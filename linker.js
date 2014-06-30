function parseEmail() {
    console.log("Fetched email contents");
    emailContents = gmail.dom.email_contents();
}

function initialize() {
    window.gmail = Gmail()
    console.log("Logged in from: " + window.gmail.get.user_email());

    window.gmail.observe.on("open_email", parseEmail);
}

window.addEventListener('load', initialize);
