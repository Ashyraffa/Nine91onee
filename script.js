document.addEventListener("DOMContentLoaded", function() {
  const cards = document.querySelectorAll('.card2');
  const shuffleBtn = document.getElementById('shuffleBtn');
  let current = 0;

  function showCard(index) {
    cards.forEach((card, i) => {
      card.style.display = i === index ? 'block' : 'none';
    });
    // Always show the button
    shuffleBtn.style.display = 'block';
  }

  shuffleBtn.addEventListener('click', function() {
    current = (current + 1) % cards.length;
    showCard(current);
  });

  showCard(current);
});
