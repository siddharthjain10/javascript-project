import "./App.css";
import FlipGame from "./pages/FlipGame";
import TicTacToe from "./pages/TicTacToe";
export default function App() {
  return (
    <div className="App container">
      <div className="FlipGame">
        <FlipGame />
      </div>
      <div className="TicTacToe">
        <TicTacToe />
      </div>
    </div>
  );
}
