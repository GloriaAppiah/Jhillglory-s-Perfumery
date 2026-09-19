# Jhillglory's Perfumery

A responsive single-page landing website for **Jhillglory's Perfumery**, a local fragrance business offering perfumes, body splashes, and gift packages.

This project was built as a frontend development project using **HTML, CSS, and JavaScript**. The design focuses on a clean, elegant perfume-brand aesthetic with soft neutral tones, plum/rose accents, clear typography, structured sections, and responsive behaviour.

---

## Project Overview

**Business:** Jhillglory's Perfumery  
**Industry:** Fragrance / Perfumery  
**Project Type:** Local Business Landing Page  
**Main Goal:** Present the business, showcase its services and recent work, explain the customer process, and provide an easy way for visitors to get in touch.

The project follows the requirements of the Local Business Landing Page Capstone by bringing together:

- HTML for page structure
- CSS for styling and layout
- JavaScript for interaction
- Git/GitHub for version control and project submission
- Responsive CSS for mobile support

---

## Features

### 1. Navigation

The website includes a navigation menu with links to:

- Home
- Services
- How We Work
- Recent Work
- Contact

On smaller screens, the navigation changes to a hamburger menu.

### 2. Hero Section

The hero section introduces the business with the headline:

> **Find a Fragrance That Feels Like You**

It includes:

- A short introduction
- A "View Fragrances" call-to-action button
- A perfume image used as the hero background
- A soft overlay to keep the text readable

### 3. Services

The services section presents three main offerings:

- **Perfumes** — fragrances for everyday wear and special occasions
- **Body Splashes** — fresh and affordable scents for daily use
- **Gift Packages** — fragrance packages for loved ones

### 4. How We Work

The process is presented in three simple steps:

1. **Choose** — Browse and select a fragrance.
2. **Order** — Contact the business and place an order.
3. **Receive** — Receive the fragrance through delivery or arrange pickup.

### 5. Recent Work

The website includes three visual examples:

- Fragrance Collection
- Body Splash Collection
- Gift Packages

Each example contains an image, title, and short description.

### 6. Contact Section

The contact area includes:

- Business location
- Email address
- Phone number
- Name field
- Email field
- Message field
- Send Message button

The section was designed with the contact information on one side and the form on the other, with a perfume image used as an additional visual element.

### 7. Footer

The footer displays:

- Jhillglory's Perfumery
- Copyright information

---

## JavaScript Interaction

The project uses plain JavaScript for two main interactions.

### Mobile Navigation

The hamburger menu opens and closes the navigation menu on smaller screens.

The JavaScript:

- Toggles the `active` class on the navigation menu
- Updates the `aria-expanded` attribute
- Closes the menu when a navigation link is selected

### Contact Form Validation

The contact form is handled with JavaScript.

Before showing a successful message, the script checks that:

- A name has been entered
- An email has been entered
- A message has been entered

If a required value is missing, the visitor receives a message explaining what needs to be completed.

When all fields are completed, the page displays a confirmation message and resets the form.

> **Note:** The contact form is a frontend demonstration. It does not send messages to an email server.

---

## Design and Inspiration

The visual direction was inspired by the perfume landing-page reference used during development.

The design was adapted into an original layout using:

- Warm cream and peach backgrounds
- Plum and rose accent colours
- Dark brown navigation and footer
- Serif typography for major headings
- Rounded cards and form elements
- Soft shadows
- Large fragrance imagery
- Spacious section layouts

The inspiration was used as a guide for visual direction rather than copying the reference page.

### Inspiration / Source

Reference screenshot supplied during project development.

**External inspiration URL:** <https://dribbble.com/shots/27501622-V-RO-Luxury-Perfume-Fragrance-E-Commerce-Landing-Page-Design>.

---

## Technologies Used

| Technology | Purpose |
| --- | --- |
| HTML5 | Page structure and semantic sections |
| CSS3 | Styling, layout, spacing, responsive design, and visual effects |
| JavaScript | Navigation interaction and contact form validation |
| Git | Version control |
| GitHub | Repository hosting and project submission |

---

## Project Structure

```text
jhillglory-perfumery/
│
├── index.html
├── style.css
├── script.js
│
├── images/
│   ├── hero-perfume.jpg
│   ├── perfume-1.jpg
│   ├── perfume-2.jpg
│   ├── perfume-3.jpg
│   └── perfume-5.jpg
│
└── README.md
```

---

## CSS Concepts Demonstrated

The project applies the CSS concepts required in the frontend development coursework.

### CSS Selectors

Examples include:

```css
#home
#services
#contact
.nav-menu
.hero-text
.work-card
```

### Typography

Different font sizes, weights, colours, line heights, and font families are used to create a visual hierarchy between headings and normal text.

### Spacing

The project uses:

- `margin`
- `padding`
- `gap`

to create clear separation between sections and components.

### Box Model

Cards, forms, buttons, and sections use combinations of:

- Width
- Padding
- Margin
- Borders
- Border radius
- Box shadows

### Flexbox

Flexbox is used for layouts such as:

- Navigation
- Hero content
- How We Work steps
- Recent Work cards
- Responsive layouts

### Responsive Design

CSS media queries are used to adapt the website to smaller screen sizes.

The mobile layout includes:

- Collapsed navigation
- Stacked sections
- Adjusted heading sizes
- Responsive cards
- Mobile-friendly contact form
- Repositioned hero background image

## Testing

The following areas should be checked before submission:

- Navigation links scroll to the correct sections           - Completed
- Hamburger menu opens on smaller screens                   - Completed
- Hamburger menu closes when a navigation link is selected  - Completed
- Contact form detects an empty name                        - Completed
- Contact form detects an empty email                       - Completed
- Contact form detects an empty message                     - Completed
- Successful form submission displays a confirmation message- Completed
- Form resets after successful validation                   - Completed
- Hero background image displays correctly                  - Completed
- Services cards display correctly                          - Completed
- How We Work section displays correctly                    - Completed
- Recent Work images load correctly                         - Completed
- Contact image loads correctly                             - Completed
- Page does not create unwanted horizontal scrolling on mobile- Completed
- Text remains readable at different screen sizes            - Completed

### Suggested Test Sizes

For responsive testing, check approximately:

- **Mobile:** 375px wide
- **Laptop:** 1366px wide

Also resize the browser between these sizes to check how the layout adapts.

---

## Challenges and Solutions

### Challenge 1 — Creating a balanced perfume-themed design

The website needed to look visually consistent while still being simple enough to build with the frontend skills covered in the course.

**Solution:**  
A limited colour palette of cream, peach, plum, rose, white, and dark brown was used throughout the website.

### Challenge 2 — Making the hero image work as a background

The hero reference used a large perfume image alongside the introductory content.

**Solution:**  
The perfume image was changed from a separate visible image element to a CSS background image with a soft gradient overlay. This allows the image to fill the hero area while keeping the text readable.

### Challenge 3 — Responsive navigation

The desktop navigation could not simply remain in the same layout on a small screen.

**Solution:**  
A JavaScript hamburger menu was added so the navigation can be opened and closed on smaller screens.

### Challenge 4 — Contact form feedback

The project does not use a backend email service, but visitors still need feedback when interacting with the form.

**Solution:**  
JavaScript validation checks the required fields and displays a confirmation message when the form is completed.

---

## What I Learned

Through this project, I practised:

- Building a complete HTML page structure
- Connecting an external CSS stylesheet
- Writing reusable CSS selectors
- Applying the CSS box model
- Using Flexbox for layout
- Creating consistent visual styling
- Working with background images
- Creating responsive layouts with media queries
- Adding JavaScript interactions
- Validating form input
- Organising a frontend project
- Using Git and GitHub to manage and submit a project

---

## Future Improvements

Possible future improvements include:

- Connecting the contact form to a real email service
- Adding a product catalogue
- Adding individual fragrance product pages
- Adding a shopping cart
- Adding a backend
- Adding secure online payments
- Adding more interactive product features
- Publishing the project online
- Adding social media links
- Improving accessibility and keyboard navigation

---

## Image Credits

The project uses fragrance images stored in the `images/` folder.

|Image | Source | Licence / Credit |
| ---| --- --- |
| `hero-perfume.jpg` | Google | Add credit/licence |
| `perfume-1.jpg` | Google | Add credit/licence |
| `perfume-2.jpg` | Google | Add credit/licence |
| `perfume-3.jpg` | Google | Add credit/licence |
| `perfume-5.jpg` | Google | Add credit/licence |

---

## Repository

**GitHub Repository:**(<https://github.com/GloriaAppiah/Jhillglory-s-Perfumery>)

**Live Website:** <https://fascinating-kashata-9304d1.netlify.app/>

---

## Project Submission Information

**Student Name:** Add your name  
**Business:** Jhillglory's Perfumery  
**Industry:** Fragrance / Perfumery  
**JavaScript Interaction:** Mobile navigation and contact form validation  
**Mobile Responsiveness:** Completed  
**Live Deployment:** <https://fascinating-kashata-9304d1.netlify.app/>

---

## Acknowledgement

This project was created as part of frontend development coursework. The project applies HTML, CSS, JavaScript, responsive design, Git, and GitHub concepts to create a single-page local business landing website.

© 2026 Jhillglory's Perfumery
