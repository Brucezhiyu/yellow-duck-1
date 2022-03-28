const string='\n.water * {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n.water *::before,\n.water *::after {\n  box-sizing: border-box;\n}\nbody {\n  overflow: hidden;\n}\n.water {\n  background: #1d9fd1;\n\n  position: relative;\n  min-height: 100vh;\n  z-index: 0;\n}\n.duck {\n  transform:scale(0.5);\n}\n\n\n.duck .body {\n  position: absolute;\n  width: 414px;\n  height: 257px;\n  left: 50%;\n  margin-left: -206px;\n  margin-top: 286px;\n  z-index: 5;\n  background: #feef9e;\n\n  border-radius: 100% 100% 90% 90%;\n}\n.duck .body-shadow {\n  position: absolute;\n  width: 385px;\n  height: 228px;\n  left: 50%;\n  margin-left: -191px;\n  margin-top: 14px;\n  z-index: 6;\n  background: #fce481;\n\n  border-radius: 100% 100% 90% 90%;\n}\n.duck .body-shadow::after {\n  content: "";\n  display: block;\n  position: absolute;\n  width: 371px;\n  height: 214px;\n  left: 50%;\n  margin-left: -213px;\n  margin-top: -22px;\n  z-index: 6;\n  background: #feef9e;\n\n  border-radius: 100% 100% 90% 90%;\n}\n.duck .head {\n  position: absolute;\n  width: 242px;\n  height: 214px;\n  left: 50%;\n  margin-left: -121px;\n  margin-top: 160px;\n  z-index: 9;\n  background: #feef9e;\n\n  border-top-left-radius: 150% 200%;\n  border-top-right-radius: 150% 210%;\n  border-bottom-right-radius: 100%;\n  border-bottom-left-radius: 100% 100%;\n}\n.duck .head .face-shadow {\n  position: absolute;\n  width: 214px;\n  height: 185px;\n  left: 50%;\n  margin-left: -103px;\n  margin-top: 28px;\n  z-index: 10;\n  background: #fce481;\n\n  border-top-left-radius: 150% 200%;\n  border-top-right-radius: 150% 210%;\n  border-bottom-right-radius: 100%;\n  border-bottom-left-radius: 100% 100%;\n}\n.duck .head .face-shadow::before {\n  content: "";\n  display: block;\n  position: absolute;\n  width: 214px;\n  height: 185px;\n  left: 50%;\n  margin-left: -125px;\n  margin-top: -14px;\n  z-index: 11;\n  background: #feef9e;\n\n  border-top-left-radius: 150% 200%;\n  border-top-right-radius: 150% 210%;\n  border-bottom-right-radius: 100%;\n  border-bottom-left-radius: 100% 100%;\n}\n.duck .head .hair1 {\n  position: absolute;\n  width: 95px;\n  height: 95px;\n  left: 50%;\n  border-radius: 100% 0;\n  z-index: 9;\n  transform: rotate(-25deg);\n  margin-left: -22px;\n  margin-top: -42px;\n  background: #feef9e;\n}\n.duck .head .hair2 {\n  position: absolute;\n  width: 95px;\n  height: 95px;\n  left: 50%;\n  border-radius: 100% 0;\n  z-index: 8;\n  transform: rotate(25deg);\n  margin-left: 14px;\n  margin-top: -35px;\n  background: #fce481;\n}\n.duck .head .eye1 {\n  position: absolute;\n  left: 50%;\n  width: 18px;\n  height: 18px;\n  margin-top: 114px;\n  margin-left: 35px;\n  z-index: 12;\n  background: #005a79;\n  border-radius: 50%;\n  animation: infinite blink 6000ms ease;\n}\n.duck .head .eye2 {\n  position: absolute;\n  left: 50%;\n  width: 18px;\n  height: 18px;\n  margin-top: 114px;\n  margin-left: -56px;\n  z-index: 12;\n  background: #005a79;\n  border-radius: 50%;\n  animation: infinite blink 6000ms ease;\n}\n.duck .head .mouth {\n  position: absolute;\n  top: 65%;\n  height: 20%;\n  left: 20%;\n  right: 20%;\n  z-index: 13;\n  background: #fdb813;\n  border-top-left-radius: 150% 200%;\n  border-top-right-radius: 150% 200%;\n  border-bottom-right-radius: 50% 100%;\n  border-bottom-left-radius: 50% 100%;\n}\n.duck .head .mouth::before {\n  content: "";\n  display: block;\n  position: absolute;\n  bottom: 0;\n  left: 20%;\n  width: 60%;\n  height: 30%;\n  background: #f8951d;\n  border-top-left-radius: 100% 200%;\n  border-top-right-radius: 100% 200%;\n  z-index: 15;\n}\n.duck .wing1 {\n  position: absolute;\n  width: 143px;\n  height: 143px;\n  left: 50%;\n  margin-top: 290px;\n  margin-left: -227px;\n  z-index: 6;\n  background: #feef9e;\n  border-radius: 100% 0 0 10%;\n}\n.duck .wing2 {\n  position: absolute;\n  width: 143px;\n  height: 143px;\n  left: 50%;\n  margin-top: 290px;\n  margin-left: 85px;\n  z-index: 6;\n  background: #feef9e;\n  border-radius: 0 100% 10% 0;\n}\n.duck .foot1 {\n  position: absolute;\n  width: 113px;\n  height: 113px;\n  background: #fdb813;\n  left: 50%;\n  margin-top: 490px;\n  margin-left: 71px;\n  z-index: -1;\n  border-radius: 100% 100% 20% 20%;\n  transform: rotate(15deg);\n}\n.duck .foot2 {\n  position: absolute;\n  width: 113px;\n  height: 113px;\n  background: #fdb813;\n  left: 50%;\n  margin-top: 490px;\n  margin-left: -142px;\n  z-index: -1;\n  border-radius: 100% 100% 20% 20%;\n  transform: rotate(-15deg);\n}\n.wave {\n  display: block;\n  position: absolute;\n  width: 535px;\n  height: 214px;\n  left: 50%;\n  z-index: 15;\n  margin-top: 470px;\n  margin-left: -277px;\n  background: #1d9fd1;\n  opacity: 0.5;\n}\n.wave::after {\n  content: "";\n  display: block;\n  position: absolute;\n  border: 1px solid red;\n  width: 556px;\n  height: 292px;\n  z-index: 15;\n  margin-top: -293px;\n  margin-left: 0px;\n  border-color: #1d9fd1;\n  border-radius: 100%;\n  border-style: solid;\n  border-width: 0 0 12vh 0;\n  box-sizing: content-box;\n}\n@keyframes bobbing {\n  20% {\n    transform: translateY(-5%) rotate(3deg);\n  }\n  50% {\n    transform: translateY(0) rotate(0);\n  }\n  80% {\n    transform: translateY(-5%) rotate(-3deg);\n  }\n}\n.all-body {\n  animation: infinite bobbing 4000ms linear;\n  z-index: 4;\n}\n.wave {\n  animation: infinite bobbing 6000ms ease;\n}\n@keyframes blink {\n  0%,\n  45%,\n  55%,\n  100% {\n    transform: scaleY(1);\n  }\n  50% {\n    transform: scaleY(0);\n  }\n}\n\n@keyframes paddle-left {\n  25% {\n    transform: rotateX(-45deg) rotateZ(0deg);\n  }\n  75% {\n    transform: rotateX(30deg) rotateZ(-20deg);\n  }\n}\n.foot1 {\n  animation: infinite paddle-left 4000ms linear;\n  transform-origin: top right;\n}\n@keyframes paddle-right {\n  25% {\n    transform: rotateX(-45deg) rotateZ(0deg);\n  }\n  75% {\n    transform: rotateX(30deg) rotateZ(20deg);\n  }\n}\n.foot2 {\n  animation: infinite paddle-right 4000ms linear;\n  animation-delay: 1000ms;\n  transform-origin: top left;\n}\n@keyframes wave-head {\n  20% {\n    transform: translateY(-5%) rotate(3deg);\n  }\n  50% {\n    transform: translateY(0) rotate(0);\n  }\n  80% {\n    transform: translateY(-5%) rotate(-3deg);\n  }\n}\n.head {\n  animation: infinite wave-head 4000ms linear;\n}\n\n\n',player={id:void 0,time:100,ui:{demo:document.querySelector("#demo"),demo2:document.querySelector("#demo2")},events:{"#btnPause":"pause","#btnPlay":"play","#btnSlow":"slow","#btnNormal":"normal","#btnFast":"fast"},n:1,init:()=>{player.ui.demo.innerText=string.substr(0,player.n),player.ui.demo2.innerHTML=string.substr(0,player.n),player.bindEvents(),player.play()},bindEvents:()=>{for(let n in player.events)if(player.events.hasOwnProperty(n)){const e=player.events[n];document.querySelector(n).onclick=player[e]}},run:()=>{player.n+=1,player.n>string.length?window.clearInterval(player.id):(player.ui.demo.innerText=string.substr(0,player.n),player.ui.demo2.innerHTML=string.substr(0,player.n),player.ui.demo.scrollTop=player.ui.demo.scrollHeight)},play:()=>{window.clearInterval(player.id),player.id=setInterval(player.run,player.time)},pause:()=>{window.clearInterval(player.id)},slow:()=>{player.pause(),player.time=300,player.play()},normal:()=>{player.pause(),player.time=100,player.play()},fast:()=>{player.pause(),player.time=0,player.play()}};player.init();
//# sourceMappingURL=text.fe62aa06.js.map
