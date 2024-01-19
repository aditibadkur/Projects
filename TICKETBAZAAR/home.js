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
    
    
  });

 

  function fetchEvents(){

    fetch('https://se-tasks.vercel.app/events')

    .then(res => res.json())

    .then(data => {
      
      const details = data.map((value) => {
      let name = value.name;
      let venue = value.venue;
      let category = value.category;

      return { name,venue,category };

      })
      appendData(details);
    })

    .catch(error => {
      console.error('Error fetching data:', error);
    });

  }
  fetchEvents();


  function appendData(details) {
    var mainContainer = document.getElementById("card-container");
    
      details.forEach(detail => {
        const detailElement = document.createElement("div");
        detailElement.innerHTML = `<div id="card-get">
        <h3 id="body">${detail.name}</h3><br>
        <p id="bodybelow">${detail.venue}</p><br>
        <p id="bodybelow">${detail.category}</p></div>
        `;
        mainContainer.appendChild(detailElement);
    });
  }

//   const tooltipTrigger = document.querySelector('.tooltip-trigger');
//   const tooltip = document.querySelector('.tooltip');

//   tooltipTrigger.addEventListener('mouseover', () => {
//   tooltip.style.display = 'block';
// });

// tooltipTrigger.addEventListener('mouseout', () => {
//   tooltip.style.display = 'none';
// });


    
  
  
  