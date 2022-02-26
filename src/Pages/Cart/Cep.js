import React, { useState } from "react"

const Cep = () => {
  const [alertIinput, setAlertIinput] = useState(false)
  const [inputCep, setInputCep] = useState("")

  const handleChangeInputCep = (e) => {
    if (+e.target.value || e.target.value === "" || 0) {
      setInputCep(() => e.target.value)
    }
    if (e.target.value.length > 8) {
      setAlertIinput(true)
    } else {
      setAlertIinput(false)
    }
  }

  const handleClickCalc = async () => {}

  return (
    <section className='cep'>
      <h2>Selecione o endereço</h2>
      <input
        type='text'
        placeholder='Inserir CEP'
        value={inputCep}
        onChange={handleChangeInputCep}
        style={alertIinput ? { color: "var(--red)" } : null}
      />
      <button onClick={handleClickCalc}>OK</button>
      <a
        target='_blank'
        rel='noreferrer'
        href='https://buscacepinter.correios.com.br/app/endereco/index.php'
      >
        Não lembro meu CEP
      </a>
    </section>
  )
}

export default React.memo(Cep)
