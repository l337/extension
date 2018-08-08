# One Click Bookmark Extension

Making a one click bookmark for people that have too many tabs open.

Later there should be filters to apply that can determine how to orginize them into respective folders. (Machine Learning algorithms).

This is the start of something great

Day 1) Going through basic example in the docs, getting started on first icon round.

Day 2) Created new icons, created bookmark folders with todays date, got list of all open tabs in current window.
Side notes: Is there a way to create a folder on the root rather than going into "other bookmarks" folder
(might have to leverage the popup.html to display bookmarks rather than putting it in the native bookmark menu).

Day 3) Changing direction of project, now going to use machine learning to dictate what bookmarks should go where, if the algorithm can't decide it will create a folder for the user. I setup a recursive algorithm to list all folders and sub folders, and sub folders, ad infinitum. 

Day 4) Making sure getting all user tab page content was possible, found out it was, for now we will just get the meta tags, h1 -> h3, and page title, I will add more features to this later but for now lets just parse the needed html, doing a little research in TensorFlow.js to see if I can accomplish word2Vec. 