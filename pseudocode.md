## HTML
Link a stylesheet (style.css) at the head of HTML.
Create a container to wrap everything in this page and bring it to the center, that was done in the body by using div tag.
Inside the container, create a play-area (actual board) by using div tag.
Inside the play-area, create 9 div tag that represent the block of the board.
I don't want to refresh a page to reset the board or start a new game. So, i create a button with onClick function.


## CSS
First, reset the margin and padding and set the box sizing and default font by using '*' (all elements).
Center the whole game in the middle of the browser by styling the container.
The button of reset will have some hover effects (button:hover). Style the button.
Style the play-area by using display: grid and grid-template-columns.
Style the blocks inside the play area. Color/hover/size
Set the cursor to pointer and background to a bright green, indicating that the player can place a move there. To indicate where players can't give a move, create a class called 'occupied' where the block turns red once it has some content in it.
