import { useState, useEffect} from "react"

import { Header } from "./components/Header"
import { About } from "./components/About"
import { Skills } from './components/Skills';
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

import styles from './App.module.css'

import programmingAnimate from './assets/programmingAnimate.svg'
import icon_scrollDown from './assets/icon_scrollDown.png'

function App() {

  const [ blackHeader, setBlackHeader ] = useState(false)
  const [ showScrollDown, setShowScrollDown ] = useState(true)


  useEffect(() => {
    const scrollListener = () => {
      if(window.scrollY > 10){
        setBlackHeader(true)
        setShowScrollDown(false)
      }else{
        setBlackHeader(false)
        setShowScrollDown(true)
      }
    }

    window.addEventListener('scroll', scrollListener)

    return () => {
      window.removeEventListener('scroll', scrollListener)
    }
  })

  return (
    <div id="start" className={styles.page}>
      <Header black={blackHeader} />
      <main className={styles.main}>
        <section className={styles.info}>
          <p className={styles.greeting}>Olá, meu nome é</p>
          <h1>Isaque Pinheiro <br/> dos Santos</h1>
          <div>
            <p className={styles.typedOut}>e sou um <span>Desenvolvedor Front-End.</span></p>
          </div>
          <p className={styles.description}>Sou formado em Análise e Desenvolvimento de Sistemas, sempre gostei de assuntos relacionados a tecnologia e design, então decidi seguir na área front-end da programação.
          </p>
        </section>
        
        <section className={styles.containerImg}>
          <img src={programmingAnimate} alt="ilustração de um programador" />
        </section>

        <a href="#About" className={showScrollDown ? styles.showScrollDown : styles.scrollDown}>
          <img src={icon_scrollDown} alt="descer a página" />
        </a>
      </main>
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
} 

export default App
