import Review from "./Review";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./ReviewHome.css";

function Home() {
  const floorList = ["", "1", "2", "3"];
  const [value, setValue] = useState();
  const handleDrop = (e) => {
    setValue(e.target.value);
  };
  return (
    <div>
      <div class="concertHall">
        <h1>공연장</h1>
      </div>
      <div class="find-seat">
        <select onChange={handleDrop}>
          {floorList.map((item) => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </select>
        <label>층 </label>
        <select onChange={handleDrop}>
          {floorList.map((item) => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </select>
        <label>구역 </label>
        <button>검색</button>
      </div>
      <Review />
      <Review />
      <Link to="./register">
        <button id="reviewRegister">등록하기</button>
      </Link>
    </div>
  );
}
export default Home;
