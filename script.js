function toggleTheme(){document.body.classList.toggle('light');}
function toggleMenu(){
  var menu=document.getElementById('mobileMenu');
  if(menu.style.display==='none'){
    menu.style.display='flex';
    menu.innerHTML=`<a href='#summary'>Summary</a><a href='#skills'>Skills</a><a href='#projects'>Projects</a><a href='#experience'>Experience</a><a href='#education'>Education</a><a href='#contact'>Contact</a>`;
  } else {
    menu.style.display='none';
  }
}
const faders=document.querySelectorAll('.fade-up');
const appearOnScroll=new IntersectionObserver((entries)=>{
entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');}});});
faders.forEach(el=>appearOnScroll.observe(el));
