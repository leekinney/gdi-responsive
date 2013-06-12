# Responsive Web Design

This is the Girl Develop It Responsive Web Design course. Materials by Catherine Farman, based on material by Sophie Shepherd.

The course is meant to be taught in 4 two-hour sections. Each of the slides and practice files are customizable according to the needs of a given class or audience.

## Classes

### Class 1
Goal for this class: create a page that changes when you resize the browser viewport, and that fits on a mobile device screen.

#### Part 1: Introduction to Responsive Design
We look at the basic build blocks of a responsive design, including fluid grids, media queries and flexible images. We'll set up a device lab for testing our projects on real-world devices as we build them.

#### Part 2: Mark up our Mockup
Using a design mockup as guidance, students will create a basic HTML5 template with the proper viewport meta tag to make our site responsive. 
We'll create the styles to match our design and begin to mold them into a mobile-first stylesheet using CSS3 media queries to alter our design at different screen sizes.

### Class 2
Goal for this class: learn best practices in responsive design and how to build a responsive navigation menu.

#### Part 1: Design Best Practices
We'll go over some tips for designing a responsive website, such as how to design with a content-first approach, building common layout patterns, and optimizing for touch screen interfaces.

#### Part 2: Responsive Navigation
Students will work on building out a responsive navigation menu using HTML, CSS and Javascript for improved usability across different screen sizes. We'll continue to refine our design by testing on a variety of mobile devices.

### Class 3
Goal for this class: learn how to build common responsive design elements like tables and forms.

#### Part 1: Responsive Tables
#### Part 2: Responsive Forms

### Class 4
Goal for this class: optimize your site for performance and a mobile-first experience.

#### Part 1: Mobile First
#### Part 2: Page Speed


## Theme customization

You can change theme colors by changing the theme css to any of the following options:
```html
  <link rel="stylesheet" href="css/theme/gdidefault.css" id="theme">
  <link rel="stylesheet" href="css/theme/gdilight.css" id="theme">
  <link rel="stylesheet" href="css/theme/gdisunny.css" id="theme">
  <link rel="stylesheet" href="css/theme/gdicool.css" id="theme">
```
You can change the text editor theme by changing the highlight.js css to the following options:
```html
  <link rel="stylesheet" href="lib/css/dark.css">
  <link rel="stylesheet" href="lib/css/light.css">
```
You can change transition by changing the reveal transition property in Reveal.initialize
```javascript
  Reveal.initialize({
  				transition:  'default', // default/cube/page/concave/zoom/linear/none
  			});
```
