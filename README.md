# kadd-business-card-creator
Business card creator
Link to live site - https://kadd.netlify.app/
Documentation

## On DOM Content Loaded 
So, on loading the website (DOM content Loaded), I added the "display-none" to major sections apart from the simple homepage that I designed.

## Get Started
Next is clicking of the Get Started button with the variable - createBizCardButton on the homepage. When that happens, it hides content of the home page, and displays the other sections that I'd hidden on-Load

## Validation
I used Regular expression for the core of the validation. That is to ensure that the number input is both a number primitive type, and isn't more than 11

However, there's actually no real implementation of preventing the form from being submitted 

### Add to business card function
The "addToCard" button takes in 2 input - the value of the form, and the placeholder where the value will be inserted
So first, I had to authenticate empty input on the form to display the red-alert banner, and used setTimeout to get hide the banner 

Then I selected the card Placeholder from the html, and set the formInput.value to the innerText of the appendText.
Then, cleared the value of the formInput after that

** Create Card event listener 
Because I had already defined the addToCard function, I merely called it in the createCard event listener.
The createCard is a button. So when the button is clicked, it executes the addToCard function for all the formInput 

** Change business card color function 
 I created an input in the HTML file with the color input type.
Then, I selected it from the JavaScript and saved to a variable - "selectThemeColor" 
After, I added an event listener to the entire "cardContainer" itself.

 When it's clicked, it shows the "customizeCard" section with instruction on how to edit the theme color.

 Then I selected the ":root" class from the CSS file and set it to a variable - "rootVariables" 
When the card container is clicked, I set the :rootValue property of a specific CSS variable to the "colorInput" value the person had chosen 

** Reload page

For this function, when "recreateCard" button is clicked, I added "document.location.reload( )"
This easily refreshes the page. 

** Image uploader
I set an input to the html with a type of "file"
Then I added an event listener of "change" to the myPhoto input.
Then I used the new File Reader to set the results of the file input to display on the card


** Select the input value and convert to png
For this function, I used the html2canvas library to take a screenshot of the "cardContainer" section, and convert to dataURL to be able to download it
