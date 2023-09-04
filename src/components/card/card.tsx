import styles from './card.module.scss'



interface CardProps {
    videoSrc: string
    firstImgSrc: string
    seccondImgSrc: string
    reverse: boolean
    imgWidth?: any
    videoWidth?: any
}

export default function Card({ imgWidth, videoWidth, videoSrc, firstImgSrc, seccondImgSrc, reverse }: CardProps) {

    return (
        <div className={reverse ? styles.contentReversed : styles.content}>

            <div className={reverse ? styles.videoReversed : styles.video}>
                <video width={videoWidth} autoPlay={true} loop muted>
                    <source src={videoSrc} type="video/mp4" />
                </video>
            </div>

            <div className={reverse ? styles.imagemReversed : styles.imagem}>

                <img width={imgWidth} className={styles.img1} src={firstImgSrc} alt="" />
                <img width={imgWidth} className={styles.img2} src={seccondImgSrc} alt="" />

            </div>

        </div>


    )
}