import "./PartsRecruit.css";
function PotRecruit(props) {
  const { open, close, header } = props;
  return (
    <div className={open ? "openModal modal" : "modal"}>
      {open ? (
        <section>
          <header>
            {header}
            <button className="close" onClick={close}>
              &times;
            </button>
          </header>
          <main>
            <div id="box"></div>
            <div className="input">
              <label for="date">모임 날짜</label>
              <input type="date"></input>
              <br />
              <label for="nofp">모집 인원</label>
              <select id="nofp">
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
              <br />
              <label for="endDate">마감 시간</label>
              <input type="datetime-local"></input>
            </div>
            <div>
              <input
                type="text"
                id="title"
                placeholder="모집 제목을 입력해주세요."
                size="39"
                required
              />
              <br />
              <textarea
                type="text"
                id="context"
                placeholder="모집 상세정보를 입력해주세요."
                cols="40"
                rows="4"
                required
                style={{ resize: "none" }}
              />
            </div>
            <br />
            <button id="register">팟 등록</button>
          </main>
          <footer>
            <button className="close" onClick={close}>
              close
            </button>
          </footer>
        </section>
      ) : null}
    </div>
  );
}
export default PotRecruit;
