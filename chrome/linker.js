function parseEmail() {
    console.log("Fetched email contents");
    emailContents = gmail.dom.email_contents();
}

function linkChatPiece(index) {
    var pieceHtml = $(this).html();
    var m = pieceHtml.match(/[a-zA-Z]+\-[0-9]+/g)
    if(!m) m = [];
    for(var i=0; i<m.length; i++) {
        pieceHtml = pieceHtml.replace(m[i], "<a target='_blank' href='http://jira.anim.dreamworks.com/browse/" + m[i] + "'>" + m[i] + "</a>");
    }
    $(this).html(pieceHtml);
}

function linkifyChats(chatWindows) {
    // The div that contains the display pic + text
    chatContexts = $('.no > .nH.nn > .AD > .nH > .nH.Hd > .nH > .nH > .nH.ko.aXjCH > .Z8Dgfe > .kf');

    // Just the texts (chat on right)
    chatTextsRight = $('.aec > .kl', chatContexts);

    // Just the texts (chat on left)

    // hanging text
    chatTextsLeft = $('.km > .kk > span:not([class])', chatContexts)
    chatTextsLeft = chatTextsLeft.add('.km > .kl', chatContexts)

    if(chatTextsLeft.length>0) { $.each(chatTextsLeft, linkChatPiece); }
    if(chatTextsRight.length>0) { $.each(chatTextsRight, linkChatPiece); }
}

function initialize() {
    window.gmail = Gmail()
    console.log("Logged in from: " + window.gmail.get.user_email());
    console.log("Is threaded: " + window.gmail.check.is_thread());
    window.gmail.observe.on('chat_open', function(id, url, body) {
      chatWindows = window.gmail.chat.chat_windows();
      linkifyChats(chatWindows);
      });
    window.gmail.observe.on('chat_close', function(id, url, body) {
      console.log("id:", id, "url:", url, 'body', body);
      window.gmail.chat.chat_windows();
      });
    window.gmail.observe.on('chat_message', function(id, url, body) {
      console.log('Message sent!');
      chatWindows = window.gmail.chat.chat_windows();
      linkifyChats(chatWindows);
    });
}

//$(document).ready(initialize);
window.addEventListener('load', initialize);
