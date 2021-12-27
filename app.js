//elements 
 

 const startBtn=document.querySelector("#start")
 const stopBtn=document.querySelector("#stop");
 const speakBtn=document.querySelector("#speak");

//speech recognition setup  
   



const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

//sr start 
recognition.onstart = function () {
    console.log("vr active");

};

//sr result
recognition.onresult = function (event){

    let current = event.resultIndex;
    let transcript = event.results[current]
    [0].transcript;
    transcript = transcript.toLowerCase();
    console.log('my words : ${transcript}');

  
    if (transcript.includes("hi jarvis wake up")) {
        readout("hello sir, what can i do for you today , sir you know what project we are doing yesternight");
    };
  
    if (transcript.includes("jarvis open youtube")) {
        readout("opening youtube sir");
        window.open("https://www.youtube.com/")
    };
  
    if (transcript.includes("jarvis open google")) {
        readout("opening Google sir");
        window.open("https://www.google.com/");
    };
  
    if (transcript.includes("jarvis open star captain youtube channel")) {
        readout("opening star captian sir");
        window.open("https://www.youtube.com/c/STAR-Captain");
    };
  
    if (transcript.includes("jarvis open my youtube channel")) {
        readout("opening code with armaan sir");
        window.open("https://www.youtube.com/channel/UC4VKiyUCYJCreaqXl_Dg8xQ");
    };
    
    if (transcript.includes("jarvis open my instagram")) {
        readout("opening instagram sir");
        window.open("https://www.instagram.com/nandu.lovemamma/");
    };
   
    if (transcript.includes("jarvis start music")) {
        readout("starting music sir");
        window.open("https://www.youtube.com/watch?v=MD_WGBjV3tI&list=PL60R4DfXP-wajmDkWxnVglDaX_-WV8viU&index=1");
    };
   
    if (transcript.includes("jarvis start ulle")) {
        readout("starting ulle sir");
        window.open("https://www.youtube.com/watch?v=eYSSH0iJAa4&list=PL60R4DfXP-wajmDkWxnVglDaX_-WV8viU&index=2");
    };
};

//sr stop 
recognition.onend = function() {
    console.log("vr deactivated");
};
//sr conntinuous 
//recognition.continuous=true;

startBtn.addEventListener("click", () => {
    recognition.start();
});


stopBtn.addEventListener("click", () => {
    recognition.stop();
});

speakBtn.addEventListener("click", () =>{
     readout("hi, my name is JARVIS and i am a ai maded by armaan, let's talk to me");
});

// J.A.R.V.I.S speech 
function readout(message){
    const speech = new SpeechSynthesisUtterance()
    speech.text = message;
    speech.volume = 1
    window.speechSynthesis.speak(speech)
    console.log("speaking out")
} 



