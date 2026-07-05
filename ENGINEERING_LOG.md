# Engineering Log

## Project Name

Space Explorer


## Student Name

Elliot Tawk


## Project Overview

Space Explorer is a responsive front-end website about space exploration. The project allows users to explore live Near-Earth Asteroid data provided by NASA and learn about real space missions.

The website consists of three pages:

- Home page
- Asteroids page
- Missions page

The Asteroids page uses the NASA NeoWs (Near Earth Object Web Service) API with a registered API key to retrieve live asteroid information. Users can select a date and filter asteroid results based on their hazard status.



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

### 1. Home Page

The Home page introduces the Space Explorer project, explains its purpose, and provides navigation to the other pages.


### 2. Asteroids Page

The Asteroids page retrieves live data from the NASA NeoWs API.

Users can:

- Select a date
- Load asteroid information
- Filter asteroid results by hazard status

The page displays:

- Asteroid cards
- Date selector
- Filter dropdown
- Loading spinner
- Error message
- Empty state message


### 3. Missions Page

The Missions page contains a curated collection of more than fifteen real space missions with brief descriptions.

This content is independent of the API and fulfills the assignment requirement for original curated content.


## API Integration

The project uses the NASA NeoWs (Near Earth Object Web Service) API with a registered API key to retrieve live Near-Earth Asteroid data.

The API requests are performed using JavaScript `fetch()`.

The returned data is displayed as responsive cards containing:

- Asteroid name
- Estimated diameter
- Relative speed
- Miss distance
- Hazard status



## Client-Side Filtering

After the asteroid data is retrieved, JavaScript filters the displayed results according to the selected hazard status.

The available filters are:

- All Asteroids
- Potentially Hazardous
- Not Hazardous

Filtering is performed entirely on the client side without making additional API requests.


## Custom Front-End Requirement

My assigned custom front-end requirement was to design a loading spinner that appears during API calls.

The loading spinner is displayed immediately before the NASA API request begins.

It automatically disappears when:

- The API request completes successfully.
- An error occurs.
- No matching asteroid data is returned.

The spinner is implemented using a dedicated JavaScript ES6 class named `Spinner`.



## Loading, Error, and Empty States

### Loading State

A custom loading spinner is displayed while asteroid data is being retrieved from the NASA API.


### Error State

If the API request fails, a clear error message is displayed instead of leaving the page blank.



### Empty State

If no asteroid matches the selected date or filter, the page displays an informative message explaining that no results were found.



## Responsive Design

The website was designed to function correctly on desktop, tablet, and mobile devices.

Bootstrap 5 provides the responsive grid system, while custom CSS is used for spacing, colors, typography, cards, buttons, and layout styling.

Flexbox is also used throughout the layout to improve responsiveness and content organization.



## Code Structure

The project files are organized as follows: 

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


## Testing

The website was tested using Live Server in Visual Studio Code.

The following features were verified:

- Navigation between all pages
- NASA API communication
- Loading spinner visibility
- Asteroid filtering
- Error message display
- Empty state display
- Responsive layout on desktop, tablet, and mobile devices


## Issues Fixed During Development

### Issue 1 – API Selection

An earlier API option was not reliable during testing.

I replaced it with the NASA NeoWs API because it provided stable live asteroid data and met the assignment requirements.


### Issue 2 – File Organization

The project files were reorganized into separate folders.

HTML, CSS, JavaScript, screenshots, and documentation were separated to improve maintainability and readability.


### Issue 3 – Date Selection

An earlier version used a fixed date.

The implementation was updated so users can freely select the desired date before requesting asteroid data.



## Final Notes

The completed project satisfies all required front-end features specified in the assignment, including:

- Three responsive web pages
- Consistent navigation
- HTML5 semantic structure
- CSS3 styling
- Bootstrap 5
- Flexbox
- JavaScript ES6 classes
- NASA NeoWs API integration using a registered API key
- Client-side filtering
- Loading state
- Error state
- Empty state
- More than fifteen curated real space missions
- Custom loading spinner requirement
- Live deployment on Netlify
- Git version control with incremental commits