import Review from "./Review";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./ReviewHome.css";
import Header from "../Header/Header";

function Home() {
  const floorList = ["", "1", "2", "3"];
  const [value, setValue] = useState();
  const handleDrop = (e) => {
    setValue(e.target.value);
  };
  return (
    <div>
      <Header />
      <div class="concertHall">
        <p>공연장</p>
      </div>
      <div class="find-seat">
        <ul>
          <li>
            <select onChange={handleDrop} style={{ width: "50px" }}>
              {floorList.map((item) => (
                <option value={item} key={item}>
                  {item}
                </option>
              ))}
            </select>
            <label>층 </label>
          </li>
          <li>
            <select onChange={handleDrop} style={{ width: "50px" }}>
              {floorList.map((item) => (
                <option value={item} key={item}>
                  {item}
                </option>
              ))}
            </select>
            <label>구역 </label>
          </li>
          <li>
            <select onChange={handleDrop} style={{ width: "50px" }}>
              {floorList.map((item) => (
                <option value={item} key={item}>
                  {item}
                </option>
              ))}
            </select>
            <label>열 </label>
          </li>
          <li>
            <select onChange={handleDrop} style={{ width: "50px" }}>
              {floorList.map((item) => (
                <option value={item} key={item}>
                  {item}
                </option>
              ))}
            </select>
            <label>번 </label>
          </li>
          <li>
            <button>검색</button>
          </li>
        </ul>
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
