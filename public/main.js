const tg = window.Telegram.WebApp;
tg.expand();

function sendOrder(item) {
  tg.sendData(JSON.stringify({ item }));
}


vibrobtn.onclick = function(){
       clearInterval(timerID)
 timerID =   setInterval(() => {
 Telegram.WebApp.HapticFeedback.impactOccured
    ('heavy')
    }, 1)
   
}


vibrostopbtn.onclick = function(){
    clearInterval(timerID)
 }