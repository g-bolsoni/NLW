// Imports Components 
import { ExperienceBar } from "../componentes/ExperienceBar";
import {Profile} from '../componentes/Profile'

// Import Styles
import styles from '../styles/pages/Home.module.css'


export default function Home() {
  return (
    <div >
        <div className={styles.container}>          
          <ExperienceBar/>
          <section>
            <div className="">
              <Profile/>
            </div>
            <div>
              
            </div>
          </section>
        </div>
    </div>
  )
}
