import styles from '@/styles/Hero.module.css'
import Link from 'next/link'
import  New  from './Primary';




export default function Hero() {

    return(


        <div className={styles.hero}>
            
            

            <div className={styles.focus}>
                
            <div className={styles.primary}> 
                Focusing  <br/>
                on your success,  <br/>
                we're the <span>one-stop</span>  <br/>
                tech job board you'll need.

                <New />                
             </div>

            <div className={styles.border}>
                <div className={styles.circle}>
                    
                </div>
                

            </div>

            
                            
           
                 
            </div>
            {/* <div className={styles.button}>
            

            <Link href ="https://nextjs.org/docs/messages/react-hydration-error">
                <div className={styles.apply}>
                    <Button />
                </div>
            </Link>
            </div> */}
           

            

        </div>
    )
    
}


/*
<div className={styles.credit}>
                <span> The following project is intended solely for the purpose of helping others and is not intended to generate any profit or financial gain. </span>
                <span> The following project is intended solely for the purpose of helping others and is not intended to generate any profit or financial gain. </span>
                        </div>
*/