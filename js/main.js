function goProjects() {
  window.location.href = "projects.html";
}

// 滾動動畫
const faders = document.querySelectorAll('.fade-in');

window.addEventListener('scroll', () => {
  faders.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if(top < window.innerHeight - 50){
      el.classList.add('show');
    }
  });
});