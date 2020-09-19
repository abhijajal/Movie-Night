function findLargestPlayingVideo() {
  const videos = Array.from(document.querySelectorAll('video'))
    .filter(video => video.readyState != 0)
    .filter(video => video.disablePictureInPicture == false)
    .sort((v1, v2) => {
      const v1Rect = v1.getClientRects()[0]||{width:0,height:0};
      const v2Rect = v2.getClientRects()[0]||{width:0,height:0};
      return ((v2Rect.width * v2Rect.height) - (v1Rect.width * v1Rect.height));
    });

  if (videos.length === 0) {
    return;
  }

  return videos[0];
}
chrome.runtime.onMessage.addListener(function (request) {

  data=request.split(",")
  URL=data[0]
  mode=data[1]
  if(mode=="s")
  {
  	
  var vidio= findLargestPlayingVideo()
  if(vidio!=undefined)
  {
    alert(vidio.currentTime)


var timerID = setInterval(function() {
            chrome.runtime.sendMessage(URL+","+vidio.currentTime+",s") 

 
  }, 1000);
   
  }
  

  }
  else if(mode=="r")
  {
    var vidio= findLargestPlayingVideo()
  if(vidio!=undefined)
  {
           chrome.runtime.sendMessage(URL+",test,r")

     
    // your code goes here...

  }
}
else
{
  var video= findLargestPlayingVideo()
  if(video!=undefined)
  {     
    var cTime=URL
    var vTime=video.currentTime
    if(Math.abs(cTime-vTime)>1)
          {
            video.currentTime=cTime
            }
      }
}
})  
/*const re = new RegExp('bear', 'gi')
const matches = document.documentElement.innerHTML.match(re) || []

chrome.runtime.sendMessage({
  url: window.location.href,
  count: matches.length
})*/