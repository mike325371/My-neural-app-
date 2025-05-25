// Group H 1of4: trainModel() function aaaaaaa
function trainModel() {
  const bar = document.getElementById('progressBar');
  let width = 0;
  const interval = setInterval(() => {
    if (width >= 100) {
      clearInterval(interval);
    } else {
      width++;
      bar.style.width = width + '%';
    }
  }, 50); // Adjust speed as needed
}
// End Group H 1of4
