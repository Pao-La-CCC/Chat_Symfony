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



  const loginUser = async () => {

    const formData = new FormData() ;
    formData.append('usersName',username)
    formData.append('password',password)

    try {
        await axios.post("http://localhost:2345/login", {
          method: "POST",
          mode: "cors",
          credentials: "include",
          headers: {
            "Authorization" : `Bearer ${localStorage.getItem("TokensJWT")}`
        },
          data: formData,

        })
        .then(function (response) {
          if (response.status >= 200 && response.status <= 299) {
            setErrors("");
            setsuccessLogin(true) ;
            setResult(response.data);
            // On met dans un tableau les informations sur le token qui proviennent du server
            console.log(result.JWT_From_Server) ;
            // Pour mettre mon Token dans mon local storage.
            localStorage.setItem('TokensJWT', JSON.stringify(result.JWT_From_Server));
            navigate("/home");
          }
        })
    .catch(function (error) {
      setsuccessLogin(false) ;

    });
 
    } catch (err) {
      setErrors("La requête n'a pas fonctionné");
      console.warn(err);
    }
  };


  const handleSubmit = () => {
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
        <form className="color-login register-form " onSubmit={handleSubmit}>
          < AuthForms textFrom={"Connexion"} element={objLogin}/>
          <p className="text-center mt-2">
            Vous n'avez pas de compte ? <Link to="/register">Inscription</Link>
          </p>
        </form>
    </section>
        <h3> { successLogin ? "Sincription Succès de la Connexion" : "Echec de la Connexion"} </h3> 
        <br></br>
        <h4>{errors}</h4> 
  </div>
  )
}

export default Login ;