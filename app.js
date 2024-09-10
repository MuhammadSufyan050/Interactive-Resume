function hideAllSections() {
    var contents = document.querySelectorAll('.toggle-content');
    contents.forEach(function (content) {
        content.classList.remove('show');
    });
}
function toggleContent(headerId, contentId) {
    var header = document.getElementById(headerId);
    var content = document.getElementById(contentId);
    header.addEventListener('click', function (e) {
        e.preventDefault();
        if (content.classList.contains("show")) {
            content.classList.remove("show");
        }
        else {
            hideAllSections();
            setTimeout(function () {
                content.classList.add("show");
            }, 1000);
        }
    });
}
window.onload = function () {
    hideAllSections();
};
toggleContent('skills-header', 'skills-content');
toggleContent('languages-header', 'languages-content');
toggleContent('education-header', 'education-content');
var skillsHeader = document.getElementById("skills-header");
var languagesHeader = document.getElementById("languages-header");
var educationHeader = document.getElementById("education-header");
var skillsContent = document.getElementById("skills-content");
var languagesContent = document.getElementById("languages-content");
var educationContent = document.getElementById("education-content");
// Make sure elements exist before adding event listeners
if (skillsHeader && skillsContent) {
    skillsHeader.addEventListener("click", function () {
        skillsContent.classList.toggle("show");
    });
}
if (languagesHeader && languagesContent) {
    languagesHeader.addEventListener("click", function () {
        languagesContent.classList.toggle("show");
    });
}
if (educationHeader && educationContent) {
    educationHeader.addEventListener("click", function () {
        educationContent.classList.toggle("show");
    });
}
