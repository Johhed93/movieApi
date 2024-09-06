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
        <div className="label-container">
        <label htmlFor="name">Førnavn:</label>
        <input
          type="text"
          name="name"
          id="name"
          ref={nameInput}
        />
        </div>
        <div className="label-container">
        <label htmlFor="lastname">Efternavn:</label>
        <input
          type="text"
          name="lastname"
          id="lastname"
          ref={lastNameInput}
        />
        </div>
        <div className="label-container">
        <label htmlFor="username">Brukernavn:</label>
        <input
          type="text"
          name="username"
          id="username"
          ref={usernameInput}
        />
        </div>
        <div className="label-container">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          id="password"
          ref={usernameInput}
        />
        </div>
        <button className="btn1" type="submit">
          Skicka
        </button>
      </form>
    </div>
  );
};
export default Register;
