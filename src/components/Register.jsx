import { useState } from "react";

const Register = () => {

  const [input, setInput ] = useState({
    name: "",
    birth: "",
    country: "",
    bio:"",
  })

  // 통합 이벤트 핸들러
  const onChange = (e) => {
    console.log(e.target.name, e.target.value);
    setInput({
      ...input,
      [e.target.name]: e.target.value, // JavaScript에서 객체 리터럴의 키를 동적으로 지정할 때 []를 사용 
    });
  };

  return (
    <div>
      <div>
        <input name="name" value={input.name} onChange={onChange} placeholder={"이름"} />
      </div>

      <div>
        <input name="birth" value={input.birth} onChange={onChange} type="date" /> 
      </div>

      <div>
        <select name="country" value={input.country} onChange={onChange}>
          <option value="" />
          <option value="kr">한국</option>
          <option value="us">일본</option>
          <option value="jp">미국</option>
        </select>
      </div>

      <div>
        <textarea name="bio" value={input.bio} onChange={onChange}/>
      </div>
    </div>
  )
}

export default Register;