import { useEffect, useState } from "react"
import styles from './Formulario.module.css'

const Formulario = () => {

    const [altura, setAltura] = useState(0);
    const [peso, setPeso] = useState(0);
    const [resultado, setResultado] = useState('')


const renderizaResultado = () => {
    const resultadoImc = peso / (altura ** 2);
    let pesoAdequado = '';

    if (resultadoImc < 18.5) {
        pesoAdequado = 'Abaixo do peso'
        return setResultado(`Seu IMC é ${resultadoImc.toFixed(3)}. E você se enquadra em - '${pesoAdequado}' - Menor que 18.5`)
    } else if (resultadoImc >= 18.5 && resultadoImc <= 24.99) {
        pesoAdequado = 'Peso normal'
        return setResultado(`Seu IMC é ${resultadoImc.toFixed(3)}. E você se enquadra em - '${pesoAdequado}' - 18.5 até 24.99 `)
    } else if (resultadoImc >= 25 && resultadoImc <= 29.99) {
        pesoAdequado = 'Acima do peso'
        return setResultado(`Seu IMC é ${resultadoImc.toFixed(3)}. E você se enquadra em - '${pesoAdequado}' - 25 até 29.99`)
    } else if (resultadoImc >= 30 && resultadoImc <= 34.99) {
        pesoAdequado = 'Obesidade I'
        return setResultado(`Seu IMC é ${resultadoImc.toFixed(3)}. E você se enquadra em - '${pesoAdequado}' - 30 até 34.99`)
    } else if (resultadoImc >= 35 && resultadoImc <= 39.99) {
        pesoAdequado = 'Obesidade II (severa)'
        return setResultado(`Seu IMC é ${resultadoImc.toFixed(3)}. E você se enquadra em - '${pesoAdequado}' - 35 até 39.99`)
    } else {
        pesoAdequado = 'Obesidade III (mórbida)'
        return setResultado(`Seu IMC é ${resultadoImc.toFixed(3)}. E você se enquadra em - '${pesoAdequado}' - Acima de 40`)
    }
}

    return (
        <div className={styles.form}>
            <div className={styles.formCabecalho}>
                <h1>Calculadora de IMC</h1>
            </div>
            <div className={styles.inputs}>
                <input className={styles.formItem} type="number" placeholder="Altura" onBlur={evento => setAltura(evento.target.value)}/>
                <input className={styles.formItem} type="number" placeholder="Peso"  onBlur={evento => setPeso(evento.target.value)}/>
                <button className={styles.button} type="button" onClick={renderizaResultado}>Calcular IMC</button>
            </div>
            <div>
                <b className={styles.resposta}>{resultado}</b>
            </div>
        </div>
    )
}
export default Formulario;