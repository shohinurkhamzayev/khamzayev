document.addEventListener('DOMContentLoaded', function() {
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

    const telegramIcon = document.querySelector('.telegram-icon');
    const groupIcon = document.querySelector('.group-icon');
    
   
    document.querySelector('.telegram-link').addEventListener('click', function(e) {
       
        telegramIcon.style.animation = 'bounce 0.5s ease';
        setTimeout(() => {
            telegramIcon.style.animation = '';
        }, 500);
        
       
        e.preventDefault();
        setTimeout(() => {
            window.open(this.href, '_blank');
        }, 300);
    });
    
   
    document.querySelector('.group-link').addEventListener('click', function(e) {
        
        groupIcon.style.animation = 'bounce 0.5s ease';
        setTimeout(() => {
            groupIcon.style.animation = '';
        }, 500);
        
       
        e.preventDefault();
        setTimeout(() => {
            window.open(this.href, '_blank');
        }, 300);
    });
});
const channelIcon = document.querySelector('.channel-icon');

document.querySelector('.channel-link').addEventListener('click', function(e) {
    
    channelIcon.style.animation = 'bounce 0.5s ease';
    setTimeout(() => {
        channelIcon.style.animation = '';
    }, 500);

    
    e.preventDefault();
    setTimeout(() => {
        window.open(this.href, '_blank');
    }, 300);
});
const whatsappIcon = document.querySelector('.whatsapp-icon');
document.querySelector('.whatsapp-link').addEventListener('click', function(e) {
    whatsappIcon.style.animation = 'bounce 0.5s ease';
    setTimeout(() => { whatsappIcon.style.animation = ''; }, 500);
    e.preventDefault();
    setTimeout(() => { window.open(this.href, '_blank'); }, 300);
});

const whatsappbIcon = document.querySelector('.whatsappb-icon');
document.querySelector('.whatsappb-link').addEventListener('click', function(e) {
    whatsappbIcon.style.animation = 'bounce 0.5s ease';
    setTimeout(() => { whatsappbIcon.style.animation = ''; }, 500);
    e.preventDefault();
    setTimeout(() => { window.open(this.href, '_blank'); }, 300);
});
