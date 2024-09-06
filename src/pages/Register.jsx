import { useState, useRef } from "react";
import "./Register.css";
const Register = () => {
  const nameInput = useRef();
  const lastNameInput = useRef("");
  const usernameInput = useRef("");
  const passwordInput = useRef("");
  const [userRegister, setUserRegister] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!nameInput.current) return

    console.log(nameInput.current.value);
    nameInput.current.value=""
  };
  return (
    <div className="content-container">
      <div className="bg-image1"></div>
      <div className="bg-image2"></div>
      <div className="bg-image3"></div>
      <h1>Registrera dig</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Førnavn:</label>
        <input
          type="text"
          name="name"
          id="name"
          ref={nameInput}
        />
        <button className="btn1" type="submit">
          Skicka
        </button>
      </form>
    </div>
  );
};
export default Register;
