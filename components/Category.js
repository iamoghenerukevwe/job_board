import styles from '@/styles/Category.module.css'
import  Link from 'next/link';

export default function Category() {

    return(

        <div className={styles.explore}>
            <div>Explore by category</div>

            <div className={styles.group}>

                <div className={styles.item}>
                   <Link>
                        <div className={styles.png}></div>
                        <div className={styles.title}>UI/UX Design</div>
                        <div className={styles.small}>UI/UX design is the art of creating user-friendly and visually appealing interfaces that enhance the user's overall experience.</div>
                   </Link>
                </div>

            </div>

            
        </div>

    )
    
}