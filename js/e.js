var d1 = document.getElementById('logInAppearance'),
    d2 = document.getElementById('hiddenTitle'),
    d3 = document.getElementById('hiddenLogIn'),
    d4 = document.getElementById('close'),
    d5 = document.getElementById('more'),
    d6 = document.getElementById('hiddenMore'),
    d7 = document.getElementById('hiddenMore2'),
    d8 = document.getElementById('hiddenMore3'),
    d9 = document.getElementById('hiddenMore4'),
    d10 = document.getElementById('more2'),
    d11 = document.getElementById('more3'),
    d12 = document.getElementById('more4');
d4.onclick=function(){
    d3.style.display="none";
    d2.style.display="block";
}
d1.onclick=function(){
    d3.style.display="block";
    d2.style.display="none";
}
d5.onclick=function(){
    if(d5.innerHTML=="....Show More")
        {
            d6.style.display="inline";
            d5.innerHTML="....Hide";    
        }
    else
        {
            d6.style.display="none";
            d5.innerHTML="....Show More"            
        }
    
}
d10.onclick=function(){
    if(d10.innerHTML=="....Show More")
        {
            d7.style.display="inline";
            d10.innerHTML="....Hide";    
        }
    else
        {
            d7.style.display="none";
            d10.innerHTML="....Show More"            
        }
    
}
d11.onclick=function(){
    if(d11.innerHTML=="....Show More")
        {
            d8.style.display="inline";
            d11.innerHTML="....Hide";    
        }
    else
        {
            d8.style.display="none";
            d11.innerHTML="....Show More"            
        }
    
}
d12.onclick=function(){
    if(d12.innerHTML=="....Show More")
        {
            d9.style.display="inline";
            d12.innerHTML="....Hide";    
        }
    else
        {
            d9.style.display="none";
            d12.innerHTML="....Show More"            
        }
    
}


$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1200, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});



