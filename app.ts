function hideAllSections(): void {
    const contents = document.querySelectorAll<HTMLDivElement | HTMLUListElement>('.toggle-content');
    contents.forEach(content => {
        content.classList.remove('show');
    });
}

function toggleContent(headerId: string, contentId: string): void {
    const header = document.getElementById(headerId) as HTMLAnchorElement;
    const content = document.getElementById(contentId) as HTMLDivElement | HTMLUListElement;

    header.addEventListener('click', (e: MouseEvent) => {
        e.preventDefault();  
        
        if (content.classList.contains("show")) {
            content.classList.remove("show");
        } else {
            hideAllSections();  
            setTimeout(() => {
                content.classList.add("show");
            }, 2000);  
        }
    });
}

window.onload = function (): void {
    hideAllSections();
};

toggleContent('skills-header', 'skills-content');
toggleContent('languages-header', 'languages-content');
toggleContent('education-header', 'education-content');



const skillsHeader = document.getElementById("skills-header");
const languagesHeader = document.getElementById("languages-header");
const educationHeader = document.getElementById("education-header");

const skillsContent = document.getElementById("skills-content");
const languagesContent = document.getElementById("languages-content");
const educationContent = document.getElementById("education-content");


if (skillsHeader && skillsContent) {
    skillsHeader.addEventListener("click", () => {
        skillsContent.classList.toggle("show");
    });
}

if (languagesHeader && languagesContent) {
    languagesHeader.addEventListener("click", () => {
        languagesContent.classList.toggle("show");
    });
}

if (educationHeader && educationContent) {
    educationHeader.addEventListener("click", () => {
        educationContent.classList.toggle("show");
    });
}
