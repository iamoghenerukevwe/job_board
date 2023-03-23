import styles from '@/styles/Hero.module.css'
import Link from 'next/link'

import { BsGithub } from 'react-icons/bs';


export default function Hero() {

    return(


        <div className={styles.hero}>
            
           

            <div className={styles.focus}>
                
            <div className={styles.primary}>one job <span>board</span> <br /> for us all</div>

            <div className={styles.border}></div>

            <div className={styles.secondary}>One board, endless opportunities - access IT job postings from multiple sources 
                                            on this job board.</div>
                 
            </div>
            <div className={styles.nav}>
            <Link href="https://github.com/iamoghenerukevwe/job_board/" target="_blank"> 
            <div className={styles.github}>Star on  <BsGithub /></div>            
            </Link>

            <Link href ="/">
                <div className={styles.apply}>Apply</div>
            </Link>
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