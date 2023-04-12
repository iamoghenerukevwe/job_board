import styles from '@/styles/Category.module.css'
import  Link from 'next/link';

export default function Category() {

    return(

        <div className={styles.explore}>

            <div className={styles.info}>
                <div className={styles.in}>5 <br/>different fields</div>
                <div className={styles.in}>over 3k <br/>unique companies</div>
                <div className={styles.in}>listings <br/>under 72hours</div>
            </div>

            <div className={styles.header}>Explore by category</div>

            <div className={styles.group}>

                <div className={styles.item_1}>
                   <Link href="https://google.com/">
                        <div className={styles.png_1}></div>
                        <div className={styles.title}>UI/UX Design</div>
                        <div className={styles.small}>Art of creating user-friendly </div>
                   </Link>
                </div>


                <div className={styles.item}>
                   <Link href="https://google.com/">
                        <div className={styles.png_2}></div>
                        <div className={styles.title}>Technical Writing</div>
                        <div className={styles.small}>Creating user-friendly documentation for complex subjects.</div>
                   </Link>
                </div>


                <div className={styles.item}>
                   <Link href="https://google.com/">
                        <div className={styles.png_3}></div>
                        <div className={styles.title}>Web Development</div>
                        <div className={styles.small}>Building and maintaining websites and web applications using programming languages and frameworks.</div>
                   </Link>
                </div>


                <div className={styles.item}>
                   <Link href="https://google.com/">
                        <div className={styles.png_4}></div>
                        <div className={styles.title}>Python</div>
                        <div className={styles.small}>Versatile programming language used for web development, data analysis, and AI, with a large library of tools.</div>
                   </Link>
                </div>


                <div className={styles.item}>
                   <Link href="https://google.com/">
                        <div className={styles.png_5}></div>
                        <div className={styles.title}>Cyber Security</div>
                        <div className={styles.small}>Protecting systems and data from unauthorized access, theft, and damage using various technologies and processes.</div>
                   </Link>
                </div>

            </div>

            
        </div>

    )
    
}