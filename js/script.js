// Button click handlers
document.addEventListener('DOMContentLoaded', function() {
    const getStartedBtn = document.getElementById('get-started-btn');
    const contactBtn = document.getElementById('contact-btn');
    
    if (getStartedBtn) {
        getStartedBtn.addEventListener('click', function() {
            alert('Coming Soon!');
        });
    }
    
    if (contactBtn) {
        contactBtn.addEventListener('click', function() {
            alert('Contact us at dropmedude143-ui@gmail.com');
        });
    }
});
