var preloader = document.getElementById("preloader");
window.addEventListener("load",function(){
    preloader.style.display = "none";
});


// navbar
function navopen(){
    document.getElementById("nav-open").style.display = "none";
    document.getElementById("nav-list").style.display = "flex";
}

function navclose(){
    document.getElementById("nav-list").style.display = "none";
    document.getElementById("nav-open").style.display = "flex";
}

// slider
const sliderimage = document.getElementById("slider-img");
let ct = 1;
setInterval( ()=>{
    
    if(ct == 1){

        sliderimage.src = "images/schoolbuilding.jpg";
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








