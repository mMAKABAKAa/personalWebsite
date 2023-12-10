// Function to generate HTML for certifications
function generateCertificationHTML(certifications) {
    let html = `<h2> 🌏🌏🌏 Online Certifications 🌏🌏🌏</h2>
    <div class="certification-card-container">`; 

    certifications.forEach(cert => { 
        html += `
            <div class="certification-card">
                <img src="${cert.certification.img}" alt="school logo"> <!-- Display certification image -->
                <div class="certification-card-info">
                    <h3>${cert.certification.program}</h3> <!-- Display certification program name -->
                    <a href="${cert.certification.url}" target="_blank" rel="noopener noreferrer">
                        <img class="link-image" src="./images/link-45deg.svg" alt="link logo"> <!-- Link to certification -->
                    </a>
                </div>
            </div>
        `; 
    });

    return html+'</div>'; 
}

// Function to generate HTML for education
function generateEducationHTML(educations) {
    let html = `<h2>🎓🎓🎓 Education 🎓🎓🎓</h2>
    <div class="education-card-container">`; 

    educations.forEach(edu => { 
        html += `
            <div class="education-card">
                <img src="${edu.education.img}" alt="Card Image"> <!-- Display education image -->
                <div class="education-card-info">
                    <h3>${edu.education.school}</h3> <!-- Display school name -->
                    <p>${edu.education.type}, ${edu.education.major}</p> <!-- Display degree type and major -->
                    <p>${edu.education.year_conferred}</p> <!-- Display year of graduation -->
                </div>
            </div>
        `; 
    });

    return html+'</div>';
}

// URL of the API endpoint
const api="https://raw.githubusercontent.com/mMAKABAKAa/personalWebsite/master/data.json";

// Asynchronous function to fetch and display education and certification data
async function doAsync_education(){
    try{
        const response = await fetch(api); 
        const data = await response.json();
        const educationDiv = document.querySelector('.education-section');
        const certificationDiv = document.querySelector('.certification-section');
        educationDiv.innerHTML = generateEducationHTML(data.my_education); 
        certificationDiv.innerHTML = generateCertificationHTML(data.my_certification); 
    }
    catch(error){console.log(error)} // Log any errors that occur during the fetch operation
}
doAsync_education(); 
