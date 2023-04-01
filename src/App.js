import "./styles.css";
import { useState } from "react";

export default function App() {
  const [text, setText] = useState();
  const [inputText, setInputText] = useState();

  const onClickLoveInput = () => {
    setText(inputText);
  };

  const onChangeInputText = (e) => {
    setInputText(e.target.value);
  };
  return (
    <div className="App">
      <h1>I Love {text}!!</h1>
      <p>I love に続く言葉を入力して下さい</p>
      <input type="text" onChange={onChangeInputText} />
      <button onClick={onClickLoveInput}>入力</button>
    </div>
  );
}
