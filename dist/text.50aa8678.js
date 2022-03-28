const string = `
.water * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.water *::before,
.water *::after {
  box-sizing: border-box;
}
body {
  overflow: hidden;
}
.water {
  background: #1d9fd1;

  position: relative;
  min-height: 100vh;
  z-index: 0;
}
.duck {
  transform: translateY();
}
.middle {
  position: absolute;
  border: 1px solid black;
  width: 1px;
  height: 300px;
  top: 50;
  left: 50%;
  margin-top: 100px;
  z-index: 20;
}

.duck .body {
  position: absolute;
  width: 414px;
  height: 257px;
  left: 50%;
  margin-left: -206px;
  margin-top: 286px;
  z-index: 5;
  background: #feef9e;

  border-radius: 100% 100% 90% 90%;
}
.duck .body-shadow {
  position: absolute;
  width: 385px;
  height: 228px;
  left: 50%;
  margin-left: -191px;
  margin-top: 14px;
  z-index: 6;
  background: #fce481;

  border-radius: 100% 100% 90% 90%;
}
.duck .body-shadow::after {
  content: "";
  display: block;
  position: absolute;
  width: 371px;
  height: 214px;
  left: 50%;
  margin-left: -213px;
  margin-top: -22px;
  z-index: 6;
  background: #feef9e;

  border-radius: 100% 100% 90% 90%;
}
.duck .head {
  position: absolute;
  width: 242px;
  height: 214px;
  left: 50%;
  margin-left: -121px;
  margin-top: 129px;
  z-index: 9;
  background: #feef9e;

  border-top-left-radius: 150% 200%;
  border-top-right-radius: 150% 210%;
  border-bottom-right-radius: 100%;
  border-bottom-left-radius: 100% 100%;
}
.duck .head .face-shadow {
  position: absolute;
  width: 214px;
  height: 185px;
  left: 50%;
  margin-left: -103px;
  margin-top: 28px;
  z-index: 10;
  background: #fce481;

  border-top-left-radius: 150% 200%;
  border-top-right-radius: 150% 210%;
  border-bottom-right-radius: 100%;
  border-bottom-left-radius: 100% 100%;
}
.duck .head .face-shadow::before {
  content: "";
  display: block;
  position: absolute;
  width: 214px;
  height: 185px;
  left: 50%;
  margin-left: -125px;
  margin-top: -14px;
  z-index: 11;
  background: #feef9e;

  border-top-left-radius: 150% 200%;
  border-top-right-radius: 150% 210%;
  border-bottom-right-radius: 100%;
  border-bottom-left-radius: 100% 100%;
}
.duck .head .hair1 {
  position: absolute;
  width: 95px;
  height: 95px;
  left: 50%;
  border-radius: 100% 0;
  z-index: 9;
  transform: rotate(-25deg);
  margin-left: -22px;
  margin-top: -42px;
  background: #feef9e;
}
.duck .head .hair2 {
  position: absolute;
  width: 95px;
  height: 95px;
  left: 50%;
  border-radius: 100% 0;
  z-index: 8;
  transform: rotate(25deg);
  margin-left: 14px;
  margin-top: -35px;
  background: #fce481;
}
.duck .head .eye1 {
  position: absolute;
  left: 50%;
  width: 18px;
  height: 18px;
  margin-top: 114px;
  margin-left: 35px;
  z-index: 12;
  background: #005a79;
  border-radius: 50%;
}
.duck .head .eye2 {
  position: absolute;
  left: 50%;
  width: 18px;
  height: 18px;
  margin-top: 114px;
  margin-left: -56px;
  z-index: 12;
  background: #005a79;
  border-radius: 50%;
}
.duck .head .mouth {
  position: absolute;
  top: 65%;
  height: 20%;
  left: 20%;
  right: 20%;
  z-index: 13;
  background: #fdb813;
  border-top-left-radius: 150% 200%;
  border-top-right-radius: 150% 200%;
  border-bottom-right-radius: 50% 100%;
  border-bottom-left-radius: 50% 100%;
}
.duck .head .mouth::before {
  content: "";
  display: block;
  position: absolute;
  bottom: 0;
  left: 20%;
  width: 60%;
  height: 30%;
  background: #f8951d;
  border-top-left-radius: 100% 200%;
  border-top-right-radius: 100% 200%;
  z-index: 15;
}
.duck .wing1 {
  position: absolute;
  width: 143px;
  height: 143px;
  left: 50%;
  margin-top: 290px;
  margin-left: -227px;
  z-index: 6;
  background: #feef9e;
  border-radius: 100% 0 0 10%;
}
.duck .wing2 {
  position: absolute;
  width: 143px;
  height: 143px;
  left: 50%;
  margin-top: 290px;
  margin-left: 85px;
  z-index: 6;
  background: #feef9e;
  border-radius: 0 100% 10% 0;
}
.duck .foot1 {
  position: absolute;
  width: 113px;
  height: 113px;
  background: #fdb813;
  left: 50%;
  margin-top: 490px;
  margin-left: 71px;
  z-index: -1;
  border-radius: 100% 100% 20% 20%;
  transform: rotate(15deg);
}
.duck .foot2 {
  position: absolute;
  width: 113px;
  height: 113px;
  background: #fdb813;
  left: 50%;
  margin-top: 490px;
  margin-left: -142px;
  z-index: -1;
  border-radius: 100% 100% 20% 20%;
  transform: rotate(-15deg);
}
.wave {
  display: block;
  position: absolute;
  width: 535px;
  height: 214px;
  left: 50%;
  z-index: 15;
  margin-top: 470px;
  margin-left: -277px;
  background: #1d9fd1;
  opacity: 0.5;
}
.wave::after {
  content: "";
  display: block;
  position: absolute;
  border: 1px solid red;
  width: 556px;
  height: 292px;
  z-index: 15;
  margin-top: -293px;
  margin-left: 0px;
  border-color: #1d9fd1;
  border-radius: 100%;
  border-style: solid;
  border-width: 0 0 12vh 0;
  box-sizing: content-box;
}
@keyframes bobbing {
  20% {
    transform: translateY(-5%) rotate(3deg);
  }
  50% {
    transform: translateY(0) rotate(0);
  }
  80% {
    transform: translateY(-5%) rotate(-3deg);
  }
}
.all-body {
  animation: infinite bobbing 4000ms linear;
  z-index: 4;
}
.wave {
  animation: infinite bobbing 6000ms ease;
}
@keyframes blink {
  0%,
  45%,
  55%,
  100% {
    transform: scaleY(1);
  }
  50% {
    transform: scaleY(0);
  }
}
.eye1 {
  animation: infinite blink 6000ms ease;
}
.eye2 {
  animation: infinite blink 6000ms ease;
}
@keyframes paddle-left {
  25% {
    transform: rotateX(-45deg) rotateZ(0deg);
  }
  75% {
    transform: rotateX(30deg) rotateZ(-20deg);
  }
}
.foot1 {
  animation: infinite paddle-left 4000ms linear;
  animation-delay: 1000ms;
  transform-origin: top right;
}
@keyframes paddle-right {
  25% {
    transform: rotateX(-45deg) rotateZ(0deg);
  }
  75% {
    transform: rotateX(30deg) rotateZ(20deg);
  }
}
.foot2 {
  animation: infinite paddle-right 4000ms linear;
  transform-origin: top left;
}
@keyframes wave-head {
  20% {
    transform: translateY(-5%) rotate(3deg);
  }
  50% {
    transform: translateY(0) rotate(0);
  }
  80% {
    transform: translateY(-5%) rotate(-3deg);
  }
}
.head {
  animation: infinite wave-head 4000ms linear;
}


`;
const player = {
    id: undefined,
    time: 100,
    ui: {
        demo: document.querySelector("#demo"),
        demo2: document.querySelector("#demo2")
    },
    events: {
        "#btnPause": "pause",
        "#btnPlay": "play",
        "#btnSlow": "slow",
        "#btnNormal": "normal",
        "#btnFast": "fast"
    },
    n: 1,
    init: ()=>{
        player.ui.demo.innerText = string.substr(0, player.n);
        player.ui.demo2.innerHTML = string.substr(0, player.n);
        player.bindEvents();
        player.play();
    },
    bindEvents: ()=>{
        for(let key in player.events)if (player.events.hasOwnProperty(key)) {
            const value = player.events[key]; // pause / play / slow
            document.querySelector(key).onclick = player[value];
        }
    },
    run: ()=>{
        player.n += 1;
        if (player.n > string.length) {
            window.clearInterval(player.id);
            return;
        }
        player.ui.demo.innerText = string.substr(0, player.n);
        player.ui.demo2.innerHTML = string.substr(0, player.n);
        player.ui.demo.scrollTop = player.ui.demo.scrollHeight;
    },
    play: ()=>{
        window.clearInterval(player.id);
        player.id = setInterval(player.run, player.time);
    },
    pause: ()=>{
        window.clearInterval(player.id);
    },
    slow: ()=>{
        player.pause();
        player.time = 300;
        player.play();
    },
    normal: ()=>{
        player.pause();
        player.time = 100;
        player.play();
    },
    fast: ()=>{
        player.pause();
        player.time = 0;
        player.play();
    }
};
player.init();

//# sourceMappingURL=text.50aa8678.js.map
