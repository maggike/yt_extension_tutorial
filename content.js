console.log("Hi, I have been injected whoopie!!!")

var recorder = null
function onAccessApproved(stream){
    recorder = new MediaRecorder(stream);

    recorder.start();

    recorder.onstop = function(){
        stream.getTracks().forEach(function(track){
            if(track.readyState === "live"){
                track.stop()
            }
        })
    }

    recorder.ondataavailable = function(event){
        let recordedBlob  = event.data;
        let url = URL.createObjectURL(recordedBlob);

        let a = document.createElement("a");

        a.style.display = "none";
        a.href = url;
        a.download = "screen-recording.webm"

        document.body.appendChild(a);
        a.click();

        document.body.removeChild(a);

        URL.revokeObjectURL(url);
    }
}


chrome.runtime.onMessage.addListener( (message, sender, sendResponse)=>{

    if(message.action === "request_recording"){
        console.log("requesting recording")
        

        sendResponse(`processed: ${message.action}`);

        navigator.mediaDevices.getDisplayMedia({
            audio:true,
            video: {
                width:9999999999,
                height: 9999999999
            }
        }).then((stream)=>{
            onAccessApproved(stream)
        })  
    }

    if(message.action === "stopvideo"){
        console.log("stopping video");
        sendResponse(`processed: ${message.action}`);
        if(!recorder) return console.log("no recorder")

        recorder.stop();


    }

})

// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//     if (message.action === "set_volume") {
//         const video = document.querySelector('video');
//         if (video) {
//             video.volume = message.volume;
//             sendResponse({ success: true });
//         } else {
//             sendResponse({ success: false, error: "No video element found" });
//         }
//     }
// });

// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//     if (message.action === "set_youtube_volume") {
//         const player = document.querySelector('video');
//         if (player) {
//             player.setVolume(1); // Set volume to 1% (YouTube API uses values from 0 to 100)
//             sendResponse({ success: true });
//         } else {
//             sendResponse({ success: false, error: "No YouTube player found" });
//         }
//     }
// });