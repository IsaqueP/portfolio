import { Project } from './Project'

import styles from './styles/Projects.module.css'

import html from '../assets/html.png'
import css from '../assets/css.png'
import js from '../assets/js.png'
import react from '../assets/react.png'
import sass from '../assets/sass.png'
import node from '../assets/node.png'
import Vtex from '../assets/Vtex.png'
import Costs from '../assets/Costs.png'
import NetflixClone from '../assets/NetflixClone.png'
import DevFinance from '../assets/DevFinance.png'
import Todolist from '../assets/Todolist.png'
import Beautysalon from '../assets/Beautysalon.png'

let projects = [
  {
    name: 'Vtex',
    background: Vtex,
    stack: ['html', 'sass', 'react'],
    repositorio: 'https://github.com/IsaqueP/teste-front-end-jr'
  }, {
    name: 'Costs',
    background: Costs,
    stack: ['html', 'css', 'react', 'node.js'],
    repositorio: 'https://github.com/IsaqueP/Costs'
  }, {
    name: 'NetflixClone',
    background: NetflixClone,
    stack: ['html', 'css', 'react'],
    repositorio: 'https://github.com/IsaqueP/Netflix-Clone'
  }, {
    name: 'DevFinance',
    background: DevFinance,
    stack: ['html', 'css', 'js'],
    repositorio: 'https://github.com/IsaqueP/Dev.Finance'
  }, {
    name: 'Todolist',
    background: Todolist,
    stack: ['html', 'css', 'react'],
    repositorio: 'https://github.com/IsaqueP/Todolist'
  }, {
    name: 'Beautysalon',
    background: Beautysalon,
    stack: ['html', 'css', 'js'],
    repositorio: 'https://github.com/IsaqueP/Beautysalon.'
  }
]

export function Projects(){
  
  return(
    <div id="Projects" className={styles.Projects}>
      <h2>Projetos</h2>

      <section className={styles.ContainerProjects}>
       {projects.map((project, index) => {
          return(
            <div key={index}>
              <a href={project.repositorio} target="_blank">
                <Project name={project.name} background={project.background} stack={project.stack} />
              </a>
              <ul>
                  {project.stack.map((stack, index) => {
                    let icon
                    switch(stack){
                      case 'html':
                        icon = html
                        break;
                      case 'css':
                        icon = css
                        break;
                      case 'js':
                        icon = js
                        break;
                      case 'react':
                        icon = react
                        break;
                      case 'sass':
                        icon = sass
                        break;
                      case 'node.js':
                        icon = node
                        break;
                    }

                    return(
                      <li key={index}>
                        <img src={icon} alt={stack} />
                      </li>
                    )
                  })}
              </ul>
              
            </div>
          )
        })}
      </section>
    </div>
  )
}