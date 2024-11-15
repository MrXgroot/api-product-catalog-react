import "./Button.css";
function Button(Props) {
  return (
    <button className={`button ${Props.btnStyle ? Props.btnStyle : "primary"}`}>
      {Props.children}
    </button>
  );
}

export default Button;
