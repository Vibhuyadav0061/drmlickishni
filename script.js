var preloader = document.getElementById("preloader");
window.addEventListener("load",function(){
    preloader.style.display = "none";
});


// Enhanced navbar functionality
function navopen(){
    const navList = document.getElementById("nav-list");
    const navButton = document.getElementById("nav-open");
    
    navButton.style.display = "none";
    navList.classList.add("active");
    document.body.style.overflow = "hidden"; // Prevent background scrolling
    
    // Add backdrop
    const backdrop = document.createElement('div');
    backdrop.className = 'nav-backdrop';
    backdrop.onclick = navclose;
    document.body.appendChild(backdrop);
}

function navclose(){
    const navList = document.getElementById("nav-list");
    const navButton = document.getElementById("nav-open");
    const backdrop = document.querySelector('.nav-backdrop');
    
    navList.classList.remove("active");
    navButton.style.display = "flex";
    document.body.style.overflow = "auto"; // Restore scrolling
    
    // Remove backdrop
    if (backdrop) {
        backdrop.remove();
    }
}

// Enhanced mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const navList = document.getElementById('nav-list');
    
    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 1200 && navList.classList.contains('active')) {
                navclose();
            }
        });
    });
    
    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 1200 && navList.classList.contains('active')) {
            navclose();
        }
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// slider
const sliderimage = document.getElementById("slider-img");
let ct = 1;
setInterval( ()=>{
    
    if(ct == 1){

        sliderimage.src = "images/building1.jpg";
    }
    else if(ct == 2){
        sliderimage.src = "images/2024boys.png";
        
    }
    else if(ct == 3){
        sliderimage.src = "images/scout.png";
    }
    else if(ct == 4){
        sliderimage.src = "images/trip.png";
    }
    else if(ct == 5){
        sliderimage.src = "images/danceevent.png";
    }
    else if(ct == 6){
        sliderimage.src = "images/building2.png";
    }
    else if(ct == 7){
        sliderimage.src = "images/game.png";
    }
    else{
        sliderimage.src = "images/event1.png";
        ct=1;
    }
    ct++;
}, 5000);


// const video = document.getElementById("video");
// let ctv = 1;
// function nextvideo(){
//     ctv = (ctv+1)%3;
//     if(ctv == 1){
//         video.src = "https://www.youtube.com/embed/LFeJqF30i0A?si=YPEWmnV4ZEEgT8t1";
//     }
//     else{
//         video.src = "https://www.youtube.com/embed/rz8rULnwMpk?si=Q_Dj_4R_lzVu4sNB";
//     }
    
// }
// function previousvideo(){
//     ctv = (ctv-1)%3;
//     if(ctv == 1){
//         video.src = "https://www.youtube.com/embed/LFeJqF30i0A?si=YPEWmnV4ZEEgT8t1";
//     }
//     else{
//         video.src = "https://www.youtube.com/embed/_dGXoMJQ6Qk?si=4vATpAbi9zekOIN9";
//     }
// }


// // footer
// document.getElementById('newsletter-form').addEventListener('submit', function(event) {
//     event.preventDefault();
//     const email = document.getElementById('newsletter-email').value;
//     if (email) {
//         alert(`Thank you for subscribing with ${email}`);
//         document.getElementById('newsletter-email').value = '';
//     } else {
//         alert('Please enter a valid email address.');
//     }
// });




// form

// Gallery functionality
document.addEventListener('DOMContentLoaded', function() {
    // Gallery filter functionality
    const filterBtns = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');
            
            const filter = btn.getAttribute('data-filter');
            
            galleryItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.classList.remove('hidden');
                    item.style.animation = 'fadeIn 0.5s ease';
                } else {
                    item.classList.add('hidden');
                }
            });
        });
    });
    
    // Lightbox functionality
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxTitle = document.querySelector('.lightbox-title');
    const lightboxDescription = document.querySelector('.lightbox-description');
    const lightboxClose = document.querySelector('.lightbox-close');
    const lightboxPrev = document.querySelector('.lightbox-prev');
    const lightboxNext = document.querySelector('.lightbox-next');
    
    let currentImageIndex = 0;
    let visibleImages = [];
    
    function updateVisibleImages() {
        visibleImages = Array.from(galleryItems).filter(item => !item.classList.contains('hidden'));
    }
    
    function openLightbox(index) {
        updateVisibleImages();
        currentImageIndex = index;
        const item = visibleImages[currentImageIndex];
        const img = item.querySelector('img');
        const overlay = item.querySelector('.gallery-overlay');
        
        lightboxImage.src = img.src;
        lightboxImage.alt = img.alt;
        lightboxTitle.textContent = overlay.querySelector('h3').textContent;
        lightboxDescription.textContent = overlay.querySelector('p').textContent;
        
        lightbox.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
    
    function closeLightbox() {
        lightbox.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    
    function showNextImage() {
        updateVisibleImages();
        currentImageIndex = (currentImageIndex + 1) % visibleImages.length;
        openLightbox(currentImageIndex);
    }
    
    function showPrevImage() {
        updateVisibleImages();
        currentImageIndex = (currentImageIndex - 1 + visibleImages.length) % visibleImages.length;
        openLightbox(currentImageIndex);
    }
    
    // Add click event to gallery items
    galleryItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            updateVisibleImages();
            const visibleIndex = visibleImages.indexOf(item);
            if (visibleIndex !== -1) {
                openLightbox(visibleIndex);
            }
        });
    });
    
    // Lightbox controls
    lightboxClose.addEventListener('click', closeLightbox);
    lightboxNext.addEventListener('click', showNextImage);
    lightboxPrev.addEventListener('click', showPrevImage);
    
    // Close lightbox when clicking outside image
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (lightbox.style.display === 'block') {
            switch(e.key) {
                case 'Escape':
                    closeLightbox();
                    break;
                case 'ArrowRight':
                    showNextImage();
                    break;
                case 'ArrowLeft':
                    showPrevImage();
                    break;
            }
        }
    });
});

// Social Media Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
    const socialToggle = document.getElementById('socialToggle');
    const socialFloating = document.querySelector('.social-media-floating');
    
    if (socialToggle && socialFloating) {
        socialToggle.addEventListener('click', function() {
            socialFloating.classList.toggle('active');
        });
        
        // Auto-hide on mobile after interaction
        if (window.innerWidth <= 768) {
            const socialLinks = document.querySelectorAll('.social-link');
            socialLinks.forEach(link => {
                link.addEventListener('click', function() {
                    setTimeout(() => {
                        socialFloating.classList.remove('active');
                    }, 300);
                });
            });
        }
    }
});

// Scroll to top functionality
window.addEventListener('scroll', function() {
    const scrollToTop = document.getElementById('scrollToTop');
    if (window.pageYOffset > 300) {
        scrollToTop.classList.add('visible');
    } else {
        scrollToTop.classList.remove('visible');
    }
});

document.getElementById('scrollToTop').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});








