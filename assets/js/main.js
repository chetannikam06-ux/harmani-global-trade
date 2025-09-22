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

  // EmailJS Configuration - Replace these with your actual EmailJS keys
  const EMAILJS_CONFIG = {
    PUBLIC_KEY: '1MRlmthlEf3v7uNXB',    // Replace with your EmailJS public key
    SERVICE_ID: 'service_pgy5hvp',    // Replace with your EmailJS service ID
    TEMPLATE_ID: 'template_3dx8oam'   // Replace with your EmailJS template ID
  };

  // Initialize EmailJS
  if (typeof emailjs !== 'undefined' && EMAILJS_CONFIG.PUBLIC_KEY !== '1MRlmthlEf3v7uNXB') {
    emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
  }

  // Contact form submission with EmailJS
  const form = document.querySelector('form.contact');
  if(form){
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      // Check if EmailJS is configured
      if (EMAILJS_CONFIG.PUBLIC_KEY === '1MRlmthlEf3v7uNXB') {
        showMessage('error', 'EmailJS is not configured yet. Please complete the setup process.');
        return;
      }
      
      // Show loading state
      const submitBtn = document.getElementById('submit-btn');
      const btnText = submitBtn.querySelector('.btn-text');
      const btnLoading = submitBtn.querySelector('.btn-loading');
      
      submitBtn.disabled = true;
      btnText.style.display = 'none';
      btnLoading.style.display = 'inline';
      
      try {
        // Get form data
        const formData = new FormData(form);
        const templateParams = {
          from_name: formData.get('from_name') || '',
          reply_to: formData.get('reply_to') || '',
          phone: formData.get('phone') || '',
          service: formData.get('service') || '',
          message: formData.get('message') || ''
        };
        
        // Send email using EmailJS
        const response = await emailjs.send(
          EMAILJS_CONFIG.SERVICE_ID,
          EMAILJS_CONFIG.TEMPLATE_ID,
          templateParams
        );
        
        // Success
        showMessage('success');
        form.reset();
        
      } catch (error) {
        console.error('EmailJS Error:', error);
        showMessage('error');
      } finally {
        // Reset button state
        submitBtn.disabled = false;
        btnText.style.display = 'inline';
        btnLoading.style.display = 'none';
      }
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

