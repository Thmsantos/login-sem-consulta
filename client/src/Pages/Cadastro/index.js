import React, { useState } from "react";
import Axios from "axios";

function Cadastro(){

    const [nome, setNome] = useState('')
    const [cpf, setCpf] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    function cadastrar(){
       
        console.log(nome, cpf, email, senha)
        Axios.post('http://localhost:1234/login/adicionar', {
            nome : nome,
            cpf : cpf,
            email : email,
            senha : senha
        })
        .then((res) =>{
           
        })
    }

    function corpo_cadastro(){
        return(
            <div>
                <input placeholder="nome" onChange={(e) => setNome(e.target.value)}></input>
                <input placeholder="cpf" onChange={(e) => setCpf(e.target.value)}></input>
                <input placeholder="email" type='password' onChange={(e) => setEmail(e.target.value)}></input>
                <input placeholder="senha" onChange={(e) => setSenha(e.target.value)}></input>
                <button onClick={cadastrar}>cadastrar</button>
            </div>
        );
    }

    return (
        <div>
         {corpo_cadastro()}
        </div>
      );

}
export default Cadastro;