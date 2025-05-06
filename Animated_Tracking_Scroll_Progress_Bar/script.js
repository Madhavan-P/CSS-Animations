// window.addEventListener('scroll',()=>{
//     const scroll = document.querySelector('.scroll-level');
//     const percent = document.querySelector('#percent');
//     const windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
//     const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
//     const scrolled = ( windowScroll / height ) * 100;
//     scroll.style.width = `${scrolled}%`;
//     percent.innerHTML = scrolled;
// })

window.addEventListener("scroll", () => {
  const scroll = document.querySelector(".scroll-level");
  const percent = document.querySelector("#percent");
  const windowScroll =
    document.body.scrollTop || document.documentElement.scrollTop;
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const scrolled = (windowScroll / height) * 100;

  const rounded = Math.min(Math.max(scrolled, 0), 100).toFixed(0); // Keep it between 0–100

  scroll.style.width = `${rounded}%`;
  percent.innerHTML = `${rounded}%`;
});
