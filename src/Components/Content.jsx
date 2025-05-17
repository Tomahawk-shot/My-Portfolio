import React from 'react';
import './Content.css';
import profileImage from '../assets/ProFileImage.jpg';
import resumePDF from '../assets/Passamant Resume.pdf';

function Content() {
    return (
        <section className="content">
            <div id="about" className="about-section">
                <div className="about-content">
                    <img
                        src={profileImage}
                        alt="Your Name"
                        className="profile-image"
                    />
                    <div className="about-text">
                        <h1>About Me</h1>
                        <p>
                            Hi, I'm Passamant Thontuthai. I am a computer student with a keen interest in web development, seeking to apply my knowledge of front-end technologies and modern web development in practical settings. I am highly motivated to continuously learn, refine my skills, and embrace new challenges to develop high-quality websites that effectively meet user needs.
                        </p>
                        <a href={resumePDF} target="_blank" rel="noopener noreferrer" className="resume-button">
                            View Resume
                        </a>
                    </div>
                </div>
            </div>

            <div id="education" className="card education-card">
                <h2>Education</h2>
                <ul className="education-list">
                    <li>
                        <strong>
                        King Mongkut’s University of Technology Thonburi, Thailand<em> 2022 – Present</em><br />
                        </strong>
                        <p>
                            Bachelor of Industrial Education Program in Electrical Engineering , Computer
                        </p>
                        <p>
                            Average GPAX: 3.34
                        </p>
                            
                    </li>
                </ul>
            </div>

            <div id="projects" className="card projects-card">
                <h2>Projects</h2>
                <ul className="projects-list">
                    <li className="project-item">
                        <div className="project-card">
                            <h3>Portfolio Website</h3>
                            <p>
                                A personal portfolio website built with React.js to showcase my skills and projects. It features responsive design and modern UI/UX principles.
                            </p>
                        </div>
                    </li>
                    <li className="project-item">
                        <div className="project-card">
                            <h3>Clone YouTube</h3>
                            <p>
                                Self-improvement through building a YouTube Clone project with React is a great opportunity to learn and refine Front-end Development skills, starting with designing the app structure using React Components for managing web pages, such as the sidebar, navbar, tags, and content.
                            </p>
                        </div>
                    </li>
                    <li className="project-item">
                        <div className="project-card">
                            <h3>MindBoard</h3>
                            <p>
                                Mindboard is a web application for structured note-taking and content management using a block-based layout (e.g., heading, text, to-do). It supports nested pages to help organize ideas clearly. The frontend is built with React.js and Tailwind CSS to deliver a modern and seamless user experience.
                            </p>
                        </div>
                    </li>
                    <li className="project-item">
                        <div className="project-card">
                            <h3>Weather App</h3>
                            <p>
                                This is a weather forecast web app built using pure HTML, CSS, and JavaScript (without any front-end frameworks). The app provides a responsive and user-friendly interface for searching real-time weather data and 5-day forecasts, complete with dynamic weather icons. Data is fetched from the OpenWeatherMap API.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>

            <div id="skills" className="card skills-card">
                <h2>Skills</h2>
                <ul className="skills-list">
                    <li>Programming Languages: Python, JavaScript, SQL, C++, C#</li>
                    <li>Web Development & Frameworks : HTML, CSS, JS, React.js, Tailwind CSS</li>
                    <li>Responsive Web Design</li>
                    <li>Software Development : API Development, Object-Oriented Programming, FastAPI </li>
                    <li>Soft Skills : Problem-Solving, Communication Skills, Team Collaboration, Time Management, Public Speaking, Creative Language, Self-Learning & Adaptability</li>
                    <li>Languages Skills : Thai (Native) , English (Intermediate)</li>
                </ul>
            </div>

            <div id="contact" className="card contact-card">
                <h2>Contact</h2>
                <p>If you'd like to get in touch, feel free to reach out via:</p>
                <ul className="contact-list">
                    <li>Email: passamant.work@gmail.com</li>
                    <li>facebook: <a href="https://www.facebook.com/passamant.thonguthai" target="_blank" rel="noopener noreferrer">facebook/passamant</a></li>
                    <li>GitHub: <a href="https://github.com/Tomahawk-shot" target="_blank" rel="noopener noreferrer">github.com/passamant</a></li>
                </ul>
            </div>
        </section>
    );
}

export default Content;