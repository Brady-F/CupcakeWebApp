const urlParams = new URLSearchParams(window.location.search);
const referralCode = urlParams.get('referral');

console.log(referralCode);

function playGorilla(){
    openGame("https://a005-76-247-13-82.ngrok-free.app/");
}

function playMoutai(){
    openGame("http://localhost:51405/")
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

function closeGame(score){
    // If user has available games, allow them to play more
    // If no games then bring them to referral UI
    const gameFrame = document.getElementById('gameFrame');
    const referUI = document.getElementById('referUI');
    const referText = document.getElementById('referText');

    referText.textContent = "You scored "+score+"! Refer friends or register to play more games!"
    referUI.style.display = 'block';
    gameFrame.src = null;
    gameFrame.style.display = 'none';
}

function referFriends(){
    window.open("http://t.me/share/url?url=https://t.me/CupcakeTestBot?start="+referralCode+"3&text=My%20high%20score%20is%200!%20Play%20Cupcake%20and%20try%20to%20beat%20me.")
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
            //Sending data closes telegram web app
            //window.Telegram.WebApp.sendData(event.data.command+";"+event.data.result.value)
        }, 2500);
    }
});

window.addEventListener("beforeunload", function(event){
    window.Telegram.WebApp.sendData("window_closed");
 });
    
window.onbeforeunload = function(event) {
    window.Telegram.WebApp.sendData("window_closed");
};