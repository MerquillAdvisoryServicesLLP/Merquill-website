document.documentElement.classList.add('js');
(function(){
var b=document.querySelector('.menu-btn'),n=document.getElementById('nav');
if(b&&n){b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o)})}

var m=document.querySelector('.has-mega');
if(m){
var t=m.querySelector('.mega-toggle'),timer;
var desk=function(){return window.matchMedia('(min-width:821px)').matches};
var setOpen=function(o){m.classList.toggle('open',o);t.setAttribute('aria-expanded',o)};
t.addEventListener('click',function(e){e.stopPropagation();setOpen(!m.classList.contains('open'))});
m.addEventListener('mouseenter',function(){if(desk()){clearTimeout(timer);setOpen(true)}});
m.addEventListener('mouseleave',function(){if(desk()){timer=setTimeout(function(){setOpen(false)},180)}});
m.addEventListener('focusout',function(e){if(e.relatedTarget&&!m.contains(e.relatedTarget)){setOpen(false)}});
document.addEventListener('click',function(e){if(!m.contains(e.target)){setOpen(false)}});
document.addEventListener('keydown',function(e){if(e.key==='Escape'){setOpen(false)}});
}

var f=document.getElementById('enquiry');
if(f){f.addEventListener('submit',function(e){e.preventDefault();
var d=new FormData(f),g=function(k){return (d.get(k)||'').toString().trim()};
var s='Enquiry from '+g('name')+(g('company')?' ('+g('company')+')':'');
var body='Name: '+g('name')+'\nCompany: '+g('company')+'\nPhone: '+g('phone')+'\nEmail: '+g('email')+'\nArea of interest: '+g('interest')+'\n\n'+g('message');
window.location.href='mailto:info@merquilladvisory.com?subject='+encodeURIComponent(s)+'&body='+encodeURIComponent(body);});}
})();
