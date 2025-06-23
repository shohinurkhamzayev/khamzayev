document.addEventListener('DOMContentLoaded', function() {
    
    console.log('Vizitka yuklandi!');
    
    
    const phoneNumber = document.querySelector('.contact-item span');
    if (phoneNumber) {
        phoneNumber.addEventListener('click', function() {
            const text = this.innerText;
            navigator.clipboard.writeText(text).then(() => {
                const originalText = this.innerText;
                this.innerText = 'Nusxalandi!';
                setTimeout(() => {
                    this.innerText = originalText;
                }, 2000);
            });
        });
    }
    
    
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
});