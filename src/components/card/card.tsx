import styles from './card.module.scss'



interface CardProps {
    videoSrc: string
    firstImgSrc: string
    seccondImgSrc: string
    reverse: boolean

}

export default function Card({ videoSrc, firstImgSrc, seccondImgSrc, reverse }: CardProps) {




    return (
        <div className={reverse ? styles.contentReversed : styles.content}>

            <div className={reverse ? styles.videoReversed : styles.video}>
                <video width="96%" autoPlay={true} loop muted>
                    <source src={videoSrc} type="video/mp4" />
                </video>
            </div>

            <div className={reverse ? styles.imagemReversed : styles.imagem}>

                <img className={styles.img1} src={firstImgSrc} alt="" />
                <img className={styles.img2} src={seccondImgSrc} alt="" />

            </div>

        </div>


    )
}