import React, {useContext, useState} from 'react';
import MyInput from "../components/UI/input/MyInput";
import MyButton from "../components/UI/button/MyButton";
import {AuthContext} from "../context/context";

const Login = () => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const {setIsAuth} = useContext(AuthContext)


    const onLoginSubmit = (event) => {
        event.preventDefault()
        setIsAuth(true)
        localStorage.setItem('token', password)
    }

    return (
        <div>
            <h1>Страница для логина</h1>
            <form onSubmit={onLoginSubmit}>
                <MyInput placeholder={'Login'} type={'text'} value={login}
                         onChange={event => setLogin(event.target.value)}/>
                <MyInput placeholder={'Password'} type={'password'} value={password}
                         onChange={event => setPassword(event.target.value)}/>
                <MyButton>LOGIN</MyButton>
            </form>
        </div>
    );
};

export default Login;