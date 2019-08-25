window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition; // STARTS SPEECH RECOGNITION IF SUPPORTED BY THE BROWSER (AT THIS TIME, CHROME IS THE ONLY BROWSER THAT SUPPORTS)

// VARIABLES
const recognition = new SpeechRecognition();
recognition.interimResults = true;
const transcript_element = document.getElementById("transcript");
// BUTTONS
const talkBtn = document.getElementById("start");
const endBtn = document.getElementById("end");

let p = document.createElement("p");
transcript_element.appendChild(p);

// SPEECH RECOGNITION EVENT LISTENER (WILL REPEATEDLY ASK FOR PERMISSION BECAUSE PATH NOT SECURE "HTTPS")
recognition.addEventListener("result", (e) => {
    const transcript = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join(""); // JOINS IT TOGETHER

    p.textContent = transcript;
    if(e.results[0].isFinal) {
        p = document.createElement("p");
        p.textContent = transcript;
        transcript_element.appendChild(p);
        p.textContent = "";

         if(transcript.includes("weather")) {
            let command = document.createElement("p");
            command.classList.add("command");
            command.textContent = "Getting the weather...";

            transcript_element.appendChild(command);
        }
    }
});

recognition.addEventListener("end", () => {
    endBtn.disabled = true;
    talkBtn.disabled = false;
});

talkBtn.addEventListener("click", () => {
    endBtn.disabled = false;
    talkBtn. disabled = true;
    recognition.start();
});
endBtn.addEventListener("click", () => {
    endBtn.disabled = true;
    talkBtn.disabled = false;
    recognition.stop();
});