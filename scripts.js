// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search');
    const newsItems = document.querySelectorAll('.news-item');

    searchInput.addEventListener('input', function() {
        const searchTerm = searchInput.value.toLowerCase();

        newsItems.forEach(item => {
            const title = item.querySelector('h3').textContent.toLowerCase();
            const description = item.querySelector('p').textContent.toLowerCase();

            if (title.includes(searchTerm) || description.includes(searchTerm)) {
                item.style.display = 'flex';
            } else {
                item.style.display = 'none';
            }
        });
    });
});
gsap.from(".site-name-container", {
    y: -100, // شروع از بالای صفحه
    duration: 1, // مدت زمان انیمیشن
    ease: "power2.out" // نوع انیمیشن
});
// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search');
    const newsItems = document.querySelectorAll('.news-item');

    // انیمیشن برای نام سایت
    gsap.from(".site-name-container", {
        y: -100, // شروع از بالای صفحه
        duration: 1.5, // مدت زمان انیمیشن
        ease: "power2.out", // نوع انیمیشن
        opacity: 0 // شروع با شفافیت صفر
    });

    searchInput.addEventListener('input', function() {
        const searchTerm = searchInput.value.toLowerCase();

        newsItems.forEach(item => {
            const title = item.querySelector('h3').textContent.toLowerCase();
            const description = item.querySelector('p').textContent.toLowerCase();

            if (title.includes(searchTerm) || description.includes(searchTerm)) {
                item.style.display = 'flex';
            } else {
                item.style.display = 'none';
            }
        });
    });
});


