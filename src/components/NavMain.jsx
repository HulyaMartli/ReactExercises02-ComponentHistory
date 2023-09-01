import styles from "../assets/styles/NavMain.module.css"

export const NavMain = ()=> {
    return(
        <>
         <nav className={styles.NavMain}>
        <ul>
          <li>
            <a href="#">Page 1</a>
          </li>
          <li>
            <a href="#">Page 2</a>
          </li>
        </ul>
      </nav>
        </>
    )
}