/*<a href="http://www.apple.com">Apple</a>
<a href="http://www.google.com">Google</a>
<a href="http://www.redventures.com">Red Ventures</a>
Given these 3 a tags in an HTML document, write a script that adds a target="_blank" property 
to each a tag and then add a title property to each a tag with the same URL that is in the 
href property.
For example, the Red Ventures link should look like this: <a href="http://www.redventures.com" 
target="_blank" title="http://www.redventures.com">Red Ventures</a>*/

// Add target="_blank" to all a tags
$("a").attr({
    "target" : "_blank"
  });
  
  
  // Add title equal to the href of each a tag
  $("a").each(function() {
    var link = $(this).attr('href');
    $(this).attr({"title" : link})
  });
  
  
  