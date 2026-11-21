document.documentElement.classList.add('js');
(function(){var b=document.querySelector('.menu-btn'),n=document.getElementById('nav');
if(b&&n){b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o)})}
var f=document.getElementById('enquiry');
if(f){f.addEventListener('submit',function(e){e.preventDefault();
var d=new FormData(f),g=function(k){return (d.get(k)||'').toString().trim()};
var s='Enquiry from '+g('name')+(g('company')?' ('+g('company')+')':'');
var body='Name: '+g('name')+'\nCompany: '+g('company')+'\nPhone: '+g('phone')+'\nEmail: '+g('email')+'\nArea of interest: '+g('interest')+'\n\n'+g('message');
window.location.href='mailto:info@merquilladvisory.com?subject='+encodeURIComponent(s)+'&body='+encodeURIComponent(body);});}
})();