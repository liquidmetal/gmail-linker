function parseEmail() {
    console.log("Fetched email contents");
    emailContents = gmail.dom.email_contents();
}

function initialize() {
    window.gmail = Gmail()
    console.log("Logged in from: " + window.gmail.get.user_email());
    console.log("Is threaded: " + window.gmail.check.is_thread());
    window.gmail.observe.on('chat_open', function(id, url, body) {
      console.log("id:", id, "url:", url, 'body', body);
      });
}

//$(document).ready(initialize);
window.addEventListener('load', initialize);
