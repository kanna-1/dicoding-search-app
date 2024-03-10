
# Search Function Solution

## Overview

This is a web-based application that implements a search functionality to search for courses based on the title. The search functionality returns courses that are relevant to the search query, regardless of case sensitivity.

## Getting Started

First, clone the repository to your local machine:
`git clone https://github.com/kanna-1/dicoding-search-app.git`

Second, navigate to the project directory:
`cd search-app`

Third, install dependencies:
`npm install`

Lastly, run the development server:
`npm run dev`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## How it Works

### Model Definition

The course data is stored in a JSON file named `courses.json`. Each course object in the JSON file follows the `Course` interface, defining properties such as `id`, `name`, `summary`, `description`, and `course_link`.

### Search Functionality

The search functionality is implemented using React. When the user types a query into the search input field, the application filters the list of courses based on the user input. The filtering is done using the `filter` method, and the search results are stored in the `searchResult` state.

### Rendering Search Results

The search results are rendered in a square format. Each course in the search results is displayed as a square card, containing the course name, summary, and a link to learn more about the course.
