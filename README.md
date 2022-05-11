# Starting the server:
    1. In the backend folder, open the index.js file
    2. To create the database- Comment out line 22, and lines 24-28, excluding line 27. Also remove the database field in the createConnection function(line 16)
    3. To create a table- Add the database field back to the createConnection function and set it to the database created in the previous step. Now comment out lines 23, and lines 24-28 excluding line 26.
    4. Run the command 'nodemon index.js' to run the server

# Starting the frontend:
    1. Navigate to the matrials-management folder.
    2. Either use 'npm start' to create the development build and 'npm run build' to create the production build.
    3. Open the application in the link provided after running the command.
    4. At first there wil be no materials listed as the table is empty. The total cost will be a blank field.
    5. To add a material to the list fill in all the fields in the form and press the add material button.
    6. This populates the table in the database and total cost is displayed.
    7. To delete a material click the cross button in the list.

    -> All components are created in the folder components and imported into App.js to implemented in the index.html page
    -> Style for the page is used from the index.css file

# Things not implemented
    -> I was unable to edit the materials and provide unit tests for the application due to shortage of time.

# Time Spent
    ->Appoximately an hour to implement the frontend using ReactJS.
    ->Approximately an hour and 15 minutes to implement the server side using Node.js, Express, and MySQL.
    ->Approximately 45 minutes to debug, test the code, add comments and write the README.md file.# Starting the server:
    1. In the backend folder, open the index.js file
    2. To create the database- Comment out line 22, and lines 24-28, excluding line 27. Also remove the database field in the createConnection function(line 16)
    3. To create a table- Add the database field back to the createConnection function and set it to the database created in the previous step. Now comment out lines 23, and lines 24-28 excluding line 26.
    4. Run the command 'nodemon index.js' to run the server

# Starting the frontend:
    1. Navigate to the matrials-management folder.
    2. Either use 'npm start' to create the development build and 'npm run build' to create the production build.
    3. Open the application in the link provided after running the command.
    4. At first there wil be no materials listed as the table is empty. The total cost will be a blank field.
    5. To add a material to the list fill in all the fields in the form and press the add material button.
    6. This populates the table in the database and total cost is displayed.
    7. To delete a material click the cross button in the list.

    -> All components are created in the folder components and imported into App.js to implemented in the index.html page
    -> Style for the page is used from the index.css file

# Things not implemented
    -> I was unable to edit the materials and provide unit tests for the application due to shortage of time.