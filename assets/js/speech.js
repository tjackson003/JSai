window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
const transcript_element = document.getElementById("transcript");

let p = document.createElement("p");
transcript_element.appendChild(p);

recognition.addEventListener("result", (e) => {
    console.log(e);
});

recognition.start();