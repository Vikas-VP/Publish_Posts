/**
# About the App

The is all about adding the posts and checking the published posts

The code structure is as follows:

-- actions --- contains two actions in index.js.
               1. addPost : Adding the Posts to Global store via reducer
               2. search post : Search Posts is for searching the posts in the store which is already added and filtering

--- assets ---- images - Required if any images to be added

--- components - Cards.jsx - used for showing the title and description in the published posts
               - Header.jsx - used for showing the search bar and searching the added data which will work only in published posts
               - NewPostForm.jsx - used for add a new post which conatins title and description also handled for empty scenarios
               - Pusblished.jsx - used for mapping the data using cards.jsx
               - SecondaryHeader.jsx - Contains two button which is new post and published for routing to new or to published posts

---- reducers - added two reducers for add post and search post for sending the data to store

---- utils ----- conatins the action creater for different actions

---- store.js -- redux global store is handled in store.js

---- Home.js --- contains the Header(Search) and Secondary Header(New post and published posts button)

---- index.js -- Warpped the App with provider such that the store is available across the entire application

 */