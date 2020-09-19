chrome.runtime.onMessage.addListener(function(response,sender,sendResponse){
	data=response.split(",")
	var URL=data[0];
	var cTime=data[1];
	var mode=data[2];
	if(mode=="s")
	{
		 $.ajax({
      url:URL+"/updateCTime.php",
      method:"GET",
      data:{data:cTime+","+"url"},
      success:function(res) 
      {
         console.log(res);
      }

     }); 	
	}
	else if(mode=="r") {
		alert("reciving")
		var timerID = setInterval(function() {

					 $.ajax({
      url:URL+"/getTimeUrl.php",
      method:"GET",
      success:function(res)
      {
         console.log(res);
         data=res.split(",");
         cTime=data[0];
   		 chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
    chrome.tabs.sendMessage(tabs[0].id, cTime+",u");  
});
          
      }

     });

 
  }, 1000);



	}
	 
});
