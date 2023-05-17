import styles from './styles/Skills.module.css'

import css from '../assets/css.png'
import html from '../assets/html.png'
import js from '../assets/js.png'
import git from '../assets/git.png'
import github from '../assets/github.png'
import react from '../assets/react.png'

export function Skills(){


  return(
    <div id="Skills" className={styles.Skills}>
      <h2>Habilidades</h2>
      
      <div>
        <section className={styles.ListSkills}>
          <ul>
            <li><b>HTML</b> usando tags semânticas para melhorar a acessibilidade e o SEO;</li>
            <li><b>CSS</b> usando flex e grid para estilizar páginas responsivas para usuários desktop e mobile;</li>
            <li><b>JavaScript</b> para adicionar mais interação ao site e deixar mais dinâmico o conteúdo usando API´s;</li>
            <li><b>React.js</b> usando componentização para desenvolver páginas de uma forma mais prática e organizada deixando elas mais interativas;</li>
            <li><b>Git</b> para versionar os códigos facilitando o trabalho em equipe e GitHub para guardar e ter controle dos projetos já feitos e em desenvolvimento.</li>
          </ul>
        </section>

        <section className={styles.imgSkills}>
          <div>
            <img src={html} alt="html" />
            <span>HTML</span>
          </div>
          <div>
            <img src={css} alt="css" />
            <span>CSS</span>
          </div>
          <div>
            <img src={js} alt="js" />
            <span>JavaScript</span>
          </div>
          <div>
            <img src={react} alt="react" />
            <span>React.js</span>
          </div>
          <div>
            <img src={git} alt="git" />
            <span>Git</span>
          </div>
          <div>
            <img src={github} alt="github" />
            <span>GitHub</span>
          </div>
        </section>
      </div>
      
      
    </div>
  )
}