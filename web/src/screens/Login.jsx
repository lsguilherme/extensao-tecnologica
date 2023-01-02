import React from 'react'
import './Login.css'

function Login() {
  
  return (
    <>
      <div id="container">
        <div id="loginContainer">
          <h1>Login</h1>

          <form id="formContainer">
            <div className='input'>
              <label htmlFor="email">Login</label>
              <input type="email" id="email"/>
            </div>

            <div className='input'>
              <label htmlFor="senha">Senha</label>
              <input type="password" id="senha"/>
            </div>

            <a href='/home'>Acessar</a>
            <a href='/cadastro'>Cadastrar-se</a>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login
