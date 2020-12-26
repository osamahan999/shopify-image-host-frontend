
This project is deployed on google cloud for the front & backend, and on heroku JawsDB for the MySQL server.
Frontend can be accessed here:
https://shopifyimagerepofrontend.uc.r.appspot.com/

Backend repo can be found here:
https://github.com/osamahan999/shopify-image-host-backend/


Set up details are below, but I will be giving a few comments here on this project.


Please give the link a bit, and try again if it does not work. Google cloud turns off the application if nobody accesses it in a certain time. 
Same with the database and backend, so it may take a few tries for it to work as intended.

This project has the following features:
 Registraton and Login
 Creation and deletion of image repositories
 Ability to rename the repository
 Ability to invite others to join your repository with varying permissions
 Ability to upload and remove any amount of files to your repository (however they are rendered as an img tag so non-image files would not render)
 Ability to add tags to the image/s you upload
 Ability to search images based on tag or tags
 XSS protection and SQL injection protection
 Hashed and salted password protection



I started this project on the 21st of December, and am deploying it now at December 25th. 

I'm going to list a few of the things I learned during this project, because quite frankly I learned a ton.
I learned :
 how to set up a google cloud bucket that stores images publicly
 how to send files over HTTP 
 how to handle multiples files, authenticate them, and forward them to a separate server
 how to use multers to get the files from the post request
 how to build SQL procedures
 a ton of react information, even though it doesn't look like it from my frontend. I'm simply not good at designing pretty UI :(
 



To set up the frontend on your machine, please follow the following steps:

Either:
1. Clone my repo, fix all the REST api calls to point to your local branch 

OR if the node modules do not work, you may have to do the following
1. Delete the node modules
2. npx install
3. npm install material-ui
4. npm install axios
5. npm install react
6. Follow the instructions for setting up the backend at the backend repo
7. Follow the instructions for setting up a google bucket

Or just use my hosted version, I spent a ton of time getting it up on google cloud make it worth it please!
