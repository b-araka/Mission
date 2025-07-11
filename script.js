document.addEventListener("DOMContentLoaded", () => {  
  
 const bg = document.querySelector(".background");
  bg.style.backgroundImage = "url('./images/bg1.avif')";
  bg.style.backgroundRepeat = "no-repeat";
  bg.style.backgroundPosition = "center";
  bg.style.backgroundSize = "cover";
  bg.style.backgroundImage = "url('./images/dinner-date.jpg')";
  function setupUnlockedCardHandlers() {
  document.querySelectorAll(".round-card.unlocked").forEach(card => {
    if (!card.classList.contains("click-ready")) {
      card.classList.add("click-ready"); // Prevent re-binding
      card.addEventListener("click", () => {
        // Trigger sparkle sound
        sparkleSound.currentTime = 0;
        sparkleSound.play();

        const container = card.querySelector(".sparkle-container");
        for (let i = 0; i < 10; i++) {
          const sparkle = document.createElement("div");
          sparkle.className = "sparkle";
          sparkle.innerHTML = "💖";
          sparkle.style.left = `${Math.random() * 100}%`;
          sparkle.style.top = `${Math.random() * 100}%`;
          container.appendChild(sparkle);
          setTimeout(() => sparkle.remove(), 700);
        }

        // Determine which round
        const roundNum = parseInt(card.getAttribute("data-round"));
        currentOpenRound = roundNum;

        const modalHeading = document.querySelector(".modal-heading");
        const conditionText = document.getElementById("conditionText");
        const instructionText = document.getElementById("instructionText");

        if (roundNum === 1) {
          modalHeading.innerHTML = "💖 Round 1: Bring Me Closer";
          conditionText.textContent = "You must smile before starting.";
          instructionText.innerHTML = `Answer the simple riddle to guess the code. Your wife may help you.<br><i>It's 2 words.True love may be miles apart but is always very close to heart.<br>What relationship is this?</i>`;
        } else if (roundNum === 2) {
          modalHeading.innerHTML = "💖 Round 2: A Table for Two";
          conditionText.textContent = "You need your wife to be with you to play this round. You need to agree to whatever your wife says. 💘";
          instructionText.textContent = "Two hearts, one plan. What’s the phrase that says we’re stronger side by side? It's that easy BETTER...";
        }else if (roundNum === 3) {
          modalHeading.innerHTML = "💖 Round 3: Marked Forever";
          conditionText.textContent = "Give your wife a warm, tight hug to unlock this round.💘";
          instructionText.textContent = "Find a peaceful little spot — maybe somewhere cozy and quiet. One word of the secret key is in the round name ...";
        }else if (roundNum === 4) {
          modalHeading.innerHTML = "💖 Round 4: Hearts Unfiltered";
          conditionText.textContent = "To begin, hold your wife’s hands, look into her eyes , and promise to be fully honest. No filters. Just you.💘";
          instructionText.textContent = "Find a calm spot — even your car could work. Here is your code 💖2💖";
        }else if (roundNum === 5) {
          modalHeading.innerHTML = "💖 Round 5: The Final Thriller Condition";
          conditionText.textContent = "You need to drop your wifey back to play this round. Say her Goodbye. You can not unlock till your wifey leaves. 💘";
          instructionText.textContent = "Your wife will tell you the code. Ask her ...";
        }

        roundModal.style.display = "flex";
        roundInput.value = "";
        errorMsg.style.display = "none";
      });
    }
  });
}

let currentStep = 1;

const input = document.getElementById("secretCode");
const button = document.getElementById("unlockBtn");
const hint = document.getElementById("hint");
const bgLayer = document.getElementById("bgLayer");
const music = document.getElementById("bgMusic");
const extraHint = document.getElementById("extraHint");

button.addEventListener("click", handleInput);

function handleInput() {
  const value = input.value.trim().toLowerCase();

  if (currentStep === 1 && value === "jin") {
    // Fade background
    bgLayer.classList.add("bg-fade");

    // Start music softly
    music.volume = 0.1;
    music.play();

    // Update main hint + add second hint below
    hint.textContent = "Okay smart guy 😌 now try this one:";
    extraHint.textContent = "Hint : What's the cutest nickname you gave her 💘.";
    input.value = "";
    currentStep++;
  } else if (currentStep === 2 && value === "churail") {
  music.volume = 0.4;

  bgLayer.classList.add("bg-fade");
  setTimeout(() => {
    bgLayer.style.backgroundImage = "url('./images/background2.jpg')";
    bgLayer.classList.remove("bg-fade");
  }, 2000);

  input.style.opacity = "0";
  button.style.opacity = "0";

  setTimeout(() => {
    hint.style.display = "none";
    extraHint.style.display = "none";
    input.style.display = "none";
    button.style.display = "none";

    const finalMsg = `Welcome... 
You made it. I’ve been waiting for this moment. 
Get cozy. Let’s begin our little adventure together 💌
Are you ready?`;

    typeWriterEffect("finalMessage", finalMsg, 80);

    // Show YES button after typewriter finishes
    setTimeout(() => {
      document.getElementById("yesBtn").style.display = "inline-block";
    }, finalMsg.length * 80 + 800); // after typewriter ends
  }, 2500);
}

 else {
    alert("Hmm... try again, love 😘");
  }
}
const yesBtn = document.getElementById("yesBtn");
const missionIntro = document.getElementById("missionIntro");
const missionContent = document.getElementById("missionContent");
const startBtn = document.getElementById("startBtn");

yesBtn.addEventListener("click", () => {
  // Fade out final message & button
  document.getElementById("finalMessage").style.display = "none";
  yesBtn.style.display = "none";

  // Fade in general mission intro
  missionIntro.style.display = "block";
  
  const introText = `Alright then...

You’re about to begin something beautiful.

There are 5 rounds waiting for you —

Each one a little story, a little memory, a little magic.✨

Only One Condition: You must Unlock each with your heart. 💌🔑`;

  typeWriterEffect("missionContent", introText, 35);

  // Show "Let's go" button after message finishes
  setTimeout(() => {
    startBtn.style.display = "inline-block";
  }, introText.length * 35 + 1000);
});

function typeWriterEffect(id, text, speed) {
  const element = document.getElementById(id);
  let i = 0;
  element.textContent = "";

  const typing = setInterval(() => {
    element.textContent += text.charAt(i);
    i++;
    if (i >= text.length) {
      clearInterval(typing);
    }
  }, speed);
}
const warningScreen = document.getElementById("warningScreen");




startBtn.addEventListener("click", () => {
  missionIntro.style.display = "none";
  warningScreen.style.display = "flex"; // Show the warning modal
});
document.getElementById("confirm").addEventListener("click", () => {
  warningScreen.style.display = "none";
  document.body.classList.add("flicker");
setTimeout(() => {
  document.body.classList.remove("flicker");
}, 400);


  const countdown = document.getElementById("countdownOverlay");
  const countdownNum = document.getElementById("countdownNumber");

  let count = 3;
  countdown.style.display = "flex";
  countdownNum.textContent = count;

  const interval = setInterval(() => {
    count--;
    if (count > 0) {
      countdownNum.textContent = count;
    } else {
      clearInterval(interval);
      countdown.style.display = "none";

      const timeline = document.getElementById("roundsTimeline");
      timeline.style.opacity = "0";
      timeline.style.display = "block";
      setTimeout(() => {
        timeline.style.opacity = "1";
      }, 50);
    }
  }, 1000);
});





// If he says NOPE
document.getElementById("goBack").addEventListener("click", () => {
  warningScreen.style.display = "none";
  missionIntro.style.display = "block";
});
//sparkle logic
const sparkleSound = document.getElementById("sparkleSound");
setupUnlockedCardHandlers();




// ROUND DISPLAY PROCESS
const roundModal = document.getElementById("roundModal");
const closeModal = document.getElementById("closeModal");
const submitRoundCode = document.getElementById("submitRoundCode");
const errorMsg = document.getElementById("errorMsg");
const roundInput = document.getElementById("roundCodeInput");



// CLOSE MODAL
closeModal.addEventListener("click", () => {
  roundModal.style.display = "none";
});

// ESC KEY TO CLOSE
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") roundModal.style.display = "none";
});

// UNLOCK ROUND ON CORRECT CODE
submitRoundCode.addEventListener("click", () => {
  const enteredCode = roundInput.value.trim().toLowerCase();

  let round = null;

if (enteredCode === "longdistance") round = 1;
else if (enteredCode === "bettertogether") round = 2;
else if (enteredCode === "togetherforever") round = 3;
else if (enteredCode === "hearttoheart") round = 4;
else if (enteredCode === "iloveyou") round = 5;

if (round) {
  roundModal.style.display = "none";
  showTaskScreen(round);
} else {
  errorMsg.style.display = "block";
}

});
function showTaskScreen(roundNumber) {
  
const overlay = document.getElementById("screenOverlay");
overlay.classList.add("active");

setTimeout(() => {
  overlay.classList.remove("active");
}, 2000); // 2 seconds fade in then fade out

  // You can define a data object for rounds:
  const roundData = {
    1: {
      title: "💖 ROUND 1: Bring Me Closer",
      arrival: "🎉 WOHOO! You made it to Round 1!",
      task: "The first task is you need to go get your wifey obviously. How could you spend your birthday without her.",
      reward: "It's waiting for you… but not just yet",
      background: "./images/starry-night.avif",
      music: "./music/LoveLooksPretty.mp3"
    },
    2: {
  title: "💖 ROUND 2: A Table for Two",
  arrival: "🎉 A Romantic Twist Awaits...",
  task: "Head straight towards Megazone. ",
  reward: "Will be revealed soon ... 💘",
  background: "./images/dinner-date.jpg", // replace with your actual background image path
   music: "./music/" // replace with your actual audio path
},
    3: {
  title: "💖 ROUND 3: Marked Forever",
  arrival: "🎉 You made it till here, babes — ",
  task: "Your wifey has a sweet surprise for you. It’s time to mark this memory — Lets do a thumbprint together",
  reward: "A symbol of our forever bond.💘",
  background: "./images/starry-night.avif", // replace with your actual background image path
  music: "./music/A-Thousand-Years.mp3" // replace with your actual audio path
},
4: {
  title: "💖 Round 4: Hearts Unfiltered",
  arrival: "🎉Heyyy! That's the tougher one maybe but see you made it till here WOHOOOO!!",
  task: "Its your will it's your moment it's your heart to heart,Just say whatever you want,just ask whatever you want...It's your girl right there infront of you.💌",
  reward: "What’s better than a heart-to-heart, Sweetheart?But your wifey has a little thing for💘",
  background: "./images/dinner-date.jpg", // replace with your actual background image path
  music: "./music/music2.mp3" // replace with your actual audio path
},
5: {
  title: "💖Round 5: The Final Thriller",
  arrival: "🕵️ The game isn’t over yet, meri jaan...",
  task: "Stay there. Don't leave. Message your wifey. Once she replies ask her: Jee Meri Jaan?",     
  reward: "One last surprise awaits. 💘",
  background: "./images/dinner-date.jpg", // replace with your actual background image path
  // music: "./music/romantic-piano.mp3" // replace with your actual audio path
},
    // Add more rounds later...
  };

  const data = roundData[roundNumber];
  if (!data) return;

  // Hide modal and show task screen
  roundModal.style.display = "none";
  document.getElementById("taskTitle").textContent = data.title;
  document.getElementById("arrivalLine").textContent = data.arrival;
  document.getElementById("rewardText").textContent = data.reward;
  const taskEl = document.getElementById("taskText");
typeWriterEffect2(taskEl, data.task, 60); // 50ms per letter, adjust for speed


  // Change background and music
  document.getElementById("bgLayer").style.backgroundImage = `url('${data.background}')`;
// Stop intro music if playing
const introMusic = document.getElementById("bgMusic");
if (introMusic) {
  introMusic.pause();
  introMusic.currentTime = 0;
}

// Play round music
const roundMusic = document.getElementById("roundMusic");

// Stop any current round music
roundMusic.pause();
roundMusic.currentTime = 0;

// Update source
roundMusic.src = data.music;
roundMusic.load(); // reload new source
roundMusic.volume = 0.4;
roundMusic.play();



  document.getElementById("taskScreen").style.display = "flex";
}

function typeWriterEffect2(element, text, speed = 40) {
  element.textContent = "";
  let i = 0;
  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}
// BTN LOGIC
const backBtn = document.getElementById("backToRounds");
const nextBtn = document.getElementById("nextRound");

backBtn.addEventListener("click", () => {
  document.getElementById("taskScreen").style.display = "none";
});

nextBtn.addEventListener("click", () => {
  document.getElementById("taskScreen").style.display = "none";

  // ✅ Unlock the next round
  const nextRoundCard = document.querySelector(`.round-card[data-round="${currentOpenRound + 1}"]`);
  if (nextRoundCard) {
    nextRoundCard.classList.remove("locked");
    nextRoundCard.classList.add("unlocked");

    // 🎬 Animate visual unlock
    nextRoundCard.classList.add("animate-unlock");
    setTimeout(() => {
      nextRoundCard.classList.remove("animate-unlock");
    }, 1000);

    // ✨ Rebind click
    setupUnlockedCardHandlers();

    // Scroll to next round
    setTimeout(() => {
      nextRoundCard.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 400);
  }

  // Reset background and stop music
  document.getElementById("bgLayer").style.backgroundImage = "";
  // document.getElementById("bgMusic").pause();
});





});

