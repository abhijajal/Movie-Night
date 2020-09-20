<!DOCTYPE html>
<html>
<head>
  <title></title>
</head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

<body id="bdy">
<form method="get">
   Enter the link:
   <input type="text" name="link"/>
   <input type="submit" value="Submit">
</form>
<?php $link = $_GET['link']; echo $link ?>
<script type="text/javascript">
   var link = "<?php echo $link ?>"
   var vid = document.getElementById("bdy");
   if(link!=null && link!="")
   {
   vid.innerHTML="<video width='100%' id='vid' height='100%' controls><source src="+link+" type='video/mp4' />Your browser does not support the video tag.</video> "

  
      

vid = document.getElementById("vid");
var timerID = setInterval(function() {

   if(vid!=null)
   {
      var cTime=vid.currentTime
     $.ajax({
      url:"updateCTime.php",
      method:"GET",
      data:{data:cTime+","+link},
      success:function(res)
      {
         console.log(res);
      }

     });

   }
    // your code goes here...
}, 1000); 

   }



</script>


</body>
</html>