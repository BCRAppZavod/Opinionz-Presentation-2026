
function makeBlink() {
    document.getElementById('businessPlan').classList.add('blinking-text');
};

function stopBlink() {
    document.getElementById('businessPlan').classList.remove('blinking-text');
};

function goToBottom() { 
    window.scrollTo(0, document.body.scrollHeight);
    makeBlink();
    setTimeout(stopBlink, 5000);

}
