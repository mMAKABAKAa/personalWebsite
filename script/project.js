// Function to generate HTML for displaying projects
function generateProjectHTML(projects){
    let html = `<h2>Course Projects</h2>
    <div class="project-container">`; // Starting HTML with a header and container div

    // Loop through each project in the projects array
    projects.forEach(proj => {
        // Append HTML for each project, including project details and a modal for more information
        html += `
        <div class="project-item">
            <h3>${proj.course.name}</h3> <!-- Display the course name -->
            <img src="${proj.course.img}" alt="project logo" class="project-img"> <!-- Display the project image -->
            <div class="modal">
                <div class="modal-content">
                    <span class="close">&times;</span> <!-- Close button for the modal -->
                    <p id="project_name">${proj.course.name}</p> <!-- Display the project name -->
                    <p id="project_tech">Tech Stack: ${proj.course.tech}</p> <!-- Display the technology stack used -->
                    <p>Github Link: <a href=${proj.course.link} target="_blank" rel="noopener noreferrer"><img id="github_logo" src="./images/github.svg" alt="github logo"> </a></p> <!-- Link to the project's GitHub repository -->
                    <br><p>${proj.course.description}</p> <!-- Project description -->
                </div>
            </div>
        </div>
        `;
    });
    return html + '</div>'; // Return the complete HTML string for projects
}

// Asynchronous function to fetch and display project data
async function doAsync_project(){
    try{
        const response = await fetch(api); // Fetch data from the API
        const data = await response.json(); // Parse the response as JSON
        const projectDiv = document.querySelector('.project-section'); // Select the project section div
        projectDiv.innerHTML = generateProjectHTML(data.my_project); // Set the inner HTML of the project div

        // Add click event listeners to project images to open the modal
        document.querySelectorAll('.project-img').forEach(item => {
            item.addEventListener('click', function() {
                this.nextElementSibling.style.display = 'block';
            });
        });
        
        // Add click event listeners to close buttons to close the modal
        document.querySelectorAll('.close').forEach(item => {
            item.addEventListener('click', function() {
                this.parentElement.parentElement.style.display = 'none';
            });
        });
    }
    catch(error){console.log(error)} // Log any errors that occur during the fetch operation
}

// URL of the API endpoint
const api = "https://raw.githubusercontent.com/mMAKABAKAa/personalWebsite/master/data.json";
doAsync_project(); // Call the function to execute the operations
