# PAWSTER CAPSTONE PROJECT

# Live Site: Pawster-capstone.netlify.app
[Live Site](https://pawster-capstone.netlify.app)

We created this project to connect users with shelters in the hopes that they will foster their preferred shelter animal. The user will log into their account using Google Authentication. After clicking on the Explore button on the home page, they will be directed to a page where they can swipe right (add animals to their likes) or swipe left (view next animal). Also on this page is a button where users can click and be redirected to a page showing their liked pets and more information on each pet.

## My Contribution
The main contribution I made in this project is on the explore page. I used react-tinder-card npm package to make the Tinder card swiping functionality. Where swiping Left will move the shelter animal away to show the next animal, and swiping Right on the tinder card will send the info to the database.  This changes the pet to become a liked pet so that the user can view their liked pets on the liked pet page. 
I also worked on the styling of our home page to make it modern and make sure that the Navigation bar is dynamic (Changes depends on the page the user is currently viewing)


## Getting Started

### Project Structure

```
├── README.md (what you are currently reading)
├── back-end (a basic express app)
├── front-end (a basic create-react-app)
└── package.json (necessary boilerplate for heroku deployment )
```

**NOTE:** - You will have 3 `package.json` files in this project

- **Top level** - necessary for heroku deployment: you don't need to do anything with this file, it is set up for you
- **back-end** - everything to do with the express/postgres backend
- **front-end** - everything to do with the create-react-app front-end


#### Basic App

- Fork this repo
- git clone the forked repository

**/front-end**
- `cd front-end`
- `npm install`



**/back-end**

- `cd back-end`
- `npm install`
- `touch .env`

make sure you are on the same level as the `package.json` of the `back-end` directory

- `touch .env`

```
PORT=3333
PG_HOST=localhost
PG_PORT=5432
PG_DATABASE=postgres
PG_USER=postgres
PG_PASSWORD=""
```

- `npm run db:init`
- `npm run db:seed`

Test app locally. If it does not work locally, it will not work on Heroku.

Fix bugs.

When you are ready, deploy this app. 
