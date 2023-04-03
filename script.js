function createHeart() {
    const emoticon = document.createElement('div');
    emoticon.classList.add("heart");

    emoticon.style.left = Math.random() * 100 + 'dvw'; 
    emoticon.innerText = "✨";
    document.body.appendChild(emoticon);
}

setInterval(createHeart, 1000);