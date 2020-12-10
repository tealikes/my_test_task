import React from 'react'
import useInputValidation from '../../../hooks/useInputValidation'

export const Form = () => {
  const username = useInputValidation('', {isEmpty:true, minLength:3, isUserName:true})
  const password = useInputValidation('', {isEmpty:true, minLength:5, maxLength:30})
  
  return (
    <div>
      <form>
        {username.isDirty && username.message}
        <input 
          value={username.value} 
          onBlur={(e)=> username.onBlur(e)}
          onChange={(e)=> username.onChange(e)}
          placeholder="Пользователь"
          name="username"
        />

        {password.isDirty && password.message}
        <input 
          value={password.value} 
          onBlur={(e)=> password.onBlur(e)}
          onChange={(e)=> password.onChange(e)}
          placeholder="Пароль"
          name="password"
          type="password"
        />
        <button 
          disabled={username.minLengthError || password.minLengthError} 
          type="submit"
          onClick={()=>{}}
        >Войти
        </button>
      </form>
    </div>
  )
}

export default Form