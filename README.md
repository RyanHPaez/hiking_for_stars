# Hiking For Stars
### Group project with 4 team players. This app is a hiking Trail App.

## Main Points
- Create an account for hiking members
- Login 
- View hiking places which shows from database
### Still working on...
- Update account
- Delete account
- Getting Data from an API
- Add profile picture 

## Backend Packages
- dotenv
- express
- mongoose
- method-override
- cors
- react

## Frontend Packages
- react-router-dom


## Npm start will start the app or you can see it deployed here on heroku: https://hikingforstars.herokuapp.com/

setting up database: npm install mongodb, npm install axios


## END POINTS
### Some still getting worked on...
Method | Path | Purpose | 
------------- | ------------- | ------------ 
GET  | /  | Homepage
GET  | /places  | Find places
GET  | /users  | Find all users
GET  | /user  | Find user
POST  | /newUser  | Create new user
GET  | /:id  | Show user
PUT  | /:id  | Update user 
DELETE  | /:id  | Delete user