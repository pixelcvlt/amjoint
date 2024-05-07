import { useRive } from "rive-react";

function App() {
  const { rive, RiveComponent } = useRive({
    src: "simple5.riv",
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