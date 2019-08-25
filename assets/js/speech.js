window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition; // STARTS SPEECH RECOGNITION IF SUPPORTED BY THE BROWSER (AT THIS TIME, CHROME IS THE ONLY BROWSER THAT SUPPORTS)

// VARIABLES
const recognition = new SpeechRecognition();
recognition.interimResults = true;
const transcript_element = document.getElementById("transcript");

let p = document.createElement("p");
transcript_element.appendChild(p);

// SPEECH RECOGNITION EVENT LISTENER (WILL REPEATEDLY ASK FOR PERMISSION BECAUSE PATH NOT SECURE "HTTPS")
recognition.addEventListener("result", (e) => {
    const transcript = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript);

    p.textContent = transcript;
    if(e.results[0].isFinal) {
        p = document.createElement("p");
        p.textContent = transcript;
        transcript_element.appendChild(p);
        p.textContent = "";
    }
});

recognition.addEventListener("end", recognition.start);

recognition.start();