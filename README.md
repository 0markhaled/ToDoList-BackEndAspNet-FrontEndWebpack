
This project allows the user to create a To Do list that will be stored in an SQLite db. The User has the ability to Add, delete and edit items on the do list.
webpack with handlebars was used for the front end.

Asp .net was used for the back end with packages for packages for efcore and sqlite




# ToDoList-BackEndAspNet-FrontEndWebpack


made a new webapi project, added a gitignore, we added the packages for efcore and sqlite

1)created the prject by running the terminal command dotnet new webapi -o "filename"

added thse packages dotnet add package Microsoft.EntityFrameWorkCore.InMemory //this is used for storing the POST requests in memeory incase there is no DB dotnet add package Microsoft.EntityFrameWork.sqserver dotnet add package Microsoft.VisualStudio.Web.CodeGeneration.Design dotnet add package Microsoft.EntityFrameworkCore.Design dotnet add package Microsoft.EntityFrameworkCore.Tools // allows us to use the asp generator tool which creates the controller

aspcode generator used to create controller dotnet aspnet-codegenerator controller -name TodoItemsController -async -api -m TodoItem -dc TodoContext -outDir Controllers

this app uses an API controller such as Postman to ceate Get/Post requests.

the project was modified so it allows the us to extratct the data in XML in addition to the default Json

COnnection String was made to allows us to use Sqlite as db.

The app lists the tasks added via postman POST request, on the console and html

in th browswer.
It displays in the console and broswer via simple html dynamically.

*****To use this app, run the server.

Swagger will automaitcally open, use the POST method to add to the do to list.

than navigate to the localhost server/index.html and the to do list should appear there




Front end*********

webpack project with Handlebars support
a simple dynamic handle bars to dhows the to do list from the server as well as have the code needed to add/delete/edit the todo list.

used the webpack template starter with HBS support on the computer
