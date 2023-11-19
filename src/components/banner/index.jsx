import Styles from "./style.module.css"

function Banner() {
    return (
        <div className={Styles.container}>
            <div className={Styles.frente}>
                <h2 className={Styles.texto}>SUAS ENCOMENDAS SEGURAS EM NOSSA MÃO</h2>
            </div>
        </div>
    );
}

export default Banner;