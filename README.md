# kadd-business-card-creator
Business card creator
Documentation
Added to card
Validated if card already has input 
Validated numbers
Still trying to validate email address 

Add to card function ()

***Validation**"
I added display none to the form itself
Also added display none to the create card button 
However, it's affecting the whole form even the validation 


Change business card colour function
I created an input on the HTML file with the color input type
Then, I selected it in JavaScript and saved to a variable - selectThemeColor
Then I added an event listener to the card container itself
When it's clicked, it shows the Customize card section with instruction on how to edit the theme color
Then I selected the :root class from the CSS file and set it to a variable - rootVariables
When the card container is clicked, I set the :rootValue property of a specific CSS variable to the color input variable

***
Reload page on click of - recreateCard button
I discovered that adding - "document.location.reload( )" will refresh the page
So I added it as an event listener to the recreateCard button 
****
Convert to image
Two things were involved
I changed the article tag to canvas in order to create the src link

So I selected the business card container (now under canvas) 
Then I created a variable called dataURL and assigned it to the business cardContainer.toDataURL
The dataURL is supposed to convert the canvas to a url

Then, I created an image course on the html file
This image source now had dataURL added to the source code (SRC)

It succeeded in creating the canvas. Unfortunately, a canvas is not supposed to have HTML elements added to it. So that's the bug for now. But at least, there is improvement 
