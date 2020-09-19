document.addEventListener('DOMContentLoaded', function () {


  document.getElementById('send').addEventListener('click', onSendclick, false)
  document.getElementById('recieve').addEventListener('click', onRecieveclick, false)
    
  function onSendclick () {
    chrome.tabs.query({currentWindow: true, active: true}, function (tabs) {
      var URL=document.getElementById("ServerURL");
      chrome.tabs.sendMessage(tabs[0].id, URL.value+",s")
    })
  }

  function onRecieveclick () {
    chrome.tabs.query({currentWindow: true, active: true}, function (tabs) {
      var URL=document.getElementById("ServerURL");
      chrome.tabs.sendMessage(tabs[0].id, URL.value+",r")
    })
  }
 
}, false)
 
