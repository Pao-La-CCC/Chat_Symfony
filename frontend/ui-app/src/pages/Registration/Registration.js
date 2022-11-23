import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import AuthForms from '../../components/Forms/AuthForms';
import './styles.css';
import axios from 'axios';


const Registration = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();


  const [successRegister, setSuccessRegister] = useState(false);

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

const handleSubmit = async () => {
  // store the states in the form data
  const registerFormData = new FormData();
  registerFormData.append("username", username)
  registerFormData.append("password", password)

  try {

     await axios({
        url: "http://localhost:8888/app/backend/src/register.php",
        method: "POST",
        headers: {
            'Content-Type' : 'application/json' ,
        },
        mode: "cors",
        data: registerFormData ,
    })
      .then(function (response) {
        if (response.status >= 200 && response.status <= 299) {
          const data = response.json();
          console.log(data);
          setSuccessRegister(true);
          navigate("/home");
  
  
        } 
      })
      .then((response)=>{
          console.log(response.data) ;
      })
      .catch(function (error) {
          console.log(error);
      });

  } catch(error) {
    console.log(error) ;
    setSuccessRegister(false) ;
  }
}

  return (
    <div className="registration-container">
      <section >
          <form className="color-register register-form" onSubmit={handleSubmit}>
            < AuthForms textFrom={"Inscription"} element={objRegistration} />
            <p className="text-center mt-2">
              Vous avez déjà un compte ? <Link to="/login">Se connecter</Link>
            </p>
          </form>
      </section>
     <h3> { successRegister ? "Sincription Succès de l'inscription" : "Echec de l'inscription "} </h3> 
    </div>
  );
}

export default Registration ;