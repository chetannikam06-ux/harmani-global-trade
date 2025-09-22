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

  // Simple working contact form - sends to WhatsApp
  const form = document.querySelector('form.contact');
  if(form){
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Get form data
      const formData = new FormData(form);
      const name = formData.get('name') || '';
      const email = formData.get('email') || '';
      const phone = formData.get('phone') || '';
      const service = formData.get('service') || '';
      const message = formData.get('message') || '';
      
      // Create WhatsApp message
      const whatsappMessage = `*New Business Inquiry - Harmani Global Trade*%0A%0A` +
        `👤 *Name:* ${encodeURIComponent(name)}%0A` +
        `📧 *Email:* ${encodeURIComponent(email)}%0A` +
        `📱 *Phone:* ${encodeURIComponent(phone)}%0A` +
        `🚢 *Service:* ${encodeURIComponent(service)}%0A%0A` +
        `💬 *Message:*%0A${encodeURIComponent(message)}%0A%0A` +
        `Sent from: https://harmaniglobaltrade.com`;
      
      // Send to WhatsApp
      const whatsappUrl = `https://wa.me/917990776365?text=${whatsappMessage}`;
      window.open(whatsappUrl, '_blank');
      
      // Show success message
      showMessage('success');
      form.reset();
    });
  }

  // Function to show status messages
  function showMessage(type) {
    const formStatus = document.getElementById('form-status');
    const successMessage = document.getElementById('success-message');
    const errorMessage = document.getElementById('error-message');
    
    // Hide all messages first
    formStatus.style.display = 'none';
    successMessage.style.display = 'none';
    errorMessage.style.display = 'none';
    
    // Show the appropriate message
    formStatus.style.display = 'block';
    if (type === 'success') {
      successMessage.style.display = 'block';
    } else {
      errorMessage.style.display = 'block';
    }
    
    // Scroll to the message
    formStatus.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    
    // Auto-hide success message after 5 seconds
    if (type === 'success') {
      setTimeout(() => {
        formStatus.style.display = 'none';
      }, 5000);
    }
  }
})();

