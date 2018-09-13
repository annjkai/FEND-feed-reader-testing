# Project Overview

**Project acceptance date: 12 June 2018**

For this project, I was given a web-based application that reads RSS feeds. [Jasmine](http://jasmine.github.io/) was already included, as was the starter code for the first tests. My task was to complete the project by implementing the requirements given below.

# How to run the application

1. Clone the repository with `$git clone https://github.com/annjkai/FEND-feed-reader-testing.git`
2. Open index.html in the browser. This will display both the page and the Jasmine test suites (scroll to the bottom of the browser).

# How was the project evaluated?

The project had to adhere to the Udacity Feed Reader Testing Rubric [Project Rubric](https://review.udacity.com/#!/projects/3442558598/rubric).

The following tasks were mandatory:

1. Write a test that loops through each feed in the `allFeeds` object and ensures it has a URL defined and that the URL is not empty.
2. Write a test that loops through each feed in the `allFeeds` object and ensures it has a name defined and that the name is not empty.
3. Write a new test suite named `"The menu"`.
4. Write a test that ensures the menu element is hidden by default. You'll have to analyze the HTML and the CSS to determine how we're performing the hiding/showing of the menu element.
5. Write a test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display when clicked and does it hide when clicked again.
6. Write a test suite named `"Initial Entries"`.
7. Write a test that ensures when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container.
8. Write a test suite named `"New Feed Selection"`.
9. Write a test that ensures when a new feed is loaded by the `loadFeed` function that the content actually changes.
