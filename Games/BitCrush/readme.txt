
Instructions on how to modify the game:
-----Changing picture-----
- Replace the picture_empty.png and picture_full.png files respectably

-----Changing elements-----
- Open the file BitCrush.js
- Find the green line "//NAME | LEFT, TOP, WIDTH, HEIGHT", should be near top
- Below is a formatted list of elements. Look on the provided examples to add more
- To add a selectable element (button) insert a new line that follows given format:
	name_of_your_element_here | offset_left, offset_top, width, height
- The names can have spaces but it's better to avoid that to limit confusion
- Values are given in percentages of the picture. For example 25.3 means 25.3%
- Example values: 25, 50, 20, 30 would mean that a button will be offset
  by 25% from left edge of the picture and 50% from top. In addition it will occupy
  20% of width of picture and 30% of height.
- How to easily measure percentages?
	* Open the image in any image editing software (paint.net is free)
	* Resize the picture to fit a 1000x1000 canvas (so it's a square)
	* Create a selection box using a selection tool
	* Read the values of top-left corner and size using the program
	* Image included on example of paint.net

-----Changing questions-----
- Open the file BitCrush.js
- Find the green line "//DESCRIPTION | ELEMENT1, ELEMENT2, ELEMENT3..."
- Below is a formatted list of elements. Look on the provided examples to add more
- To add a question (AKA mission) insert a new line that follows given format:
	description that can include spaces | element1, element2, element3
- There can be any number of elements
- The elements have to be defined as above