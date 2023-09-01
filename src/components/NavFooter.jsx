import { iconGithub } from "./Icons"

export const NavFooter = () => {
  return (
    <>
      <nav>
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