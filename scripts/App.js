import { useRive } from "rive-react";

function App() {
  const { rive, RiveComponent } = useRive({
    src: "https://github.com/pixelcvlt/amjoint/raw/master/riv/simple5.riv",
    animations: "State Machine 1",
    autoplay: true,
  })
  return (
  <div>
    <RiveComponent />
  </div>
  );
}

export default App;
