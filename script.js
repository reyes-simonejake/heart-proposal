function createHearts() {
  for (let i = 0; i < 20; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = Math.random() * 100 + "vh";
    heart.style.animationDelay = Math.random() * 5 + "s";
    document.body.appendChild(heart);
  }
}

createHearts();

const imageUrls = ["img/10.jpg", "img/7.jpg", "img/11.jpg", "img/9.jpg"];
let noCount = 0;
let yesButtonSize = 1;

function handleNo() {
  noCount++;
  yesButtonSize += 0.15;

  const yesBtn = document.querySelector(".yes-btn");
  yesBtn.style.transform = `scale(${yesButtonSize})`;
  yesBtn.style.fontSize = `${1.2 + noCount * 0.1}em`;

  const newNoBtn = document.createElement("button");
  newNoBtn.className = "btn no-btn";
  newNoBtn.innerHTML = "No";
  newNoBtn.onclick = handleNo;
  newNoBtn.style.position = "absolute";
  newNoBtn.style.left = Math.random() * (window.innerWidth - 100) + "px";
  newNoBtn.style.top = Math.random() * (window.innerHeight - 50) + "px";
  document.body.appendChild(newNoBtn);

  const img = document.createElement("img");
  img.className = "random-image";
  img.src = imageUrls[Math.floor(Math.random() * imageUrls.length)];
  img.style.left = Math.random() * (window.innerWidth - 150) + "px";
  img.style.top = Math.random() * (window.innerHeight - 150) + "px";
  document.body.appendChild(img);
}

function handleYes() {
  document.body.innerHTML = `
      <div class="success-container">
        <h1>Yeheyyyy! I love you! ❤️</h1>
        <div class="photo-gallery">
          <img src="img/8.jpg" alt="Happy memory 1" class="photo">
          <img src="img/4.jpg" alt="Happy memory 2" class="photo">
          <img src="img/3.jpg" alt="Happy memory 3" class="photo">
        </div>
        <audio autoplay loop>
          <source src="marilag.mp3" type="audio/mpeg">
        </audio>
      </div>
      <footer>Created by Simone Jake Reyes</footer>
    `;
  document.body.style.backgroundColor = "#ffb3b3";
  createHearts(); // Recreate hearts in success page
}
