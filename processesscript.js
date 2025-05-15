window.addEventListener("DOMContentLoaded", function () {
  // Make sure only map1 is visible at first
  document.querySelectorAll('.map').forEach((map, i) => {
    if (i === 0) {
      map.classList.remove('hidden');
    } else {
      map.classList.add('hidden');
    }
  });

  // Highlight the first button initially
  const firstButton = document.querySelector('.map-buttons button');
  if (firstButton) {
    firstButton.classList.add('active-map-btn');
  }

  // Map switching logic
  window.showMap = function (mapId, btn) {
    const maps = document.querySelectorAll('.map');
    maps.forEach(map => map.classList.add('hidden'));

    const selectedMap = document.getElementById(mapId);
    if (selectedMap) {
      selectedMap.classList.remove('hidden');
    }

    const buttons = document.querySelectorAll('.map-buttons button');
    buttons.forEach(b => b.classList.remove('active-map-btn'));

    if (btn) {
      btn.classList.add('active-map-btn');
    }
  };
});
