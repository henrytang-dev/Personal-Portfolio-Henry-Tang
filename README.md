# Henry Tang's Personal Portfolio (https://henrytang.co)

![Portfolio Screenshot](./src/assets/loader.png)

This repository contains the code and resources for my personal portfolio website, showcasing my projects, skills, and experiences. The portfolio is built using React for the frontend, Docker for containerization, Three.js for interactive 3D graphics, and deployed on Amazon Web Services (AWS) for scalability and accessibility along with domain routing.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [License](#license)

## Features

- **Home (.am())**: An introduction to who I am and my story
- **Resume (.about())**: An overview of my Curriculum Vitae with some additional information
- **Portfolio (.projects())**: A collection of my projects in an interactive 3D experience format with links to viewing the code or site
- **Contact (.email())**: A way for visitors to get in touch with me.
- **Interactive 3D Graphics**: Utilizes Three.js and Blender to create visually engaging and interactive 3D elements.

## Technologies Used

- **AWS**: Amazon Web Services ECS for deploying and hosting the portfolio via an EC2 instance.
- **React**: A JavaScript library for building user interfaces.
- **Docker**: Containerization platform for packaging applications and their dependencies (Dockerfiles & Docker Compose)
- **Three.js**: A JavaScript library for creating 3D graphics in the browser.
- **Webpack**: Bundles and optimizes the React app.
- **Babel**: Transpiles modern JavaScript code for browser compatibility.
- **Git**: Version control for tracking changes and committing.

## Deployment

The portfolio can be deployed on AWS using various services such as Amazon S3 for static hosting, Amazon EC2 for containerized deployment, or AWS Amplify for simplified deployment workflows. I used ECS due to the use of Docker for containerization.

---

Thank you for checking out my personal portfolio repository! If you have any questions or suggestions, feel free to contact me at [htang318@gatech.edu](mailto:htang318@gatech.edu).