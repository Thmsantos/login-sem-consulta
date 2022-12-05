import React, {useState, useEffect} from "react";
import Admin from "../Admin/admin";
import Home from "../Home/home";
import Cadastro from "../Cadastro";
import Axios from "axios"

function Login(){

    const [page, setPage]= useState(0)
    const [cpf, setCpf] = useState('')
    const [senha, setSenha] = useState('')
    const [verificar, setVerificar] = useState('')

    function validar(){
        console.log(cpf, senha)
        Axios.post('http://localhost:1234/login/verify', {
            cpf: cpf,
            senha : senha
          })
          .then((res) =>{
              setVerificar(res.data)
          })
    }

    const controle_pages = () =>{
        if(page == 1){
            return<Admin />
        }else if(verificar === 'senha correta'){
            return<Home />
        }else if(verificar === 'login inválido'){
          return(
            <div>
              <p>{verificar}</p>
            </div>
          );
        }else if(page == 3){
          return<Cadastro />
        }else{
            return (
                <div className="Login">
                    <input placeholder="cpf" onChange={(e) => setCpf(e.target.value)}></input>
                    <input placeholder="senha" type='password' onChange={(e) => setSenha(e.target.value)}></input>
                    <button placeholder="entrar" onClick={validar}>teste</button>
                    <button onClick={()=> setPage(page + 1)} >Admin</button>
                    <button onClick={()=> setPage(page + 3)} >cadastrar</button>
                </div>
              );
        }
    }
    return (
      <div className="Login">
       {controle_pages()}
      </div>
    );
  }
  
export default Login;