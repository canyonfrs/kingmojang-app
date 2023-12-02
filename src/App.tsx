import * as Styled from "./App.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Textarea } from "./components/Textarea";

function App() {
  return (
    <div className={Styled.container}>
      <Header />
      <Textarea />
      <Footer />
    </div>
  );
}

export default App;
