const Button = ({ text, color}) => {
  return (
    <button
      style={{
        backgroundColor: color,
        fontSize:"10px",
        color: "white",
        padding: "10px 20px",
        border: "none",
        borderRadius: "5px",
        size:"16px"
      }}
    >
      {text}
    </button>
  );
};

export default Button;