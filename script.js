function playGorilla(){
    openGame("cakerilla-scoremod.pages.dev");
}

function playMoutai(){
    window.Telegram.WebApp.sendData('test moutai')
}

function openGame(gameUrl) {
    const mainUI = document.getElementById('mainUI');
    const gameFrame = document.getElementById('gameFrame');

    mainUI.style.display = 'none';
    gameFrame.src = gameUrl;
    gameFrame.style.display = 'flex';
    gameFrame.style.width = '100%';
    gameFrame.style.height = '100%';
    window.Telegram.WebApp.ready();
    window.Telegram.WebApp.expand();
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
        window.Telegram.WebApp.sendData(event.data.command+";"+event.data.result.value)
    }
});