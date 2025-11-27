// Mobile menu toggle
const mobileMenu = document.getElementById('mobile-menu');
const navbarLinks = document.getElementById('navbar-links');

if (mobileMenu && navbarLinks) {
  mobileMenu.addEventListener('click', function () {
    navbarLinks.classList.toggle('active');
    this.classList.toggle('open');
  });
}

// Dropdown toggles
const dropdowns = document.querySelectorAll('.dropdown_toggle');

dropdowns.forEach(function (drop) {
  drop.addEventListener('click', function (e) {
    e.preventDefault();
    const parent = drop.parentElement;
    parent.classList.toggle('active');
  });
});



// Add interactivity to programme cards
document.querySelectorAll('.program_card').forEach(card => {
  card.addEventListener('click', function () {
    const programmeName = this.querySelector('.program_name').textContent;
    alert(`You selected: ${programmeName}. You will be redirected to learn more about this programme.`);
    // In a real implementation, this would redirect to the programme page
  });
});

// Add hover effect to programme links
// document.querySelectorAll('.programme-link').forEach(link => {
//   link.addEventListener('click', function (e) {
//     e.stopPropagation(); 
//   });
// });


// Add button functionality
// document.querySelector('.btn-primary').addEventListener('click', function () {
//   alert('Thank you for your interest in donating to Manyana Mhlali Development! You will be redirected to our donation page.');
//   window.location.href = '/donate.html';
// });

// document.querySelector('.btn-secondary').addEventListener('click', function () {
//   alert('Thank you for your interest in getting involved with Manyana Mhlali Development! You will be redirected to our volunteer page.');
//   window.location.href = '/get-involved';
// });






// Add interactivity to the CTA button
// document.querySelector('.survivor_cta').addEventListener('click', function (e) {
//   e.preventDefault();
//   alert('Thank you for your courage! You will be redirected to our survivor support resources.');
// });

// // Add subtle animation to floating elements
// const elements = document.querySelectorAll('.floating-element');
// elements.forEach((element, index) => {
//   element.style.animation = `float ${3 + index}s ease-in-out infinite alternate`;
// });

// // Add CSS animation for floating effect
// const style = document.createElement('style');
// style.textContent = `
//             @keyframes float {
//                 0% { transform: translateY(0) rotate(0deg); }
//                 100% { transform: translateY(-20px) rotate(5deg); }
//             }
//         `;
// document.head.appendChild(style);

// Add interactivity to option items
document.querySelectorAll('.option_item').forEach(item => {
  item.addEventListener('click', function () {
    const title = this.querySelector('.option_title').textContent;
    alert(`Thank you for your interest in "${title}"! You will be redirected to more information.`);
    // In a real implementation, this would redirect to the appropriate page
  });
});

// Add click functionality to donate button
// document.querySelector('.donate_button').addEventListener('click', function (e) {
//   e.preventDefault();
//   alert('Thank you for your generosity! You will be redirected to our secure donation page.');
// });

// Video play/pause on click (optional)
// document.querySelector('.video_container').addEventListener('click', function () {
//   const video = this.querySelector('video');
//   if (video.paused) {
//     video.play();
//   } else {
//     video.pause();
//   }
// });

// Newsletter form submission
    document.querySelector('.newsletter_form')?.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('.newsletter_input').value;
        
        // In a real implementation, you would send this to your backend
        alert(`Thank you for subscribing with ${email}! You'll receive updates about MMD's work.`);
        this.reset();
    });

    // Smooth scroll for footer links
    document.querySelectorAll('.footer_links a').forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });