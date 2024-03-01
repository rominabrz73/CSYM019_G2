
    function myClickFunction(){

      
        var element = document.getElementById('heading');
        element.firstChild.nodeValue ='Heading';

     
    
        
        
        }
        function myClickFunctionn(){

      
        
            var pelement = document.getElementById('prgraph');
            pelement.firstChild.nodeValue ='Hello paragraph';
        
            
            
            }
    

   


function myLoadFunction(){

   
    var element = document.getElementById('heading');
  
    element.addEventListener('click', myClickFunction);
    var pelement = document.getElementById('prgraph');
    pelement.addEventListener('click', myClickFunctionn);

    
}

    
    document.addEventListener('DOMContentLoaded', myLoadFunction);
      
