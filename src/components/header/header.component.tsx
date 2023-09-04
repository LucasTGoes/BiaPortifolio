import Link from 'next/link'
import styles from './header.module.scss'

export default function Header() {




    return (
        <div className={styles.header}>

            <img className={styles.mediaLogo} src="../../../assets/images/photo.jpg" alt="Logo" />

            <div className={styles.tittle}>

                <h1>Beatriz Chagas</h1>

                <h3>Planejamento de Mídias Sociais | Atendimento ao Cliente | Marketing Digital | Analista de Conteúdo | Figma | UX/UI | Social Media</h3>
            </div>

        </div>
    )
}