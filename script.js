// Smooth fade-in animation

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
},{
    threshold:0.15
});

sections.forEach(section=>{
    section.style.opacity="0";
    section.style.transform="translateY(40px)";
    section.style.transition="all 1s ease";
    observer.observe(section);
});


// Greeting based on time

const hour = new Date().getHours();

if(hour < 12){
    console.log("Good Morning, welcome to The Writer's Library.");
}
else if(hour < 18){
    console.log("Good Afternoon, welcome to The Writer's Library.");
}
else{
    console.log("Good Evening, welcome to The Writer's Library.");
}
