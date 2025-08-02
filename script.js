document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mouseover', () => {
    card.style.transform = 'scale(1.05)';
    card.style.transition = 'transform 0.3s ease';
  });
  card.addEventListener('mouseout', () => {
    card.style.transform = 'scale(1)';
  });
});