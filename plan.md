Build Portfolio Website for Abhey Thakur
The goal is to build a responsive, visually appealing portfolio website for Abhey Thakur (BTech CSE student). It will showcase his skills, projects, education, and achievements using the dark grey and light green color theme and Material-UI as the UI library.

Proposed Changes
Tech Stack & Project Setup
We will use React with Vite for the web application foundation.

UI Library: Material-UI (MUI) for pre-built responsive components (Buttons, Cards, Typography, Grid).
Icons: Material-UI Icons.
Animations: Framer Motion for smooth scroll and entrance animations.
Icons & Images: Placeholders from pexels.com.
Components Structure
Theme Setup: A custom MUI theme tailored to dark grey (#121212, #1E1E1E) and light green (#4CAF50, #81C784).
Navbar: Fixed header with links to different sections.
Hero Section: Introduces Abhey Thakur, short tagline, call-to-action to resume/contact, and a placeholder for his professional photo from Pexels.
About Section: Derived from the CV Summary, highlighting data science and full-stack development experience.
Skills Section: Categorized into Data Science, Programming Languages, Web Tech, Tools, and Soft Skills. Rendered dynamically as skill chips or progress bars.
Projects Section: Card-based grid layout displaying project titles, descriptions, tech stacks, and GitHub links.
Experience & Achievements Section: Timeline or list for his volunteering and hackathon achievements.
Education & Certifications Section: Timeline showing BTech and schooling alongside completed certifications.
Footer: Contact information, LinkedIn, and GitHub links.
Verification Plan
Automated Tests
Run npm run build to verify the codebase builds successfully.
Start local dev server to ensure components render.
Manual Verification
Test UI responsiveness on different screen widths (mobile, tablet, desktop).
Verify all links and data accuracy corresponding to the provided CV.
Ensure the color theme matches user requests seamlessly.