import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthForms from '../../components/Forms/AuthForms';
import './style.css';
import axios from 'axios';


const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [result, setResult] = useState([]);
  const [errors, setErrors] = useState(null);
  const [successLogin , setsuccessLogin ] = useState(null);
  const navigate = useNavigate();
  const  [textError, setTextError] = useState("") ;

  const loginUser = async () => {

    const userData = new FormData() ;
    userData.append('usersName',username);
    userData.append('password',password);
    
    
        await axios("http://localhost:8245/user/login", {
          method: "POST",
          mode: "cors",
          credentials: "include",
          headers: {
            "Authorization" : `Bearer ${localStorage.getItem("TokensJWT")}`
        },
          data: userData,

        })
        .then( (response) => {
          if (response.status >= 200 && response.status <= 299) {
            setErrors("");
            setsuccessLogin(true) ;
            setResult(response.data);
            // On met dans un tableau les informations sur le token qui proviennent du server
            console.log(response.data) ;
            // Pour mettre mon Token dans mon local storage.
            localStorage.setItem('TokensJWT', JSON.stringify(result.JWT_From_Server));
            setTextError("") ;
            navigate("/home");
          }
        })
    .catch( (error) => {
      setsuccessLogin(false) ;
      setTextError("Echec de la Connexion") ;

    });
  };


  const handleSubmit = (e) => {
    e.preventDefault()
    loginUser();
  };



  let objLogin = [
    {
      'name': username,
      'function':setUsername
    },
    {
      'name': password,
      'function':setPassword
    },
  ]


  return (
    <div className="registration-container">
    <section >
        <form className="color-login register-form " onSubmit={(event) => handleSubmit(event)}>
          < AuthForms textFrom={"Connexion"} element={objLogin}/>
          <p className="text-center mt-2">
            Vous n'avez pas de compte ? <Link to="/register">Inscription</Link>
          </p>
        </form>
    </section>
        <h3> { successLogin ? "Sincription Succès de la Connexion" : textError } </h3> 
        <br></br>
        <h4>{errors}</h4> 
  </div>
  )
}

export default Login ;