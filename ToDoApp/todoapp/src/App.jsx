import { useState } from "react";
import Todo from "./Components/Todo";
import Header from "./Components/Header";
import InlineComponent from "./Components/InlineComponent";
import StylesheetComp from "./Components/StylesheetComp";
import OutlineComponent from "./Components/OutlineComponent";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Header />
      <Todo />
    </div>
  );
}

export default App;
