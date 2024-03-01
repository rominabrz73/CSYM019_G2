function myFunction(){

   
    var element = document.getElementById('heading');
    element.firstChild.nodeValue ='Heading';
    var pelement = document.getElementById('prgraph');
    pelement.firstChild.nodeValue ='Hello';
    
    
    }
    document.addEventListener('DOMContentLoaded', myFunction);
