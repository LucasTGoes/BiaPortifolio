import styles from './video.module.scss'



interface VideoProps {
    firstVideoSrc: string
    seccondVideoSrc: string
}

export default function Video({ firstVideoSrc, seccondVideoSrc }: VideoProps) {

    return (
        <div >

            <div className={styles.video}>
                <div>

                    <video width="96%" autoPlay={true} loop muted>
                        <source src={firstVideoSrc} type="video/mp4" />
                    </video>
                </div>
                <div>
                    <video width="96%" autoPlay={true} loop muted>
                        <source src={seccondVideoSrc} type="video/mp4" />
                    </video>
                </div>
            </div>
        </div>


    )
}