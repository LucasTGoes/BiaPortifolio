import styles from './footer.module.scss'

export default function Footer() {


    const isMobile = () => {
        // DEFINE SE É DESKTOP OU MOBILE
        let whats = 'web'

        if (typeof window !== "undefined") {
            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
                whats = 'api'
            }
        }

        return 'api'//whats
    }

    const whats = isMobile()


    return (
        <div className={styles.footer}>

            <div className={styles.medias}>
                <h1>Meus Contatos</h1>
                <div className={styles.socialMedias}>

                    <a href="https://www.linkedin.com/in/bia-chagas/" target='_blank'>
                        <img width={60} src="../../../assets/icons/linkedin.svg" alt="Linkedin" />
                    </a>


                    <a href="https://www.instagram.com/biachagass_/" target='_blank'>
                        <img width={60} src="../../../assets/icons/instagram.svg" alt="Instagram" />
                    </a>

                    <a href={`https://${whats}.whatsapp.com/send?phone=5521984751343`} target='_blank'>
                        <img width={60} src="../../../assets/icons/whatsapp.svg" alt="Whatsapp" />
                    </a>

                </div>


            </div>
        </div>

    );
}
