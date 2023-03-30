import React from 'react'

import './registerandlogin.css'

const UserRegisterAndLogin = () => {
  return (
    <div className="container_register_and_login">
      <div className="container_register_comp">
        <h2>Registrar</h2>
        <form action="">
          <label htmlFor="">
            Nome
            <input 
            type="text" 
            placeholder='Nome' 
            
            />
          </label>
          <label htmlFor="">
            Email
            <input 
            type="email" 
            placeholder='Email' 
            
            />
          </label>
          <label htmlFor="">
            Senha
            <input 
            type="password" 
            placeholder='Senha' 
            
            />
          </label>
          <button className='btnReg'>Cadastrar</button>
        </form>
      </div>
      <div className="container_login_comp">
        <h2>Entrar</h2>
        <form action="">
          <label htmlFor="">
            Email
            <input 
            type="email" 
            placeholder='Email' 
            
            />
          </label>
          <label htmlFor="">
            Senha
            <input 
            type="password" 
            placeholder='Senha' 
            
            />
          </label>
          <button className='btnEnter'>Entrar</button>
        </form>
      </div>
    </div>
  )
}

export default UserRegisterAndLogin