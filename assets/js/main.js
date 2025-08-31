// Mobile nav toggle and active link highlight
(function(){
  const nav = document.querySelector('.nav');
  const btn = document.querySelector('.nav-toggle');
  if(btn && nav){
    btn.addEventListener('click',()=>{
      const open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', String(open));
    });
  }
  // highlight active link by pathname
  const path = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  document.querySelectorAll('.nav a').forEach(a=>{
    const target = (a.getAttribute('href')||'').toLowerCase();
    if((path==='' && target.endsWith('index.html')) || path===target){a.classList.add('active');}
    if(path==='index.html' && (target===''||target==='#')){a.classList.add('active');}
  });

  // contact form -> mailto fallback
  const form = document.querySelector('form.contact');
  if(form){
    form.addEventListener('submit', (e)=>{
      e.preventDefault();
      const data = new FormData(form);
      const name = data.get('name')||'';
      const email = data.get('email')||'';
      const phone = data.get('phone')||'';
      const message = data.get('message')||'';
      const to = form.getAttribute('data-email')||'info@example.com'; // TODO: replace
      const subject = encodeURIComponent('Website enquiry');
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\n${message}`);
      window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
    });
  }
})();

