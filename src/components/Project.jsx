import styles from './styles/Project.module.css'

export function Project({ name, background }){

  return(
    <div className={styles.Project}>
      <img src={background} alt="name" />
      <p>{name}</p>
    </div>
  )
}