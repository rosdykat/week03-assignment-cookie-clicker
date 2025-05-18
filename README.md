# week03-assignment-cookie-clicker

Cookie Clicker assignment - The Cat Distribution system

## Desctription

The Cat Distribution System is a Cookie Clicker game, tap on the animated cat to increase your cat counter and purchase upgrades in the shop to increase your CPS (Cats Per Second). Have fun collecting cats!

## How to play

Tap the cat to increase your Cat Counter and animate the cat clicker
Purchase upgrades in the shop to increase your CPS (Cats Per Second) and passively gain cats every second
View your purchase history in the purchases box
Reset the counter to start from scratch!

## Process

I first created a wireframe for the website to have a rough plan on how I wanted the website to look. This helped me figure out what elements needed to be grouped together in the relevant divisions and sections. This also helped me figure out how I wanted my grid on the website. I essentially created around 10 evenly sized 1fr columns, this allowed for easy customisation as if i wanted a small box, it could be the size of 1 column, whereas if I wanted it larger, I could just increase the amount of columns it fills, also keeping all the elements on the website uniform and equal size.

I have attached the wireframe in my assets folder, however I found that I actually changed the layout as I worked on the website. However, I think the wireframe was still useful as an initial guideline.

After creating the wireframe, I put in the initial elements such as the clicker image, logo, and text into the HTML and created the Grid on CSS. I wanted to be able to make a rough version of the website by putting the boxes (shop boxp purchase box, clicker box, logo) where I think I wanted them to be before I got into the Javascript.

Once the I had the HTML and CSS basics down, I went down the steps from Manny's notes in the javascript in order to create the event listener clicker function, fetching and deploying the API data for the shop, tracking purchased shops to be put into the purchased box, storing CPS and cookie count to local storage through eventLiseners and setIntervals, and lastly adding a reset button

This too majority of my time, but once this was complete I then went back to focusing on the CSS to make the website look a bit better. This was mainly moving and resizing the boxes, adding a logo, adding boxes with colours etc. I also added an 'animation' to the cat image when clicked using a timeout function in within the clicker function.

Lastly, I created a mobile phone version using @media in css, I did not have too much time for this in the end, but I wanted to make it usuable enough for mobile devices. Just like the desktop, I found using grids to be very useful here as I simply created three columns and many rows to allow for the boxes/elements on the page to flow vertically along the page.

## Reflection

Compared to last weeks assigntment, I was surprised with how I got on with this task. Last week, I think my biggest challenge was utitlising all the javascript we learnt in our workshops, as it was still new I did not really understand how most of what we learned yet - such as functions, creating elements to the DOM etc. It's starting to stick in which allowed me to navigate JavaScript much easier and successfully problem solve using what i've learnt (as well as some googling).

My biggest struggle however was fetching and deploying the API data. Although I did successfully do this in the end, I don't fully understand how it works. I've added annotations to all of my JavaScript to walk through my steps, this is mainly for myself as it helps me understand any code that I may have not fully understood.

Although I was impressed with how I remembered to store and pull local data from the local storage to the page, I didn't manage to save the 'purchase' information to the local data. This means that when you refresh the page, although the cat counter and CPS are stored, your purchases arent and therefore the 'purchases' box will be empty even though the CPS from them had saved. I think If I gave this a proper look at I would be able to figure it out, but I wasn't sure how this worked and if the API was involved and therefore left it for time reasons.
