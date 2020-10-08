const tl = gsap.timeline();
gsap.defaults({
  duration: 0.5,
  ease: Power0.easeNone,
});

tl.to(".m1", { stroke: "white" });
tl.to(".m2", { stroke: "white" });
tl.to(".w2", { stroke: "white", delay: -0.5 });
tl.to(".w1", { stroke: "white" });
tl.to(".w3", { stroke: "white" });
tl.to(".m3", { stroke: "white", delay: -0.5 });
tl.to(".m", { x: -205 });
tl.to(".w", { x: 205, delay: -0.5 });
tl.fromTo(".wrapper", { opacity: 0 }, { opacity: 1 });
tl.fromTo(".moon", { opacity: 0 }, { opacity: 1 });
tl.fromTo(".stars", { opacity: 0 }, { opacity: 0.2 });
tl.fromTo("nav", { opacity: 0 }, { opacity: 1 });
tl.fromTo(".socials", { opacity: 0 }, { opacity: 1 });

new fullpage("#fullpage", {
  navigation: true,
  navigationPosition: "left",
  anchors: ["home", "portfolio", "kontakt"],
  menu: "#menu",

  onLeave: (origin, destination, direction) => {
    const tl = gsap.timeline();
    gsap.defaults({
      duration: 1,
    });
    if (direction === "up") {
      gsap.to(".moon", { duration: 5, y: "+=100", ease: "back.out" });
      gsap.to(".stars", { duration: 5, y: "+=50", ease: "back.out" });
    } else {
      gsap.to(".moon", { duration: 5, y: "-=100", ease: "back.out" });
      gsap.to(".stars", { duration: 5, y: "-=50", ease: "back.out" });
    }

    tl.fromTo("h1", { y: -50, opacity: 0 }, { y: 0, opacity: 1 });
    tl.fromTo("h2", { x: "-100%" }, { x: 0 });
  },
});

const logo = document.querySelector(".logo");
const nav = document.querySelector("nav");
const links = document.querySelectorAll("ul li a");

logo.addEventListener("click", () => {
  console.log("ok");
  nav.classList.toggle("mobileActive");
});
links.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("mobileActive");
  });
});
