import "./styles.css";
import { useState } from "react";

export default function App() {
  const [text, setText] = useState();
  const [inputText, setInputText] = useState();
  const [selectedValue, setSelectedValue] = useState("HTML");

  const values = [
    { id: 1, item: "HTML" },
    { id: 2, item: "CSS" },
    { id: 3, item: "JavaScript" }
  ];

  const onClickLoveInput = () => {
    setText(inputText);
  };

  const onChangeInputText = (e) => {
    setInputText(e.target.value);
  };

  const onChangeSelect = (e) => {
    setSelectedValue(e.target.value);
  };

  return (
    <div className="App">
      <h1>I Love {text}!!</h1>
      <p>I love に続く言葉を入力して下さい</p>
      <input type="text" onChange={onChangeInputText} />
      <button onClick={onClickLoveInput}>入力</button>
      <p>現在選択されている値：{selectedValue}</p>
      <select value={selectedValue} onChange={onChangeSelect}>
        {values.map((val) => (
          <option key={val.id} value={val.item}>
            {val.item}
          </option>
        ))}
      </select>
    </div>
  );
}
