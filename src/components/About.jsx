import styles from './styles/About.module.css'
import { Notebook } from './Notebook';

export function About(){


  return(
		<div id="About" className={styles.About}>
			<h2>Sobre</h2>
			<div>
				<section className={styles.textAbout}>
					<p>
						Sou um Desenvolvedor Front-End que mora em São Paulo, desde novo sempre gostei de assuntos relacionados a tecnologia e design, quando descobri sobre a carreira de programação e vi quanta coisa se pode criar com linhas de código decidi que essa seria minha profissão.
						
					</p>
					<p>
						Sou formado em Análise e Desenvolvimento de Sistemas, atualmente eu estudo e desenvolvo projetos web. Estou sempre tentando melhorar e aprender tecnologias novas para facilitar e melhorar a criação de sites.
					</p>
					<p>
						 Desejo trabalhar em projetos ambiciosos com pessoas positivas.
					</p>
					<p><a href="#Contact">Vamos fazer algo especial!</a></p>
				</section>
				<section className={styles.decorationNotebook}>
					<Notebook />
				</section>
			</div>
		</div>
  )
}