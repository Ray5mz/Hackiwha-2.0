function GrayButton(props) {
    return (
      <button className="gray_button">
        <span>{props.text}</span> {/* Add span to match CSS */}
      </button>
    );
  }
  
  export default GrayButton;
