function goProjects(){ window.location.href="projects.html"; }

document.addEventListener("DOMContentLoaded", function() {

  // 顯示所有 fade-in 元素
  const faders = document.querySelectorAll('.fade-in, .show');
  faders.forEach(el=>{
    el.classList.add('show');
  });

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
  skillBars.forEach(bar=>{
    const percent = bar.dataset.percent;
    bar.firstElementChild.style.width = percent;
  });

});