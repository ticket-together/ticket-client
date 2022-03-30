import styles from "./Parts.css";
function Parts() {
  return (
    <div className={styles.parts}>
      <h3>🙌같이가자!</h3>
      <p id="description">간단 설명입니다.</p>
      <label for="status" className="status">
        모집 현황
      </label>
      <select id="status" className="status">
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <p id="concertName">공연명</p>
      <p id="meetingDate">모임 날짜(공연 날짜)</p>
      <p id="dueDate">모집 마감 날짜 시간</p>
      <button id="together-btn">함께 가기</button>
    </div>
  );
}
export default Parts;
