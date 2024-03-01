
    function  disMsg(){

      
        var element = document.getElementById('inputText');
       var elm  = document.getElementById('showValue');
       elm.firstChild.nodeValue = element.value ;
       alert(element.value)
        
    


        
    
        
        }
      
        function myLoadFunction(){

      

            var pelement = document.getElementById('inputBtn');
            pelement.addEventListener('click', disMsg);
            
        
        }    

   
    document.addEventListener('DOMContentLoaded', myLoadFunction);
      
