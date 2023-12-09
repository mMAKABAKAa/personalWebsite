//project page

function generateProjectHTML(projects){
    let html=`<h2>Course Projects</h2>
    <div class="project-container">`;
    
    projects.forEach(proj => {
        html+=`
        <div class="project-item">
            <h3>${proj.course.name}</h3>
            <img src="${proj.course.img}" alt="project logo" class="project-img">
            <div class="modal">
                <div class="modal-content">
                    <span class="close">&times;</span>
                    <p id="project_name">${proj.course.name}</p>
                    <p id="project_tech">Tech Stack: ${proj.course.tech}</p>
                    <p>Github Link: <a href=${proj.course.link} target="_blank" rel="noopener noreferrer"><img id="github_logo" src="./images/github.svg" alt="github logo"> </a></p>
                    <br><p>${proj.course.description}</p>
                    
                </div>
            </div>
        </div>
        `;
    });
    return html+'</div>';
}

async function doAsync_project(){
    try{
        const response = await fetch(api);
        const data =await response.json();
        const projectDiv=document.querySelector('.project-section');
        projectDiv.innerHTML=generateProjectHTML(data.my_project);
        document.querySelectorAll('.project-img').forEach(item => {
            item.addEventListener('click', function() {
                this.nextElementSibling.style.display = 'block';
            });
        });
        
        document.querySelectorAll('.close').forEach(item => {
            item.addEventListener('click', function() {
                this.parentElement.parentElement.style.display = 'none';
            });
        });
    }
    catch(error){console.log(error)}
}

const api="https://raw.githubusercontent.com/mMAKABAKAa/personalWebsite/master/data.json";
doAsync_project();