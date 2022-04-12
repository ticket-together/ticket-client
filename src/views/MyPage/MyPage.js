import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function MyPage() {
  const [value, setValue] = useState(new Date());
  return (
    <>
      <section>
        <h2>Nickname</h2>
        <p>자신을 소개하는 글</p>
      </section>
      <section>
        <p>공연 관람수</p>
        <p>후기 남긴 횟수</p>
      </section>
      <section>
        <button>포토 캘린더</button>
        <button>후기</button>
      </section>
      <Calendar
        className="flex justify-center items-center absoluteDiv"
        onChange={setValue}
        value={value}
      />
    </>
  );
}
export default MyPage;
