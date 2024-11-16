document.querySelector('.toggle-button').addEventListener('click', function() {
    const content = document.querySelector('.content');
    content.classList.toggle('show');
    
    if(content.classList.contains('show')) {
        this.textContent = "Show Less"; /* Change button text when content is visible */
    } else {
        this.textContent = "Show More"; /* Change button text when content is hidden */
    }
});
