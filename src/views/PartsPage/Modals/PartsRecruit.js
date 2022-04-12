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
              <ul>
                <li>
                  <label for="date">모임 날짜</label>
                  <input type="date"></input>
                </li>
                <li>
                  <label for="nofp">모집 인원</label>
                  <select id="nofp">
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </li>
                <li>
                  <label for="endDate">마감 시간</label>
                  <input type="datetime-local"></input>
                </li>
              </ul>
            </div>
            <div className="input2">
              <ul>
                <li>
                  <input
                    type="text"
                    id="parts_title"
                    placeholder="모집 제목을 입력해주세요."
                    required
                    style={{
                      border: "1px solid #999",
                      borderRadius: "10px",
                      width: "420px",
                      height: "38px",
                      fontSize: "17px",
                      padding: "10px",
                    }}
                  />
                </li>
                <li>
                  <textarea
                    type="text"
                    id="context"
                    placeholder="모집 상세정보를 입력해주세요."
                    cols="47"
                    rows="6"
                    required
                    style={{
                      border: "1px solid #999",
                      borderRadius: "10px",
                      resize: "none",
                      fontSize: "17px",
                      padding: "10px",
                    }}
                  />
                </li>
              </ul>
            </div>
            <button id="parts_register">팟 등록</button>
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
