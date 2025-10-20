// Галерея (увеличение фото)
const thumbs = document.querySelectorAll('.thumb img');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modalImg');
const closeModal = document.getElementById('closeModal');

thumbs.forEach(img => {
  img.addEventListener('click', () => {
    modalImg.src = img.src;
    modal.classList.add('open');
  });
});

closeModal.addEventListener('click', () => {
  modal.classList.remove('open');
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) modal.classList.remove('open');
});

// Анимированные сердечки 💕
function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.textContent = '💖';
  document.body.appendChild(heart);

  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = (Math.random() * 3 + 2) + 's';

  setTimeout(() => heart.remove(), 5000);
}
setInterval(createHeart, 700);
