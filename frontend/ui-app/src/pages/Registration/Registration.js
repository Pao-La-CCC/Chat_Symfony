import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import AuthForms from '../../components/Forms/AuthForms';
import './styles.css';
import axios from 'axios';


const Registration = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [resultData, setResultData] = useState([]);
  const [textError, setTextError] = useState("");
  const [successRegister, setSuccessRegister] = useState(null);
  const navigate = useNavigate();


  let objRegistration = [
    {
      'name': username,
      'function':setUsername
    },
    {
      'name': password,
      'function':setPassword
    },
  ]

const handleSubmit = async (e) => {
  e.preventDefault();
  const registerFormData = new FormData();
  registerFormData.append("username", username)
  registerFormData.append("password", password)

     await axios({
        url: "http://localhost:8245/user/register",
        method: "POST",
        headers: {
            'Content-Type' : 'application/json' ,
        },
        mode: "cors",
        data: registerFormData ,
    })
      .then((response) => {
        if (response.status >= 200 && response.status <= 299) {
          const dataFromAPI = response.data;
          setResultData(dataFromAPI);
          setSuccessRegister(true);
          setTextError("");
          navigate("/home");
        } 
      })
      .catch(function (error) {
        setSuccessRegister(false) ;
        setTextError("Echec de l'inscription");
        setResultData([]);
      });
}

  return (
    <div className="registration-container">
      <section >
          <form className="color-register register-form" onSubmit={(event) => handleSubmit(event)}>
            < AuthForms textFrom={"Inscription"} element={objRegistration} />
            <p className="text-center mt-2">
              Vous avez déjà un compte ? <Link to="/login">Se connecter</Link>
            </p>
          </form>
      </section>
     <h3>{ successRegister ? "Sincription Succès de l'inscription" :  textError }</h3> 
    </div>
  );
}

export default Registration ;