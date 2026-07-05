# Space Explorer

## Student Name

Elliot Tawk

## Project Title

Space Explorer

## Project Description

Space Explorer is a responsive front-end website about space exploration. The website allows users to explore live Near-Earth Asteroid data from NASA and learn about real space missions.

The project consists of three pages:

- Home page
- Asteroids page (NASA NeoWs API)
- Missions page

The website was developed using HTML5, CSS3, Bootstrap 5, Flexbox, and JavaScript ES6 classes.


## API Used

### NASA NeoWs (Near Earth Object Web Service) API

The project uses the NASA NeoWs API with a registered API key to retrieve live Near-Earth Asteroid data.

The asteroid information is displayed as responsive cards and users can filter the results according to asteroid hazard status.


## Technologies Used

- HTML5
- CSS3
- Bootstrap 5
- Flexbox
- JavaScript ES6 Classes
- NASA NeoWs API (API Key Authentication)
- Git
- GitHub
- Netlify


## Website Pages

### Home Page (`index.html`)

Introduces the Space Explorer project, explains its purpose, and provides navigation to the other pages.

### Asteroids Page (`mars.html`)

Displays live Near-Earth Asteroid data retrieved from the NASA NeoWs API. Users can choose a date and filter asteroid results based on their hazard status.

### Missions Page (`about.html`)

Contains a curated collection of more than fifteen real space missions with brief descriptions.


## Features

- Responsive three-page website
- Consistent navigation bar across all pages
- Hand-written CSS styling
- Bootstrap 5 components
- Flexbox layout
- JavaScript ES6 classes
- NASA NeoWs API integration
- Client-side filtering
- Loading state
- Error state
- Empty state
- Curated content (15+ real space missions)


## Custom Front-End Requirement

My assigned custom front-end requirement was to design a loading spinner that appears during API calls.

The loading spinner is displayed while asteroid data is being retrieved from the NASA NeoWs API. It automatically disappears when:

- The data loads successfully
- An error occurs
- No matching asteroid data is returned

The spinner is implemented using a dedicated JavaScript ES6 class named `Spinner`.


## Screenshots

The screenshots are located inside the `screenshots` folder.

- desktop.png
- tablet.png
- phone.png

These screenshots demonstrate that the website is fully responsive across desktop, tablet, and mobile devices.



## Project Structure

space-explorer/
│
└── project/
    │
    ├── index.html
    ├── mars.html
    ├── about.html
    ├── css/
    │   └── style.css
    ├── js/
    │   └── app.js
    ├── screenshots/
    │   ├── desktop.png
    │   ├── tablet.png
    │   └── phone.png
    ├── README.md
    ├── ENGINEERING_LOG.md
    └── COMMIT_PLAN.md



## GitHub Repository

[https://github.com/elliottawk/space-explorer]

---

## Live Website

[https://resonant-sunshine-279fd6.netlify.app]

---

## How to Run

1. Clone the repository from GitHub.
2. Open the `project` folder in Visual Studio Code.
3. Launch the website using Live Server.
4. Alternatively, visit the deployed Netlify website using the live URL above.



# AI-Use Appendix

## AI Tools Used

I used ChatGPT to assist with:

- Organizing the project documentation.
- Improving grammar and wording.
- Reviewing the project structure.
- Checking that the documentation satisfied the assignment requirements.

## Example Prompts Used

1. Help me organize the README for my project.
2. Check whether my project satisfies the assignment requirements.
3. Improve the grammar and wording of my documentation.

## What the AI Got Wrong and How I Fixed It

### Issue 1

ChatGPT initially suggested documentation that was too general and did not accurately describe my implementation.

I reviewed the documentation manually and edited it so it matched the actual features of my project.

### Issue 2

ChatGPT suggested a more complicated project structure than required.

I simplified the folder organization and kept only the files required for the assignment while maintaining a clean project structure.