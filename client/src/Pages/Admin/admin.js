import React, { useState } from "react";

function Admin() {

  let x = 0
  let pass = '42@@345'

  const [verificarSenha, setVerificarSenha] = useState('')
  
  function validar(){
    if(verificarSenha === pass){
      x = 1
    }else{
      x = 0
    }
  }
    return (
      <div className="admin">
          <input placeholder="senha" type='password' onChange={(e) => setVerificarSenha(e.target.value)}></input>
          <button placeholder="entrar" onClick={validar}>teste</button>
      </div>
    );
  }
  
export default Admin;