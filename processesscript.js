window.addEventListener("DOMContentLoaded", function () {
  // Show only the first map on page load
  const containers = document.querySelectorAll('.map-container');
  containers.forEach((container, i) => {
    container.classList.toggle('active', i === 0);
  });

  // Highlight the first button
  const firstButton = document.querySelector('.map-buttons button');
  if (firstButton) {
    firstButton.classList.add('active-map-btn');
  }
});

// Function to switch visible map and description
window.showMap = function (mapId, btn) {
  // Hide all maps
  const containers = document.querySelectorAll('.map-container');
  containers.forEach(container => container.classList.remove('active'));

  // Show the selected map
  const selectedMapImg = document.getElementById(mapId);
  if (selectedMapImg) {
    const container = selectedMapImg.closest('.map-container');
    container.classList.add('active');
  }

  // Update active button
  const buttons = document.querySelectorAll('.map-buttons button');
  buttons.forEach(b => b.classList.remove('active-map-btn'));
  if (btn) {
    btn.classList.add('active-map-btn');
  }
};
