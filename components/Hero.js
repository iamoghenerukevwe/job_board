import styles from '@/styles/Hero.module.css'
import Link from 'next/link'

import { BsStarFill, BsGithub } from 'react-icons/bs';


export default function Hero() {

    return(


        <div className={styles.hero}>
            
            <div className={styles.nav}>
            <Link href="https://www.google.com/"> 
            <div className={styles.github}><BsGithub /><BsStarFill color='gold' /></div>            
            </Link>
            </div>

            <div className={styles.focus}>
                
            <div className={styles.primary}>one job <span>board</span> <br /> for us all</div>

            <div className={styles.border}></div>

            <div className={styles.secondary}>One board, endless opportunities - access IT job postings from multiple sources 
                                            on this job board.</div>
                 
            </div>

            <div className={styles.rotate}>
        
            </div>

            <div className={styles.credit}>
                <span>This is not intended for profit!      
                            This is not intended for profit!    
                            This is not intended for profit!      
                             This is not intended for profit!  
                            This is not intended for profit!  
                            This is not intended for profit!  
                            This is not intended for profit!  
                            This is not intended for profit!  
                            This is not intended for profit!  
                            This is not intended for profit!  </span>
                        </div>

        </div>
    )
    
}