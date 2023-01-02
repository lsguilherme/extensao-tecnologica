import React from 'react';
import './Cadastro.css'

function Cadastro() {
    return(
        <>
      <div id="container">
        <div id="loginContainer">
          <h1>Cadastro de Usuário</h1>

          <form id="formContainer">
            <div className='input'>
              <label htmlFor="email">Login</label>
              <input type="email" id="email"/>
            </div>

            <div className='input'>
              <label htmlFor="email">Email</label>
              <input type="email" id="email"/>
            </div>

            <div className='input'>
              <label htmlFor="senha">Senha</label>
              <input type="password" id="senha"/>
            </div>

            <a href='/'>Cadastrar</a>
          </form>
        </div>
      </div>
    </>
    )
}

export default Cadastro;