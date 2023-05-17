import { useState } from "react"
import emailjs from '@emailjs/browser'

import styles from './styles/Contact.module.css'

import whatsapp_icon from '../assets/whatsapp_icon.svg'
import email_icon from '../assets/email_icon.svg'
import github_icon from '../assets/github_icon.svg'
import linkdin_icon from '../assets/linkedin_icon.svg'

export function Contact(){
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function sendEmail(e){
    e.preventDefault()

    if(name === '' || email === '' || message === ''){
      alert('Preencha todos os campos')
      return
    }

    const templateParams = {
      from_name: name,
      message,
      email,
    }

    emailjs.send('service_o732zxj', 'template_wk34apo', templateParams, 'juTpmTFXUqdF3GXFu')
      .then(() => {
        alert('email enviado')
        setName('')
        setEmail('')
        setMessage('')
      }), (error) => {
        alert('o email não foi enviado, tente novamente')
      }
  }

  return(
    <div id="Contact" className={styles.Contact}>
      <h2 className={styles.title}>Entre em contato</h2>

      <section className={styles.info}>
        <div className={styles.cardInfoWhatsapp}>
          <p>
            <img src={whatsapp_icon} alt="ícone do whatsapp" />
            WhatsApp  
          </p>
          <a href="https://api.whatsapp.com/send?phone=5511980354098&text=gostaria%20de%20participar%20de%20um%20projeto?" target="_blank">+55 11   98035-4098</a>
        </div>
        <div className={styles.cardInfoGithub}>
          <p>
            <img src={github_icon} alt="ícone do github" />
            Github 
          </p>
          <a href="https://github.com/IsaqueP"  target="_blank">IsaqueP</a>
        </div>
        <div className={styles.cardInfoLinkedin}>
          <p>
            <img src={linkdin_icon} alt="ícone do linkedIn" />
            linkedIn  
          </p>
          <a href="https://www.linkedin.com/in/isaquep/" target="_blank">IsaqueP</a>
        </div>
        <div className={styles.cardInfoEmail}>
          <p>
            <img src={email_icon} alt="ícone do email" />
            Email  
          </p>
          <a href="mailto:isaquepinheiro2002@gmail.com" target="_blank">isaquepinheiro2002@gmal.com</a>
        </div>
      </section>

        <form className={styles.form} onSubmit={sendEmail}>
          <input 
            className={styles.input}
            type="text"
            placeholder="Digite seu nome"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          
          <input 
            className={styles.input}
            type="text"
            placeholder="Digite seu email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />

          <textarea 
            className={styles.textarea}
            placeholder="Digite sua mensagem..."
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />

          <input className={styles.button} type="submit" value="Enviar" />
        </form>
    </div>
  )
}