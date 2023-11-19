import Styles from "./style.module.css"

function Header(){
    return (
        <div className={Styles.container}>
            <h1 className={Styles.logo}>Correios</h1>
            <div className={Styles.menu}>
                <a className={Styles.link} href="./">Home</a>
                <a className={Styles.link} href="./encomendas">Encomendas</a>
                <a className={Styles.link} href="./consultar-cep">Consulta CEP</a>
                <a className={Styles.link} href="./tempo">Consultar Horário</a>
            </div>
        </div>
    );
}

export default Header;