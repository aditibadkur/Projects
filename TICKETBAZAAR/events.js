document.addEventListener('DOMContentLoaded', function() {
    
    const searchInput = document.getElementById('input');
    const dropdownList = document.getElementById('suggestions');
  
    searchInput.addEventListener('click', function() {
      dropdownList.style.display = 'block';
    });
  
    // Close the dropdown when clicking outside
    window.addEventListener('click', function(event) {
      if (!searchInput.contains(event.target)) {
        dropdownList.style.display = 'none';
      }
    });
    
  
  
  
    const button = document.getElementById('pop');
    const popover = document.getElementById('popov');
  
    button.addEventListener('click', function() {
      popover.style.display = 'block';
    });
  
    document.addEventListener('click', function(event) {
      if (!popover.contains(event.target) && event.target !== button) {
        popover.style.display = 'none';
      }
    });
  });
  