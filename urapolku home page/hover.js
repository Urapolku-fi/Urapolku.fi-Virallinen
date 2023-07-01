const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    })
})
const elements = document.querySelectorAll('.hidden');
elements.forEach((el) => observer.observe(el));