import Header from "@/components/header";
import Styles from "./consultarHorarios.module.css"
import { useEffect } from "react";

async function horaAtual() {
    var resp = await fetch(`http://worldtimeapi.org/api/timezone/America/Sao_Paulo`);
    var resp2 = await resp.json();
    return resp2;
}

function ConsultarHorarios() {
    var horario;
    useEffect(()=>{
        var relogio = document.getElementById("hora");
        setInterval(() => {
            horaAtual().then((n) => { horario = n; }).finally(() => {
                console.log(horario);
                relogio.innerHTML = horario.datetime.substr(11, 8)
            });
        }, 1000);
    })
    
    return (
        <>
            <Header />
            <div className={Styles.container}>
                <h2>Horário atual de Brasília:</h2>
                <h1 id="hora">00:00</h1>
            </div>
        </>
    );
}

export default ConsultarHorarios;