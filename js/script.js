// js/script.js - modal for in-development features
document.addEventListener('DOMContentLoaded', function() {
    const getStartedBtn = document.getElementById('get-started-btn');
    const contactBtn = document.getElementById('contact-btn');
    const modal = document.getElementById('dev-modal');
    const devOk = document.getElementById('dev-ok');

    function showModal(autoCloseMs) {
      if (!modal) { alert('This feature is under development — please wait.'); return; }
      modal.setAttribute('aria-hidden','false');
      if (autoCloseMs && autoCloseMs > 0) {
        setTimeout(()=> { modal.setAttribute('aria-hidden','true'); }, autoCloseMs);
      }
    }
    function hideModal(){ if (modal) modal.setAttribute('aria-hidden','true'); }

    if (getStartedBtn) {
        getStartedBtn.addEventListener('click', function() {
            showModal(3000); // auto-close after 3s
        });
    }

    if (contactBtn) {
        contactBtn.addEventListener('click', function() {
            showModal(5000); // contact modal stays a bit longer
        });
    }

    if (devOk) devOk.addEventListener('click', hideModal);

    // close modal on overlay click
    if (modal) {
      modal.addEventListener('click', function(e){
        if (e.target === modal) hideModal();
      });
    }
});
