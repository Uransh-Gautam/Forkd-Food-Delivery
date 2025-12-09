document.addEventListener('DOMContentLoaded', () => {
    console.log('Fork\'d Website Loaded');

    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;

    // Check for saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        themeToggleBtn.textContent = '☀️';
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            const isDark = body.classList.contains('dark-mode');
            themeToggleBtn.textContent = isDark ? '☀️' : '🌙';
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
        });
    }


    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for contacting us! We have received your message and will get back to you shortly.');
            contactForm.reset();
        });
    }


    const categoryBtns = document.querySelectorAll('.menu-category-btn');
    const menuItems = document.querySelectorAll('.menu-item');

    if (categoryBtns.length > 0 && menuItems.length > 0) {
        categoryBtns.forEach(btn => {
            btn.addEventListener('click', () => {

                categoryBtns.forEach(b => b.classList.remove('active'));

                btn.classList.add('active');

                const selectedCategory = btn.getAttribute('data-category');

                menuItems.forEach(item => {
                    const itemCategory = item.getAttribute('data-category');

                    if (selectedCategory === 'all' || selectedCategory === itemCategory) {
                        item.style.display = 'block';

                        item.style.opacity = '0';
                        setTimeout(() => {
                            item.style.opacity = '1';
                        }, 50);
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }
});
