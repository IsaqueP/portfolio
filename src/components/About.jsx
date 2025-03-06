import styles from './styles/About.module.css'
import { Notebook } from './Notebook';

export function About(){


  return(
		<div id="About" className={styles.About}>
			<h2>Sobre</h2>
			<div>
				<section className={styles.textAbout}>
					<p>
					Sou um Desenvolvedor Front-End que sempre gostou de tecnologia desde cedo. Quando descobri a programação, fiquei fascinado com a possibilidade de transformar linhas de código em soluções inovadoras. Foi aí que decidi fazer da programação a minha profissão.
					</p>
					<p>
					Sou formado em Análise e Desenvolvimento de Sistemas, atualmente estou estudando Ciência da Computação e desenvolvendo projetos web. Estou sempre tentando melhorar e aprender tecnologias novas para facilitar e melhorar a criação de sites.					</p>
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