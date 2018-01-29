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


- [x] __25:__ user can click a like button on an album, increasing the total displayed without a page refresh
- [x] __15:__ number of likes persists between page refreshes and server restarts
- [x] __15:__ users are only able to like an album when logged in
- [x] __35:__ each album correctly displays the total number of likes from all users, and users can only like an album once
- [x] __10:__ if a user has liked the album they are viewing, a red border is displayed around the like button

## Notes from this attempt

- Write out exactly what variables need to be passed to the ejs template, and plan which query functions are going to return that data, and how. I got caught up in which functions were returning what data, and specifically whether they were returning a single row. when querying for a COUNT, you actually return a single row.
- The model to controller to view strategy started off strong, but I had to backtrack. Get the early parts right so that it is easy by the time the view rolls around.
- fetch call - still had trouble with formatting url correctly to match route. more work on route abstraction is needed.

## Steps to take to get this done:

- [ ] Schema - update model to include a likes table.
  - [ ] - table should be a join that connects users to albums?
  - [ ] Then rerun the schema against the database.
- [ ] Queries - need to add query functions.
  - [ ] Adding a like to the database (takes in user_id and album_id)
  - [ ] - how many likes has an album received? (takes in album id from req.params.)
  - [ ] - has a particular user liked an album? yes/no. (takes in userId from req.session.)
- [ ] Routes
  - [ ] POST albums/:id/likes - checks if user has liked the album. if not, adds the like to database.
  - [ ] GET albums/:id - add function that checks likes to page render.
- [ ] Views
  - [ ] Add like button and counter to albums/album.ejs
- [ ] CSS
  - [ ] add class "red-border" to button that changes border color to red and disables click event.
- [ ] Front end javascript
  - [ ] add event listener to like button click.
  - [ ] fetch call to albums/:id/likes. no need to pass info because user can be gotten in post route, as well as album id.
  - [ ] fetch call success will trigger adding the class of "red-border" to the button.




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
