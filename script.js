function playGorilla(){
    openGame("https://cakerilla-static.pages.dev/");
}

function playMoutai(){
    window.Telegram.WebApp.sendData('test moutai')
}

function openGame(gameUrl) {
    const mainUI = document.getElementById('mainUI');
    const gameFrame = document.getElementById('gameFrame');
    const referUI = document.getElementById('referUI');


    mainUI.style.display = 'none';
    gameFrame.src = gameUrl;
    gameFrame.style.display = 'flex';
    gameFrame.style.width = '100%';
    gameFrame.style.height = '100%';
    window.Telegram.WebApp.ready();
    window.Telegram.WebApp.expand();
}

function closeGame(score){
    const gameFrame = document.getElementById('gameFrame');
    const referUI = document.getElementById('referUI');
    const referText = document.getElementById('referText');

    referText.textContent = "You scored "+score+"! Refer friends or register to play more games!"
    referUI.style.display = 'block';
    gameFrame.src = null;
    gameFrame.style.display = 'none';
}

function referFriends(){
    window.open("tg://msg_url?url=https://t.me/CupcakeTestBot?start=ABC123&text=My%20high%20score%20is%200!%20Play%20Cupcake%20and%20try%20to%20beat%20me.")
}

function registerCupcake(){
    window.open("https://www.cupcake.com")
}

window.addEventListener('message', function(event) {
    // Handle the message
    console.log('Message received from iframe:', event.data);
    // You can add custom logic here based on the message content
    if(event.data.command == "game_result"){
        setTimeout(function() {
            closeGame(event.data.result.value);
            window.Telegram.WebApp.sendData(event.data.command+";"+event.data.result.value)
        }, 2500);
    }
});

window.addEventListener("beforeunload", function(event){
    window.Telegram.WebApp.sendData("window_closed");
 });
    
window.onbeforeunload = function(event) {
    window.Telegram.WebApp.sendData("window_closed");
};