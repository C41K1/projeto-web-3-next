import { useEffect, useState } from "react";
import Header from "@/components/header";
import Styles from "./encomendas.module.css"
import { useRouter } from 'next/router';


async function fetchPacotes() {
    var resp = await fetch("./api/getPacotes");
    var resp2 = await resp.json();
    return resp2;
}

async function addPacote(conteudo, remetente, destinatario) {
    const pacote = {
        conteudo: conteudo,
        remetente: remetente,
        destinatario: destinatario,
    }

    console.log(JSON.stringify(pacote));

    const resp = await fetch("/api/cadastraPacotes",{
        method: "POST",
        body: JSON.stringify(pacote),
    })
}




function Encomendas() {

    const router = useRouter();

    var novoPacote = {}
    
    let alterarConteudo = (n) => {
        novoPacote.conteudo = n.target.value;
        console.log(novoPacote.conteudo);
    };
    
    let alterarRemetente = (n) => {
        novoPacote.remetente = n.target.value;
        console.log(novoPacote.remetente);
    };
    
    let alterarDestinatario = (n) => {
        novoPacote.destinatario = n.target.value;
        console.log(novoPacote.destinatario);
    };

    let enviarPacote = (n) => {
        n.preventDefault();
        addPacote(novoPacote.conteudo, novoPacote.remetente, novoPacote.destinatario);
        novoPacote.conteudo = "";
        novoPacote.remetente = "";
        novoPacote.destinatario = "";
        router.reload()
    };

    const [pacotes, setPacotes] = useState([]);

    useEffect(()=>{
        fetchPacotes().then((n)=>{setPacotes(n)});
    },[])


    return (
        <>
            <Header />
            <div className={Styles.container}>
                <div className={Styles.pacotes}>
                    <h1>Encomendas</h1>
                    {pacotes.map((i,index)=>{
                        return (
                            <div className={Styles.cardEncomenda} key={index}>
                                <h2>{i?.conteudo}</h2>
                                <div className={Styles.encDados}>
                                    <label>Remetente: {i?.remetente}</label>
                                    <label>Destinatário: {i?.destinatario}</label>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className={Styles.adicionar}>
                    <form onSubmit={enviarPacote}>
                        <h2>Cadastrar Encomenda</h2>
                        <input type="text" onChange={alterarConteudo} placeholder="Conteúdo" required />
                        <input type="text" onChange={alterarRemetente} placeholder="Remetente" required />
                        <input type="text" onChange={alterarDestinatario} placeholder="Destinatário" required />
                        <input type="submit" value="cadastrar" />
                    </form>
                </div>
            </div>
        </>
    );
}

export default Encomendas;