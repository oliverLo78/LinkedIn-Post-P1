  // Simple animation for the highlights
        document.addEventListener('DOMContentLoaded', function() {
            const highlights = document.querySelectorAll('.highlight-item');
            
            highlights.forEach((item, index) => {
                item.style.opacity = '0';
                item.style.transform = 'translateX(-20px)';
                
                setTimeout(() => {
                    item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                    item.style.opacity = '1';
                    item.style.transform = 'translateX(0)';
                }, 100 * index);
            });
            
            // Animate tech items
            const techItems = document.querySelectorAll('.tech-item');
            
            techItems.forEach((item, index) => {
                item.style.opacity = '0';
                
                setTimeout(() => {
                    item.style.transition = 'opacity 0.3s ease';
                    item.style.opacity = '1';
                }, 600 + 50 * index);
            });
        });