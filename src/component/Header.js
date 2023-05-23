import { useState } from "react";

const Header = () => {
  let [cnt, setCnt] = useState(0);
  // h3와 h1의 용도가 잘못되어 있지 않은가?
  // 제목은 왜 오늘의 달력인가?
  return (
    <div className="Header">
      <h3>오늘의 📅</h3>
      <h1>{new Date().toDateString()}</h1>

      <hr></hr>
      <button
        onClick={() => {
          setCnt(++cnt);
        }}
      >
        plus
      </button>
    </div>
  );
};
export default Header;
