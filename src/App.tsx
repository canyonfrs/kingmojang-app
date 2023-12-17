import { useState } from "react";

import * as Styled from "./App.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import type { Coordinate } from "./hooks/useTextarea";
import { Textarea } from "./ui/Textarea";

function App() {
  const [position, setPosition] = useState<Coordinate>({ column: 0, row: 0 });
  return (
    <div className={Styled.container}>
      <Header />
      <Textarea setPosition={setPosition} />
      <button>클릭</button>
      <Footer position={position} />
    </div>
  );
}

export default App;
