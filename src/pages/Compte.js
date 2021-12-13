import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Compte extends Component {
  render() {
    return (
      <div>

        <h1 style={{textAlign:"center"}}>Compte</h1>
        
    <div style={{margin:"5%"}}>
      <div className="row align-items-md-stretch">
      <div className="col-md-6">
        <div className="h-100 p-5 bg-light border rounded-3">
          <h2>Inscription</h2>
          <Link to="/compte/inscription">
          <button className="btn btn-outline-secondary" type="button">S'inscrire</button>
          </Link>
        </div>
      </div>
      <div className="col-md-6">
        <div className="h-100 p-5 bg-light border rounded-3">
          <h2>Connexion</h2>
          <Link to="/compte/connexion">
          <button className="btn btn-outline-secondary" type="button">Se connecter</button>
          </Link>
        </div>
      </div>
      <div>
      <br   />
      <br   />
      </div>
    </div>
    <div className="col-md-6" width="100%">
        <div className="h-100 p-5 bg-light border rounded-3" >
          <h2>Compte Pro</h2>
        <a href=" http://localhost:3001/">
          <button className="btn btn-outline-secondary" type="button" >Compte Pro</button>
          </a>
        
            </div>
          </div>
    </div>
    
    </div>
    );
  }
}

export default Compte;