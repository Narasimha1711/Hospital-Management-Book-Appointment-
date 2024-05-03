const ROOM_ID = "<%= roomId %>"
const socket = io('/video');
const videoGrid = document.getElementById('video-grid');
const myPeer = new Peer(undefined, {
host: '/video',
port: '9001'
});

const myVideo = document.createElement('video');
myVideo.muted = true;

navigator.mediaDevices.getUserMedia({
video: true,
audio: true
}).then(stream => {
addVideoStream(myVideo, stream);

myPeer.on('call', call => {
    call.answer(stream);
    const video = document.createElement('video');
    call.on('stream', userVideoStream => {
        addVideoStream(video, userVideoStream);
    });
});

socket.on('user-connected', userId => {
    connectToNewUser(userId, stream);
});
});

socket.on('user-disconnected', userId => {
if (peers[userId]) peers[userId].close();
});

myPeer.on('open', id => {
socket.emit('join-room', ROOM_ID, id);
});

function connectToNewUser(userId, stream) {
const call = myPeer.call(userId, stream);
const video = document.createElement('video');
call.on('stream', userVideoStream => {
    addVideoStream(video, userVideoStream);
});
}

function addVideoStream(video, stream) {
video.srcObject = stream;
video.addEventListener('loadedmetadata', () => {
    video.play();
});

// Append video to the grid container
if (videoGrid.children.length === 1) {
    // This is the local stream, place it in the top-left corner
    videoGrid.insertBefore(video, videoGrid.firstChild);
} else {
    videoGrid.appendChild(video);
}
}