import Header from "../Header/Header";
import { useState } from "react";
import "./ReviewRegister.css";

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
      <Header />
      <div class="register">
        <ul>
          <li>
            <a id="극장">극장</a>
            <select
              id="극장"
              onChange={handleDrop}
              style={{ width: "600px", height: "40px" }}
            >
              {floorList.map((item) => (
                <option value={item} key={item}>
                  {item}
                </option>
              ))}
            </select>
          </li>

          <li>
            <a id="좌석">좌석</a>
            <select id="층" onChange={handleDrop} style={{ width: "100px" }}>
              {floorList.map((item) => (
                <option value={item} key={item}>
                  {item}
                </option>
              ))}
            </select>
            <label for="층">층</label>

            <select id="구역" onChange={handleDrop} style={{ width: "100px" }}>
              {floorList.map((item) => (
                <option value={item} key={item}>
                  {item}
                </option>
              ))}
            </select>
            <label for="구역">구역</label>

            <select id="열" onChange={handleDrop} style={{ width: "100px" }}>
              {floorList.map((item) => (
                <option value={item} key={item}>
                  {item}
                </option>
              ))}
            </select>
            <label for="열">열</label>

            <select id="번" onChange={handleDrop} style={{ width: "100px" }}>
              {floorList.map((item) => (
                <option value={item} key={item}>
                  {item}
                </option>
              ))}
            </select>
            <label for="번">번</label>
          </li>

          <li>
            <a id="별점">별점</a>
          </li>
          <li>
            <a id="상세후기">상세후기</a>
            <textarea
              id="상세후기"
              required
              cols="57"
              rows="6"
              type="text"
              onChange={onChangeInput}
              placeholder="상세 후기를 남겨주세요."
              style={{ resize: "none", padding: "7px" }}
            />
          </li>
          <button type="submit">업로드</button>
        </ul>
      </div>
    </div>
  );
}
export default ReviewRegister;
