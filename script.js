document.addEventListener('DOMContentLoaded', () => {
    // Add a subtle fade-in animation when the page loads
    const content = document.querySelector('.content');
    
    // Set initial opacity to 0
    content.style.opacity = 0;
    
    // Fade in the content
    setTimeout(() => {
        content.style.transition = 'opacity 1.5s ease';
        content.style.opacity = 1;
    }, 300);
    
    // Add a slight hover effect on the CTA button
    const ctaButton = document.querySelector('.cta-button');
    
    ctaButton.addEventListener('mouseenter', () => {
        const arrow = ctaButton.querySelector('.arrow');
        arrow.style.transition = 'transform 0.3s ease';
        arrow.style.transform = 'translateX(5px)';
    });
    
    ctaButton.addEventListener('mouseleave', () => {
        const arrow = ctaButton.querySelector('.arrow');
        arrow.style.transform = 'translateX(0)';
    });
    

});

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.links');

// Fix event listener to prevent event propagation
hamburger.addEventListener('click', (e) => {
  e.stopPropagation(); // Prevent click from bubbling up
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
  if (navLinks.classList.contains('active') && 
      !hamburger.contains(e.target) && 
      !navLinks.contains(e.target)) {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
  }
});

document.addEventListener('DOMContentLoaded', () => {
  // Register ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);

  // Initial page load animation
  const tl = gsap.timeline();
  
  tl.from("body", {
    duration: 1.5,
    backgroundColor: "#ffffff",
    ease: "power2.inOut"
  })
  .from(".image", {
    duration: 1.5,
    opacity: 0,
    scale: 0.8,
    y: 100,
    rotation: -5,
    ease: "elastic.out(1, 0.5)"
  }, "-=1")
  .from(".hello-i-am-rahul", {
    duration: 1.2,
    opacity: 0,
    x: -100,
    ease: "back.out(1.7)"
  }, "-=0.5")
  .from([".full-time-forex", ".text-wrapper"], {
    duration: 1,
    opacity: 0,
    y: 30,
    stagger: 0.3,
    ease: "power3.out"
  }, "-=0.8")
  .from(".contact-button", {
    duration: 0.8,
    opacity: 0,
    scale: 0,
    ease: "back.out(2)"
  }, "-=0.5");

  // Course section animations with parallax
  gsap.from(".cours", {
    scrollTrigger: {
      trigger: ".cours",
      start: "top 800%",
      end: "bottom 20%",
      toggleActions: "play none none reverse",
      scrub: 1
    },
    y: 100,
    opacity: 0,
    ease: "none"
  });

  // Animate course elements with 3D effect
  const courseElements = gsap.utils.toArray(".cours .frame > *");
  courseElements.forEach((elem, i) => {
    gsap.from(elem, {
      scrollTrigger: {
        trigger: elem,
        start: "top 85%",
        end: "top 20%",
        toggleActions: "play none none reverse"
      },
      duration: 1,
      opacity: 0,
      y: 50,
      rotationX: 45,
      transformOrigin: "0% 50% -100",
      ease: "power2.out",
      delay: i * 0.2
    });
  });

  // Floating animation for the laptop image
  gsap.to(".rectangle", {
    y: 20,
    rotation: 2,
    duration: 2,
    ease: "sine.inOut",
    repeat: -1,
    yoyo: true
  });

  // Parallax effect for background elements
  gsap.to(".ellipse", {
    scrollTrigger: {
      trigger: ".cours",
      start: "top bottom",
      end: "bottom top",
      scrub: 1
    },
    y: -100,
    ease: "none"
  });

  // FAQ section animations with stagger and 3D effect
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach((item, index) => {
    gsap.from(item, {
      scrollTrigger: {
        trigger: item,
        start: "top 85%",
        end: "top 20%",
        toggleActions: "play none none reverse"
      },
      opacity: 0,
      y: 100,
      rotationY: 15,
      transformOrigin: "left center",
      duration: 1,
      delay: index * 0.2,
      ease: "power3.out"
    });

    // Enhanced hover animation
    item.addEventListener('mouseenter', () => {
      gsap.to(item, {
        scale: 1.05,
        rotationY: 5,
        boxShadow: "0 20px 40px rgba(234, 96, 63, 0.2)",
        duration: 0.4,
        ease: "power2.out"
      });
    });

    item.addEventListener('mouseleave', () => {
      gsap.to(item, {
        scale: 1,
        rotationY: 0,
        boxShadow: "none",
        duration: 0.4,
        ease: "power2.inOut"
      });
    });
  });

  // Text reveal animation for FAQ heading
  const faqHeading = document.querySelector('.faq-section .heading');
  const splitText = new SplitText(faqHeading, { type: "chars, words" });
  
  gsap.from(splitText.chars, {
    scrollTrigger: {
      trigger: faqHeading,
      start: "top 80%",
      toggleActions: "play none none reverse"
    },
    opacity: 0,
    y: 50,
    rotationX: -90,
    stagger: 0.02,
    duration: 1,
    ease: "back.out(1.7)"
  });
});