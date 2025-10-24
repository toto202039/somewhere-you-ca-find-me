document.addEventListener('DOMContentLoaded', function() {
  const nextBtn = document.getElementById('next1');
  const body = document.getElementById('mainBody');

  nextBtn.addEventListener('click', function(e) {
    e.preventDefault();
    body.classList.add('fade-out');
    setTimeout(function() {
      window.location.href = nextBtn.parentElement.href;
    }, 700); 
  });
});