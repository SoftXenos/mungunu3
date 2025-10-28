const card = document.getElementById('card');

// Flip the card on click
card.addEventListener('click', () => {
  card.classList.toggle('flipped');
});

// Generate confetti
const confetti = document.getElementById('confetti');
for(let i=0;i<60;i++){
  const piece = document.createElement('span');
  piece.style.left = Math.random()*100+'%';
  piece.style.backgroundColor = `hsl(${Math.random()*360},70%,60%)`;
  piece.style.width = piece.style.height = Math.random()*6+4+'px';
  piece.style.animationDuration = (Math.random()*3+3)+'s';
  piece.style.animationDelay = Math.random()*5+'s';
  confetti.appendChild(piece);
}
