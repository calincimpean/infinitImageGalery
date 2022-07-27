document.addEventListener('DOMContentLoaded', function() {
    
    var stream = document.querySelector('.gallerystream');
    var items = document.querySelectorAll('.galleryitem');
    var prev = document.querySelector('.galleryprev');
    var next = document.querySelector('.gallerynext');
    
    
    prev.addEventListener('click', function() {
      stream.insertBefore(items[items.length - 1], items[0]);
      items = document.querySelectorAll('.galleryitem');
    });
    
    
    next.addEventListener('click', function() {
      stream.appendChild(items[0]);
      items = document.querySelectorAll('.galleryitem');
    });
  });