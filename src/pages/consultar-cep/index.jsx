import Styles from "./consultarCep.module.css"
import Header from "@/components/header";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

async function consulta(cep) {
    var resp = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    var resp2 = await resp.json();
    return resp2;
}




function ConsultarCep() {

    const searchParams = useSearchParams()

    const valor = searchParams.get("query");
    const [carregando, setCarregando] = useState(true);
    const [dados, setDados] = useState({});

    useEffect(() => {
        if (valor !== null) {
            consulta(valor).then((n) => { setDados(n) }).finally(() => { })
            setTimeout(() => {
                setCarregando(false);
            }, 500)
        }
    }, valor);


    return (
        <div className={Styles.container}>
            <Header />
            <div className={Styles.containerForm}>
                <form action="/consultar-cep" method="GET" className={valor === null ? Styles.form : Styles.form2}>
                    <input type="text" name="query" placeholder="Insira o CEP" pattern="[0-9]{8}" required />
                    <input type="submit" value="Consultar" />
                </form>
                {valor !== null ? !carregando ?
                    <div className={Styles.dados}>
                        <input type="text" value={dados?.logradouro} disabled />
                        <input type="text" value={dados?.bairro} disabled />
                        <input type="text" value={dados?.complemento} disabled />
                        <div className={Styles.duplo}>
                            <input type="text" value={dados?.localidade} disabled />
                            <input type="text" value={dados?.uf} disabled />
                        </div>
                    </div>
                    :
                    <label>Carregando...</label>
                    :
                    <></>
                }
            </div>
        </div>
    );
}

export default ConsultarCep;