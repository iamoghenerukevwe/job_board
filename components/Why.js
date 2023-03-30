import styles from '@/styles/Why.module.css'
import { BsGithub } from 'react-icons/bs';
import Link from 'next/link'

export default function Why(){

    return(

            <div className = {styles.back}>
                <div className={styles.text}>
                    <div className={styles.main}>Why did you make this  decision?</div>
                    In today’s highly competitive world and with remote 
                    work coming to stay, everything that can be done to give the 
                    developer an edge and ease the quest for a role should be encouraged.
                    This was my driving and deciding motivation in creating this job board.

                    <Link href="https://github.com/iamoghenerukevwe/job_board/" target="_blank"> 
            <div className={styles.github}>Star on  <BsGithub /></div>            
            </Link>
                    </div>
                    <div className={styles.shadow}><div className={styles.svg}></div></div>
            </div>

    )
}