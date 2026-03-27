# Portfolio
Portfolio is a modern personal portfolio website built with `HTML`, `Tailwind CSS`, and `JavaScript`. The design uses a dark visual style with neon-accent highlights, bold sections, interactive cards, modal windows, and a project showcase tailored for frontend presentation.

## Overview

This project was created as a personal portfolio experience to present professional identity, technical skills, project work, contact information, and CV access in a polished single-page layout.

## Features

- Modern dark-themed portfolio layout
- Hero section with personal introduction and social links
- Services section for core professional roles
- Skills and learned technologies section
- Project cards with image, description, stack, and live link
- `Let's Talk` modal with contact form
- `Resume` modal with profile summary and CV download button
- Hover lift effects across cards, buttons, and links
- Fully responsive layout for desktop and mobile

## Tech Stack

- HTML5
- Tailwind CSS
- JavaScript

## Project Structure

```text
Portfolio/
├── index.html
├── main.js
├── Logo.jpg
├── Mimn.jpg
├── Mohamed_Nadi_CV.docx
├── dashboard.png
├── TechStyle.png
└── README.md
```

## Sections

### Hero

Includes:

- personal name and title
- short bio
- `Let's Talk` button
- social media icons
- highlighted portrait area

### What I Do

Displays the main professional roles:

- Software Engineer
- Front-end Developer
- UI/UX Designer

### Learned Languages

Shows the main languages and technologies learned and used in projects.

### Projects

Project cards are rendered dynamically from `main.js`.  
Each card includes:

- project name
- short description
- technologies used
- project image
- external link button

### Modals

Two modals are included:

- Contact modal
- Resume modal

The contact modal contains a working form submission flow using `FormSubmit`.

## Contact Form

The form is configured to send messages through:

`https://formsubmit.co/ajax/m.imn20004@gmail.com`

Important:

- the form must be activated from the email sent by FormSubmit
- the project should be opened through a local server or hosting environment
- opening `index.html` directly as a file may prevent the service from working correctly

## Running the Project

No build step is required.

To run it locally with a server:

```powershell
php -S localhost:8000 -t c:\programming\Portfolio
```

Then open:

```text
http://localhost:8000
```

## How To Add Projects

Open [main.js](/c:/programming/Portfolio/main.js) and edit the `projects` array.

Each project uses this structure:

```js
{
  name: "Project Name",
  description: "Short description",
  stack: ["HTML5", "Tailwind CSS", "JavaScript"],
  image: "image-link-or-local-image-path",
  link: "live-demo-or-github-link"
}
```

To add a new project:

1. Copy an existing project object.
2. Change the `name`.
3. Update the `description`.
4. Edit the `stack` array.
5. Set the `image`.
6. Replace the `link`.

## How To Update CV

Inside [index.html](/c:/programming/Portfolio/index.html), find the `Download CV` button in the resume modal and update the `href` to your latest CV file.

Current file:

`Mohamed_Nadi_CV.docx`

## How To Update Social Links

Inside [index.html](/c:/programming/Portfolio/index.html), update the links in the `Check Out My` section and footer.

## Purpose

This project demonstrates frontend skills in:

- personal branding through UI
- responsive layout composition
- modal-based interaction design
- dynamic rendering with JavaScript
- portfolio presentation for real projects and contact flow
