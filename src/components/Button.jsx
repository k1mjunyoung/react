function Button({ children, text, color = "black"}) {
  // 이벤트 객체
  const onClickButton = (e) => {
    console.log(e); // SyntheicBaseEvent: 합성 이벤트 객체 -> 크로스 브라우저 이슈를 해결하이 위해 만들어짐
    console.log(text);
  }

  return (
    <button 
      onClick={onClickButton} // onClickButton()이 아닌 함수의 이름을 전달
      // onMouseEnter={onClickButton}
      style={{color: color}}>
      {text} - {color}
      {children}
    </button>
  )
};

export default Button;