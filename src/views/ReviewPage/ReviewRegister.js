import { useState } from "react";
import styles from "./ReviewRegister.css";

function ReviewRegister() {
  const floorList = ["", "1", "2", "3"];
  const [value, setValue] = useState();
  // const [detail, setDetail] = useState("");
  const handleDrop = (e) => {
    setValue(e.target.value);
  };
  const onChangeInput = (e) => {
    setValue(e.target.value);
  };
  return (
    <div>
      <div class={styles.find}>
        <a>극장</a>
        <select onChange={handleDrop}>
          {floorList.map((item) => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </select>
        <br />

        <a>좌석</a>
        <select onChange={handleDrop}>
          {floorList.map((item) => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </select>
        <label>층</label>
        <select onChange={handleDrop}>
          {floorList.map((item) => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </select>
        <label>구역</label>
        <br />

        <a>별점</a>
        <br />
        <a>상세후기</a>
        <input
          required
          maxLength="200"
          type="text"
          onChange={onChangeInput}
          placeholder="상세 후기를 남겨주세요."
        />
        <br />
        <button>업로드</button>
      </div>
    </div>
  );
}
export default ReviewRegister;
