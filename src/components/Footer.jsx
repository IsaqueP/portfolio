import styles from './styles/Footer.module.css'

import github_icon from '../assets/github_icon.svg'
import linkedin_icon from '../assets/linkedin_icon.svg'

export function Footer(){

  return(
    <footer className={styles.Footer}>
     <p>© 2023 Isaque Pinheiro dos Santos</p>
     <ul>
      <li>
        <a href="https://github.com/IsaqueP" target='_blank'>
          <img src={github_icon} alt="ícone do github" />
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/isaquep/" target='_blank'>
          <img src={linkedin_icon} alt="ícone do linkedin" />
        </a>
      </li>
     </ul>
    </footer>
  )
}