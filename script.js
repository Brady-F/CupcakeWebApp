function playGorilla(){
    openGame("https://cakerilla-static.pages.dev/");
}

function playMoutai(){
    window.Telegram.WebApp.sendData('test moutai')
}

function openGame(gameUrl) {
    const mainUI = document.getElementById('mainUI');
    const gameWrapper = document.getElementById('gameWrapper');
    const gameFrame = document.getElementById('gameFrame');

    mainUI.style.display = 'none';
    gameWrapper.style.display = 'flex';
    gameFrame.src = gameUrl;

    // Adjust the iframe size and scale to fit the window
    adjustIframeSize();
    window.addEventListener('resize', adjustIframeSize);
}

function adjustIframeSize() {
    const gameWrapper = document.getElementById('gameWrapper');
    const gameFrame = document.getElementById('gameFrame');

    const aspectRatio = 16 / 9; // Example aspect ratio
    const wrapperWidth = gameWrapper.clientWidth;
    const wrapperHeight = gameWrapper.clientHeight;

    let scale;
    if (wrapperWidth / wrapperHeight > aspectRatio) {
        scale = wrapperHeight / (wrapperWidth / aspectRatio);
    } else {
        scale = wrapperWidth / (wrapperHeight * aspectRatio);
    }

    gameFrame.style.width = `${wrapperWidth}px`;
    gameFrame.style.height = `${wrapperHeight}px`;
    gameFrame.style.transform = `scale(${scale})`;
}

function closeGame(){
    const mainUI = document.getElementById('mainUI');
    const gameFrame = document.getElementById('gameFrame');

    mainUI.style.display = 'block';
    gameFrame.src = null;
    gameFrame.style.display = 'none';
}

window.addEventListener('message', function(event) {
    // Handle the message
    console.log('Message received from iframe:', event.data);
    // You can add custom logic here based on the message content
    if(event.data.command == "game_result"){
        //closeGame();
        window.Telegram.WebApp.sendData('Game Over!')
    }
});