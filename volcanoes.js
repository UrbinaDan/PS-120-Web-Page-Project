function animateBars() {
  const chart = document.getElementById('chart');
  const bars = chart.querySelectorAll('.bar');
  const chartTop = chart.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (chartTop < windowHeight - 100) {
    bars.forEach(bar => {
      const height = bar.getAttribute('data-height');
      bar.style.height = `${height}px`;
    });
    window.removeEventListener('scroll', animateBars);
  }
}

window.addEventListener("DOMContentLoaded", animateBars);
window.addEventListener("scroll", animateBars);
