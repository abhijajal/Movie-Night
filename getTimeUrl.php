   <?php
         $filename = "db";
         $file = fopen( $filename, "r" );
         
         if( $file == false ) {
            echo ( "Error in opening file" );
            exit();
         }
         
         $filesize = filesize( $filename );
         $filetext = fread( $file, $filesize );
         fclose( $file );
         list($CTime,$Url) = explode (",", $filetext); 
         echo $CTime.",".$Url;
         
         
      ?>