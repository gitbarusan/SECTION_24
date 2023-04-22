import "./styles.css";
import { useState } from "react";

export default function App() {
  const [text, setText] = useState();
  const [inputText, setInputText] = useState();
  const [selectedValue, setSelectedValue] = useState("HTML");
  const [checkedValue, setCheckedValue] = useState("赤");
  const [checkedPcOption, setCheckedPcOption] = useState([]);

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

  const onChangeRadioColor = (e) => {
    setCheckedValue(e.target.value);
  };

  const onChangecheckedPcOption = (e) => {
    // includes:配列内にある特定の要素が存在するかどうかをチェックする
    // 配列.includes(要素)
    if (checkedPcOption.includes(e.target.value)) {
      //filter:配列から指定された条件に該当する要素を持つ新しい配列を作成します。
      setCheckedPcOption(
        //filter:配列.filter((配列の要素) => 配列の要素に対する条件分岐)
        checkedPcOption.filter((checkedValue) => {
          return checkedValue !== e.target.value;
        })
      );
    } else {
      //スプレット構文復習
      /**
       * 複数配列の要素をマージした配列を作成することができます。
       * const arr1 = [1, 2, 3];
        const arr2 = [4, 5, 6];
        const merged = [...arr1, ...arr2];
        console.log(merged);  // [1, 2, 3, 4, 5, 6]
       */
      setCheckedPcOption([...checkedPcOption, e.target.value]);
    }
  };
  return (
    <div className="App">
      <h1>I Love {text}!!</h1>
      <p>I love に続く言葉を入力して下さい</p>
      <input type="text" onChange={onChangeInputText} />
      <button onClick={onClickLoveInput}>入力</button>
      {/* セレクトボックス　オプション値をmapで設定 */}
      <p>現在選択されている値：{selectedValue}</p>
      <select value={selectedValue} onChange={onChangeSelect}>
        {values.map((val) => (
          <option key={val.id} value={val.item}>
            {val.item}
          </option>
        ))}
      </select>
      {/* ラジオボックス */}
      <p>現在選択されている値：{checkedValue}</p>
      <label>
        <input
          type="radio"
          value="赤"
          onChange={onChangeRadioColor}
          checked={checkedValue === "赤"}
        />
        赤
      </label>
      <label>
        <input
          type="radio"
          value="青"
          onChange={onChangeRadioColor}
          checked={checkedValue === "青"}
        />
        青
      </label>
      <label>
        <input
          type="radio"
          value="黄"
          onChange={onChangeRadioColor}
          checked={checkedValue === "黄"}
        />
        黄
      </label>
      {/* チェックボックス */}
      {/* join:配列の要素を繋げて文字列に変換する */}
      <p>現在選択されている値：{checkedPcOption.join("、")}</p>
      <label>
        <input
          type="checkbox"
          value="マウス"
          onChange={onChangecheckedPcOption}
          checked={checkedPcOption.includes("マウス")}
        />
        マウス
      </label>
      <label>
        <input
          type="checkbox"
          value="モニター"
          onChange={onChangecheckedPcOption}
          checked={checkedPcOption.includes("モニター")}
        />
        モニター
      </label>
      <label>
        <input
          type="checkbox"
          value="キーボード"
          onChange={onChangecheckedPcOption}
          checked={checkedPcOption.includes("キーボード")}
        />
        キーボード
      </label>
    </div>
  );
}
