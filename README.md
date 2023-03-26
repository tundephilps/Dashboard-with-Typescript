A Dashboard that fetches data of diffrent Users from a Mock API with 500 records, local storage is used to store and retrieve user details on the userprofile page.

Technologies used:
HTML<br/>
SCSS<br/>
Tailwind CSS<br/>
Material UI Icons<br/>
JSX<br/>
Typescript<br/>
React<br/>
React Router Dom v6<br/>
React paginate (For pagination)<br/>
Firebase (For Hosting)<br/>

You are first Welcomed into the Login page which contains a login button that routes you to the main dashboard (No backend funcionality involved)

On the dashboard contains a table that brings in Users from a Mock API and the tabe was paginated using React Paginate npm package.

OnClicking of the Menu Icon on the table Heaaders a Menulist pops out using the conditional rendering technic.
OnClicking of the dotted Icons on the table row, another Menulist pops out that has a route to the User Details page.. which also brings in the full details of each user based on there unique ID.

All fully responsive. (Note JSX File was included because of typescript dependency errror with react router that couldnt bring in the UseParams from React Router for routing each pages to a paricular user)

Visit at ; https://dashboard-bfdac.firebaseapp.com/
