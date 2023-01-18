# spark-red-application

### **Summary**

This is my attempt at building a bare-minimum Twitter replica that includes user registration and authentication as well as sharing and viewing posts. I have closely followed the MERN social app tutorial made by Lama Dev throughout the development of this project.

(Link: https://www.youtube.com/watch?v=pFHyZvVxce0)

### Included Features

1.User registration & login features

- **Axios REST** API calls for registration, login and getting user information
- Current logged-in user is stored in localStorage
- Separate pages for user registration and login

2.Posting

* **Axios REST** API calls for creating and deleting posts
* Homepage that renders post feeds

3.Integration with MongoDB to store post and user information using **Mongoose**

### Total Time Spent Developing

~ 8 hrs spread out over 3 days

### Incomplete features and how they would be completed

1. User Authentication
   Rewrite login API so that instead of storing logged in username in localStorage, an authorization token is returned, stored in localStorage and attached to future request headers.
2. Deleting & liking posts
   Adding a button that calls the post deletion & like API upon being clicked
   Render number of likes of post on feed

### Details for running project

Running project locally:

* Clone repo `https://github.com/univerx/spark-red-application`

For each directory (api, client), start a new terminal and type:

* `cd <dir name>`
* `yarn install` followed by `yarn start`

Use **Chrome** to visit `localhost:3000`
