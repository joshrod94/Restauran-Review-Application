# Mobile Web Specialist Certification Course
---
#### _Project - Restaurant Reviews by Josh Rodriguez_

## Running the App

Open index.html and the content will load.

## Important changes made to the original code

1. Added Accessibility features such as atl tags, Aria tags, role tags, hover and focus color changes.
2. Made the app responsive with flexbox since we were not allowed to use frameworks such as bootstrap.
3. Added a service worker so that the page caches and users can load content offline.
4. In the restaurant.html page, I removed the map from the right side as it did not look well when changing to different size viewports and placed it at the top like in index.html. Instead, I focused on one specific layout and placement of content for smoother transition.

## Issues of Note
1. Most of the starting code was terrible. Made it difficult to do a proper job without re-writting the majority of it. I only changed what was needed to pass the course.
2. We were not provided with different size images for the restaurants. Since the images resized nicely naturaly, I did not create different images.
3. The restaurant hours table should not have been made. Made it extremely difficult to make that page responsive. It still does not look how I would like but it should be enough to pass.

## Project Overview:

For the **Restaurant Reviews** projects, you will incrementally convert a static webpage to a mobile-ready web application. In **Stage One**, you will take a static design that lacks accessibility and convert the design to be responsive on different sized displays and accessible for screen reader use. You will also add a service worker to begin the process of creating a seamless offline experience for your users.

### Specification

You have been provided the code for a restaurant reviews website. The code has a lot of issues. It’s barely usable on a desktop browser, much less a mobile device. It also doesn’t include any standard accessibility features, and it doesn’t work offline at all. Your job is to update the code to resolve these issues while still maintaining the included functionality.

### Note about ES6

Most of the code in this project has been written to the ES6 JavaScript specification for compatibility with modern web browsers and future-proofing JavaScript code. As much as possible, try to maintain use of ES6 in any additional JavaScript you write.

# Since this version of the app is for passing the final project and finishing my course, a lot of needed changes were not made to make this app the most optimal. For that reason I have written the below:

### Future TODOs
1. Update the code with Angular JS.
2. Update the code with a CSS framework.
3. Add more color contrasts for Accessibility.
4. Add functionality to the service worker for "activate".
