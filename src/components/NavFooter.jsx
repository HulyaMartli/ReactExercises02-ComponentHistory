import { iconGithub } from "./Icons"
import styles from "../assets/styles/NavFooter.module.css"

export const NavFooter = () => {
  return (
    <>
      <nav className={styles.NavFooter}>
        <h2>Social Media</h2>
        <ul>
          <li>
            <a href="https://github.com/burakk/boost-java-9/tree/main/react/my-react-app-2" target="_blank" rel="noreferrer">
              {iconGithub}
            </a>
          </li>
        </ul>
      </nav>
    </>
  )
}