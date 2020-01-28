class Timer {
  constructor(durationInput, startButton, pausButton) {
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pausButton = pauseButton;

    this.startButton.addEventListener("click", this.start);
  }

  start() {
    console.log("start timer");
  }
}

const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");
const timer = new Timer(durationInput, startButton, pauseButton);
