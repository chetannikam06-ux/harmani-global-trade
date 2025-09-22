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

  // Contact form submission with GetForm (works immediately)
  const form = document.querySelector('form.contact');
  if(form){
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      
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
        
        // Send to GetForm
        const response = await fetch('https://getform.io/f/aejjekga', {
          method: 'POST',
          body: formData
        });
        
        if (response.ok) {
          // Success
          showMessage('success');
          form.reset();
        } else {
          // Error
          throw new Error('Form submission failed');
        }
        
      } catch (error) {
        console.error('Form Error:', error);
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

