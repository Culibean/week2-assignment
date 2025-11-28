# week2-assignment

An image gallery designed with HTML, CSS and JavaScript

# Requirements

🎯 Implement responsive design methods to ensure the website works well on both small mobile screens and larger desktop screens (e.g., above 800px).
🎯 Implement at least one meaningful media query so that there is a noticeable change between mobile and desktop view (an example is to change where the ‘thumbnail bar’ is positioned).
🎯 Ensure all images have appropriate alt text attributes for accessibility.
🎯 Correctly use event handlers to switch images based on user interactions.

# Reflection

🎯 What requirements did you achieve?
I managed to amend the design so, that when the screen gets smaller, that the thumbnail moves to the bottom of the page. The full screen image also adjust to screen size by using CSS flex. All images have alt descriptions and I have added event handles to the buttons and images itself,so the fullscreen image changes when the user either clicks the image or uses the buttons.

I also added some ARIA labels to the buttons and tested my page for accessibility in Lighthouse.

🎯 Were there any requirements or goals that you were unable to achieve?
I don't think I fully achieved screen responsiveness. For example the buttons remain at the top and don't move with the thumbnail. I've putting the container a grid, however this did not work for me. I also tried changing the @media tag and added in the buttons but this made them disappear. I still haven't found the right solution to this problem.

🎯 If so, what was it that you found difficult about these tasks?
While I understand and can follow the individual workshops and demos and understand the principles, I still struggle with combining all methods to create one website. For example, I understand the logic behind functions, loops and arrays on their own, but struggle with putting them together. It took a while to get the image creation work. It helped when I wrote out the function of every line as I did for the button eventListener. I think I just need to take more time to go through each step as I sometimes have issues translating what I want certain elements do in Javascript.
The same is valid for CSS. I rely heavily on the page inspector of similar website to understand the result of each element. I find it sometimes difficult to understand what everything does without having a real life example of it. It takes a lot of trial and error.

I also realised that a lot of the resources online are written by people that are fully into the matter and I sometimes don't quite understand all of the language used. Youtube videos tend to help slightly better.
