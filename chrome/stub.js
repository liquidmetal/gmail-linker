console.log("yoyoyoyoyo")

// Inject a gmail.js <script> element into the gmail page
var scriptGmail = document.createElement('script');
scriptGmail.src= chrome.extension.getURL('jquery-2.1.0.js');
(document.head||document.documentElement).appendChild(scriptGmail);

// Inject a gmail.js <script> element into the gmail page
var scriptGmail = document.createElement('script');
scriptGmail.src= chrome.extension.getURL('gmail.min.js');
(document.head||document.documentElement).appendChild(scriptGmail);

// Inject a linker <script> element into the gmail page
var scriptLinker = document.createElement('script');
scriptLinker.src= chrome.extension.getURL('linker.js');
(document.head||document.documentElement).appendChild(scriptLinker);
