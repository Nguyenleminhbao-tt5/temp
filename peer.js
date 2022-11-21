

var Peer = require('simple-peer')
var peer = new Peer({
    initiator:location.hash==="#init",
    trickle: false
})
peer.on('signal', function (data) {
    console.log(data)
    document.getElementById("yourId").value = JSON.stringify(data)
    console.log(document.getElementById("yourId").value);
})
document.getElementById('connect').addEventListener('click', function () {
    console.log("button connect was clicked")
    var otherId = JSON.parse(document.getElementById("otherId").value)
    peer.signal(otherId)
})
document.getElementById('sendMess').addEventListener('click', function () {
    console.log("send button was click")
    var yourMessage = document.getElementById("yourMessage").value
    peer.send(yourMessage)
})
peer.on('connect', () => {
    console.log('Connect success')
})
peer.on('data', data => {
    console.log('data')
    const mess=document.createElement('li');
    mess.innerHTML=data;
    mess.classList.add('liLeft');
    document.getElementById('messages').appendChild(mess);
    document.getElementById('messages').appendChild(document.createElement('br'));
})



