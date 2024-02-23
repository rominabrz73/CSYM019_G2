function myFunction(){

   
    var element = document.getElementById('heading');
    element.firstChild.nodeValue ='Heading';
    var element = document.getElementById('prgraph');
    element.firstChild.nodeValue ='Hello';
    
    
    }
    document.addEventListener('DOMContentLoaded', myFunction);
