// generate the navigation for every page

function getHeader(){
    return `<header>
    <h1><a href="index.html">Mu's World</a></h1>
    <nav>
    <ul>
        <li id="home"><a href="index.html">Home</a></li>
        <li id="about"><a href="about.html">About Me</a></li>
        <li id="projects"><a href="projects.html">Projects</a></li>
        <li id="nav_resume"><a href="resume.html">Resume</a></li>
        <li id="education"><a href="education.html">Education</a></li>
        <li id="interests"><a href="interest.html">Interests</a></li>
        <li id="contact"><a href="contact.html">Contact Me</a></li>
        

        <li class="more">
            <a href="javascript:void(0);" onclick="toggleDropdown()">More</a>
            <ul class="more-menu">

                <li style="margin-left: 16px;"><a href="resume.html">Resume</a></li>
        <li ><a href="education.html">Education</a></li>
        <li ><a href="interest.html">Interests</a></li>
        <li ><a href="contact.html">Contact Me</a></li>
            </ul>
        </li>
    </ul>
</nav>

</header>`
}
document.getElementById('header-placeholder').innerHTML = getHeader();

function toggleDropdown() {
    const moreMenu = document.querySelector('.more .more-menu');
    moreMenu.style.display = moreMenu.style.display === 'block' ? 'none' : 'block';
}
