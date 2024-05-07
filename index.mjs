import "./styles.css";
const rive = require("@rive-app/canvas");
const { throttle } = require("lodash");

// Bike
const bike = new rive.Rive({
  src: "https://raw.githubusercontent.com/pixelcvlt/amjoint/master/untitled.riv",
  canvas: document.getElementById("Ellipse"),
  artboard: "New Artboard",
  autoplay: true,
  stateMachines: "State Machine 1",
  onLoad: () => {
    bike.resizeDrawingSurfaceToCanvas();
    const scrollInputs = bike.stateMachineInputs("State Machine 1");
    const documentWrapper = document.documentElement;
    function moveBike() {
      const pos = documentWrapper.scrollTop;
      const calcHeight =
        documentWrapper.scrollHeight - documentWrapper.clientHeight;
      const scrollValue = Math.round((pos * 100) / calcHeight);
      scrollInputs[0].value = scrollValue;
    }
    window.document.addEventListener("scroll", throttle(moveBike, 10));
  },
});
