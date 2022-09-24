/* used this as reference: https://codepen.io/GreenSock/pen/wvMeNee */

const delSections = document.querySelectorAll(".delayed-section");

delSections.forEach((section) => {
  const containerAnim = gsap.to(section.querySelector(".innerContainer"), {
    y: "100vh",
    // x: "150vw",
    rotation: -20,
    // skewX: -20,  // play around with values here
    //skewY: -60,
    ease: "none"
  });

  const imageAnim = gsap.to(section.querySelector("img"), {
    y: "-100vh",
    //x: "-150vw",
    rotation: 20,
    // skewX: 20,  // play around with values here
    //skewY: 60,
    ease: "none",
    paused: true
  });

  const scrub = gsap.to(imageAnim, {
    progress: 1,
    paused: true,
    ease: "power3",
    duration: parseFloat(section.dataset.scrub) || 0.1,
    overwrite: true
  });

  ScrollTrigger.create({
    animation: containerAnim,
    scrub: true,
    trigger: section,
    start: "top bottom",
    end: "bottom top",
    onUpdate: (self) => {
      scrub.vars.progress = self.progress;
      scrub.invalidate().restart();
    }
  });
});