import "./Parts.css";
function Parts() {
  return (
    <div className="parts">
      <h2 id="letgo" style={{ marginTop: "5px" }}>
        π κ°μ΄κ°μ!
      </h2>
      <p id="description">κ°λ¨ μ€λͺμλλ€.</p>
      {/* <label for="status">
        λͺ¨μ§ νν©
      </label> */}
      <select
        id="status"
        style={{
          width: "100px",
          backgroundColor: "#f5f5f5",
          color: "black",
          marginLeft: "10px",
        }}
      >
        <option value="" selected="selected" disabled="disabled">
          λͺ¨μ§νν©
        </option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <p id="concertName">κ³΅μ°λͺ</p>
      <p id="meetingDate">λͺ¨μ λ μ§(κ³΅μ° λ μ§)</p>
      <p id="dueDate">λͺ¨μ§ λ§κ° λ μ§ μκ°</p>
      <button id="together-btn">ν¨κ» κ°κΈ°</button>
    </div>
  );
}
export default Parts;
