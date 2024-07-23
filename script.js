function playGorilla(){
    playGame("https://cakerilla-static.pages.dev/");
}

function playMoutai(){
    window.Telegram.WebApp.sendData('test moutai')
}

function playGame(url){
    const mainUI = document.getElementById('mainUI');
    const gameFrame = document.getElementById('gameFrame');

    gameFrame.src = url;
    mainUI.style.display = 'none';
    gameFrame.style.display = 'block';
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