import styles from "../assets/styles/NavMain.module.css"

export const NavMain = ({setUrl})=> {
    return(
        <>
         <nav className={styles.NavMain}>
        <ul>
          <li>
            <a href="#" onClick={(e)=>{
              e.preventDefault();
              setUrl("/01");
            }}>Page 1</a>
          </li>
          <li>
            <a href="#" onClick={(e)=>{
              e.preventDefault();
              setUrl("/02");
            }}>Page 2</a>
          </li>
          <li>
            <a href="#" onClick={(e)=>{
              e.preventDefault();
              setUrl("/03");
            }}>Page 3</a>
          </li>
        </ul>
      </nav>
        </>
    )
}