import React from 'react';
import './style.css' ;

const AuthForms = ({textFrom , element }) => {



  return (
    <>
            <h3 className="fw-normal mb-3 pb-3" >{textFrom}</h3>
            <div className="form-outline mb-4">
              <input type="text" id="form-username" name="username" className="form-control" placeholder="Nom d'utilisateur" required  value={element[0].name}  onChange={(e) => element[0].function(e.target.value)}/>
            </div>

            <div className="form-outline mb-4">
              <input type="password" id="form-password" name="password" className="form-control" placeholder='Mot de passe' required value={element[1].name}  onChange={(e) => element[1].function(e.target.value)} />
            </div>
            <div className="pt-1 mb-4">
                <div className="submit-container">
                  <input type="submit" className="form-control" />
                </div>
            </div>
    </>
  )
}

export default AuthForms ;