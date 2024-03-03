gsap.registerPlugin(ScrollTrigger);

// ------------------------------QUAND ON CHANGE LA TAILLE DE LA FENTRE LA PAGE SE RECHARGE POUR PAS QUE LES ANIMATIONS BEUG
window.addEventListener('resize', function() {
    window.location.reload();
  });

// -----------------------------------------------------------DESERT
if (window.innerWidth < 767) {
    gsap.fromTo(".frida_dance", 
      { x: 100 }, // Adjust initial x value for mobile
      { x: 0, duration: 1,
        scrollTrigger : {
          trigger: ".desert",
          toggleActions : "restart none restart none",
          scrub : 3,
          start: "-20% center",
          end: "60% center"
        }
      }
    );
  } else {
    gsap.fromTo(".frida_dance", 
      { x: -200 }, // Default initial x value for desktop
      { x: 0, duration: 1,
        scrollTrigger : {
          trigger: ".desert",
          toggleActions : "restart none restart none",
          scrub : 3,
          start: "-10% center",
          end: "60% center"
        }
      }
    );
  }
    // -----------------------------------------------------------COMMUNISME

    if (window.innerWidth < 767) {
        gsap.fromTo(".faucille", { rotation: 0, transformOrigin: "50% 100%", x: -80},
    { rotation: 32, 
    scrollTrigger : {
        trigger: ".faucille",
        toggleActions : "restart none restart none",
        scrub : 3,
        start: "-80% center",
        end: "50% center",
        markers: true
    },});
      } else {
        gsap.fromTo(".faucille", { rotation: 40, transformOrigin: "bottom center"},
    { rotation: -10, 
    scrollTrigger : {
        trigger: ".faucille",
        toggleActions : "restart none restart none",
        scrub : 3,
        start: "-40% center",
        end: "40% center"
    },});
    }

    // -----------------------------------------------------------HERITAGE
gsap.fromTo(".frida_skeleton_desk", { x: -200 },
{ x: 0, duration: 1,
scrollTrigger : {
    trigger: ".heritage",
    toggleActions : "restart none restart none",
    scrub : 3,
    start: "-50% 80%",
    end: "70% center"
},});

    // -----------------------------------------------------------FEMINISME
    gsap.fromTo(".coeur_desk", { x: 200, rotation: 10},
    { x: 0, duration: 1, rotation: 0,
    scrollTrigger : {
        trigger: ".coeur_desk",
        toggleActions : "restart none restart none",
        scrub : 3,
        start: "-100% 80%",
        end: "1% center"
    },});

    //--------------------------------------------------------- TRANSITIONS

    gsap.to(".transition_sable", {
        marginTop: "-40vh",
        ease: "none",
        scrollTrigger: {
          trigger: "header",
          start: "top bottom",
          end: "bottom center",
          scrub: 2,
        }, 
      });

    gsap.to(".transition_rouge", {
        marginTop: "-40vh",
        ease: "none",
        scrollTrigger: {
          trigger: ".desert",
          start: "top bottom",
          end: "bottom center",
          scrub: 2,
        }, 
      });

      gsap.to(".transition_vert", {
        marginTop: "-40vh",
        ease: "none",
        scrollTrigger: {
          trigger: ".communisme",
          start: "top bottom",
          end: "bottom center",
          scrub: 2,
        }, 
      });

      gsap.to(".transition_vert_fonce", {
        marginTop: "-45vh",
        ease: "none",
        scrollTrigger: {
          trigger: ".heritage",
          start: "top bottom",
          end: "bottom center",
          scrub: 2,
        }, 
      });

      gsap.to(".transition_orange", {
        marginTop: "-55vh",
        ease: "none",
        scrollTrigger: {
          trigger: ".feminisme",
          start: "top bottom",
          end: "bottom center",
          scrub: 2,
        }, 
      });

      if (window.innerWidth < 767) {
        gsap.to(".transition_footer", {
            marginTop: "-100vh",
            ease: "none",
            scrollTrigger: {
              trigger: ".virtuelle",
              start: "top bottom",
              end: "bottom center",
              scrub: 2,
            }, 
          });
      } else {
        gsap.to(".transition_footer", {
            marginTop: "-50vh",
            ease: "none",
            scrollTrigger: {
              trigger: ".virtuelle",
              start: "top bottom",
              end: "bottom center",
              scrub: 2,
            }, 
          });
    }