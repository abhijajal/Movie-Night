<?php
   $filename = "db";
   $file = fopen( $filename, "w" );
   $data=$_GET["data"];

   if( $file == false ) {
      echo ( "Error in opening new file" );
      exit();
   }  
   fwrite( $file, $data );
   fclose( $file );
   echo $data;
?>