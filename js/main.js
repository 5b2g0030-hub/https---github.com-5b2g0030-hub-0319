function goProjects(){ window.location.href="projects.html"; }

// Fade-in scroll
function fadeInElements(){
  const faders = document.querySelectorAll('.fade-in');
  faders.forEach(el=>{
    const top = el.getBoundingClientRect().top;
    if(top < window.innerHeight - 50){ el.classList.add('show'); }
  });
}
window.addEventListener('scroll', fadeInElements);
window.addEventListener('load', fadeInElements);

// 打字動畫
const typingText = document.querySelector('.typing-text');
if(typingText){
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
}

// 技能條動畫
const skillBars = document.querySelectorAll('.skill-bar');
function fillSkills(){
  skillBars.forEach(bar=>{
    const percent = bar.dataset.percent;
    bar.firstElementChild.style.width = percent;
  });
}
window.addEventListener('scroll', fillSkills);
window.addEventListener('load', fillSkills);