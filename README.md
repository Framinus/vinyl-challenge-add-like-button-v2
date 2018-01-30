# Vinyl

A community for record enthusiasts to review their favorite albums.

Part of the application has already been built for you. Your job is to take it to completion.

## Getting Started

The app uses a simple file structure for an Express web app server that renders views using EJS templates.

```sh
public/               # static assets
src/
  actions/            # async server actions (e.g. data CRUD)
  data/               # db schema & seed data
  db/                 # database client & utils
  routes/             # express routes
  views/              # html templates
test/                 # test files for the source files
```

### Setting Up Your Database

Use the following commands to set up and seed your database:

1. Create PostgreSQL database `vinyl`: `$ npm run db:create`
1. Set up database tables from `schema.sql`: `$ npm run db:schema`
1. Load seed data from `albums.sql`: `$ npm run db:seed`

### Setting up your config

Run the command in the terminal so that the config loads correctly
`$ cp .env.template .env`

### Installing your dependencies

Run the following command in the terminal:
`$ npm install`

### Starting your development server

Run the following command in the terminal:
`$ npm start`


# Coding Challenge

During the interview you will have 75 minutes to complete all the specs of the challenge.

You'll be allowed to ask your interviewer clarifying questions and can use the internet to search for information as needed.

Each requirement is assigned a point value. A fully complete requirement will earn you full points; partially complete requirements get partial points; incomplete requirements get no points. Overall completeness is determined by dividing the total points earned by the total points available. There is a requirement of completion of 80% of the specs to secure a passing result.

## Specs

## Like Button - Example spec (2017-12-20)


- [ ] __25:__ user can click a like button on an album, increasing the total displayed without a page refresh
- [ ] __15:__ number of likes persists between page refreshes and server restarts
- [ ] __15:__ users are only able to like an album when logged in
- [ ] __35:__ each album correctly displays the total number of likes from all users, and users can only like an album once
- [ ] __10:__ if a user has liked the album they are viewing, a red border is displayed around the like button

## Steps to take to get this done:

- Data: create new table in schema.
  - reload schema
- Queries - write query to addLike, countLike and albumLikedByUser.
  - import those queries in the routes file.
- Route
  - GET route for albums/:id page. Need to count likes and see if the album is liked by the user.
  - POST route for albums/:id/like. Need to addLike
- View
  - add like button.
  - add like counter. (span inside of div)
- frontend js
  - target like button, like counter.
  - put event listener on button that creates fetch call to /albums/:id/like
  - modify button with red border class, disabled button and like counter incremented if a new like is added.
- css
  - add a red border class.




## Sign Up

Routing:
- [ ] __20:__ Navigating to `/sign-up` loads the sign up page.

Users can:
- [ ] __40:__ Sign up for an account with a name, email and password.
- [ ] __10:__ Be redirected to the home page (`/`) after signing up.

Users CANNOT:
- [ ] __10:__ Sign up without a name value
- [ ] __10:__ Sign up without an email address value
- [ ] __30:__ Sign up without an email that is already in use.

## Sign in

Routing:
- [ ] __20:__ Navigating to `/sign-in` loads the sign in page.

Users can:
- [ ] __20:__ Sign in to an existing account with an email address and password.
- [ ] __10:__ Be redirected to the home page (`/`) after signing in.

Users CANNOT:

- [ ] __30:__ Sign in with an invalid email address and password combination.

## Testing

Testing:
- [ ] __30:__ Write a test for the `signUp` action using Mocha. This test should check that calling the `signUp` function adds a row in the database

## Profile

Routing:
- [ ] __20:__ Navigating to `/users/<USER ID>` loads the profile page. The profile page has a button `Edit` which when clicked, navigates to the edit profile page.
- [ ] __20:__ Navigating to `/users/<USER ID>/edit` loads the edit profile page.
- [ ] __20:__ Sending a PUT request to `/users/<USER ID>` updates the profile of the user

Users can:
- [ ] __10:__ See their username and email
- [ ] __30:__ Edit their username and email using AJAX. Updating their profile should NOT require a page refresh. Submitting the form on `/users/<USER ID>/edit` page asynchronously updates the profile information. The user remains on the edit page `/users/<USER ID>/edit`.
