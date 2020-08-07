# AngularJS-Applications
The repository contains the AngularJS Applications built as Coursera assignments


Module1-solution : 

The idea of this assignment is to create a front-end application that presents the user with a textbox where they can list comma-separated items, they usually eat for lunch. Once that's entered, the user has to click the "Check If Too Much" button.
If the number of items in the textbox is less than or equal to 3 (e.g., 1, 2, or 3), a message should show up under to the textbox saying "Enjoy!". 
If the number of items is greater than 3 (4, 5, and above), the message "Too much!" should show up under the textbox.
If the textbox is empty and the user clicks the "Check If Too Much" button, the message "Please enter data first" should show up. 
'Empty' here means either `""` (empty string) or a string with just spaces in it.
Only 1 message should be shown at any given time. 


Module2-solution : 

The idea of this assignment is to create a "check off" shopping List application.
Think of being in a store with a shopping list that allows you to "check off" the items you've already bought, except instead of checking them off, the bought item simply moves to the "Already Bought" list.
HTML page is only displaying 2 lists, one titled "To Buy" and the other "Already Bought".
The "To Buy" list is pre-populated with a list of at least 5 items.
Next to each item in the list there is a button with the label "Bought". When the user clicks on the "Bought" button, its associated item is removed from the "To Buy" list and appear in the "Already Bought" list.
The "Already Bought" list is initially empty and display a message "Nothing bought yet". 
Once the user "buys" every item on the "To Buy" list, i.e., clicks on the "Bought" button for every item in the "To Buy" list,
 instead of the empty "To Buy" list, the message "Everything is bought!" is displayed.


Module3-solution : 

The idea of the assignment is that the user search the descriptions from the list of menu items.
Then, given the list of matches of his search, the user has the ability to throw the items they for sure don't want off the list,
thus narrowing it down to what they do want.
The task is create a text box and a button with the label "Narrow It Down For Me!".
Initially, the user just sees a screen with the textbox and the "Narrow It Down For Me!" button.
 Once the user enters something into the textbox and clicks the button,
 the app will reach out to the server and retrieve the list of menu items for the entire menu.
 Once retrieved, the task is to loop through all the items and, for each item, do a simple check if the string being searched for by the user appears anywhere in the description of the item.
 If it does, that item gets placed in a special `found` array. If it doesn't, you simply move on to the next item.
Once the app goes through all the items, it should display the `found` list of items.
 Each item in the list should show the name of the menu item, its short_name, and the description.
User is also provided a "Don't want this one!" button next to each item in the list to give the user the ability to remove an item from that list.
If nothing is found as a result of the search OR if the user leaves the textbox empty and clicks the "Narrow It Down For Me!" button,
 app should simply display the message "Nothing found".


Module4-solution :

This assignment app uses the restaurant menu REST API to create a master/detail view pair.
The application have 3 views (i.e., 3 view states): home (`home`), categories list (`categories`), items list (`items`).
When the user goes to `/` path in the application, a home screen is shown. 
 Clicking that link would  take the user to the `/categories` view.
The categories view list all available categories of items on the menu. Each listing is a link.
 Clicking that link takes the user to the `/items` view.
If, while viewing the list of menu items for a particular category, the user copies the URL in the browser's address bar and pastes it into a new 
tab or a different browser, that the view is the same as the original one.


Module5-solution


Restaurant front-end implementation in AngularJS for David Chu's China Bistro (i.e., the site developed in the previous course)
First, changed the 2 buttons at the top of the website to say `My Info` and `Sign Up` instead of `About` and `Awards`.
When the user clicks on the `Sign Up` button, they are taken to a view that lets them "sign up" for the newsletter of the restaurant. The sign up form should ask for the following information: first name, last name, email address, and phone number. 
It also asks the user to specify the menu number that's their favorite dish. (The menu number is the `short_name` attribute of each menu item).
Everything in the form (except the `short_name`) is validated through AngularJS validation. When the user clicks the `Submit` button 
(after all other fields are validated), app retrieves the menu item the user specified as their favorite through the following REST endpoint "https://taniksh-course5.herokuapp.com/menu_items/SHORT-NAME.json", where `SHORT-NAME` is the name the user provided. If the server returns an error, you will know that the item name specified is not valid. If that's the case, app displays a message next to the favorite choice saying `No such menu number exists`. 
If everything is valid, app saves the user's preference somewhere in our client app such that we can retrieve it in another view/component/controller/etc. Once saved, it displays a message below the form saying `Your information has been saved`.
When the user clicks on `My Info` button, they are taken to another view where it shows them their "registered" information, including the favorite menu item they picked. When showing the favorite menu item, it displays the picture of the menu item as well as its title and description.
If the user hasn't yet "registered" through the `Sign Up` button, app simply displays a message saying: `Not Signed Up Yet. Sign up Now!`. The words "Sign up Now!" should be a link to the same view as the `Sign Up` link points to.



