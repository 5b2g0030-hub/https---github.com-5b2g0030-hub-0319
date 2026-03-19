function goProjects(){ window.location.href="projects.html"; }

// Fade-in scroll
const faders = document.querySelectorAll('.fade-in');
window.addEventListener('scroll', () => {
  faders.forEach(el=>{
    const top = el.getBoundingClientRect().top;
    if(top < window.innerHeight - 50){ el.classList.add('show'); }
  });
});

// 打字動畫
const typingText = document.querySelector('.typing-text');
const text = typingText.dataset.text;
let i = 0;
function type(){
  if(i <= text.length){
    typingText.textContent = text.slice(0,i);
    i++;
    setTimeout(type,80);
  }
}
type();

// 技能條動畫
const skillBars = document.querySelectorAll('.skill-bar');
window.addEventListener('scroll', () => {
  skillBars.forEach(bar=>{
    const top = bar.getBoundingClientRect().top;
    if(top < window.innerHeight - 50){
      const percent = bar.dataset.percent;
      bar.firstElementChild.style.width = percent;
    }
  });
});