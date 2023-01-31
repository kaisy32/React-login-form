import { useState } from "react"
import style from "./LoginBox.module.css"

const LoginBox = () => {
    const [usr,setUsr] = useState("")
    const [pwd,setPwd] = useState("")
    const [pop,popUpClass] = useState("hide")
    let logado;
    var logar = e => {
        e.preventDefault()
        let arr = [
            {name:"admin",pwd:"admin"},
            {name:"user",pwd:"user"}
        ]
        for(let i=0;i<=arr.length;i++){
            logado=JSON.stringify(arr[i]) === JSON.stringify({name:usr,pwd:pwd})
            if(logado) break;
        }
        popUp()
        setUsr("")
        setPwd("")
    }
    const popUp = () => {
        logado ? popUpClass(style.logged) :  popUpClass(style.erro)
    }

    return (
        <div className={style.box} id="box">
            <h1>Login</h1>
            <form onSubmit={logar}>
                <label htmlFor="name"></label>
                <input className={style.usuario} value={usr} type="text" placeholder="usuario" name="user" onChange={(e) => setUsr(e.target.value)}/>
                <label htmlFor="pwd"></label>
                <input className={style.pwd}    value={pwd}type="password" placeholder="senha" name="pwd" onChange={(e) => setPwd(e.target.value)}/>
                <input className={style.submit} type="submit" placeholder="entrar"value="logar"/>
            </form>
            <h3 className={pop}></h3>
        </div>
  )
}

export default LoginBox
