import Card from '../components/card/card'
import Footer from '../components/footer/footer.component'
import Header from '../components/header/header.component'
import Video from '../components/videos/video'
import styles from './home.module.scss'



export default function LandingPage(props: any) {

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <Header></Header>
      </div >

      <div className={styles.body}>


        <div className={styles.fisrtCard}>
          <Card videoWidth={"96%"} videoSrc={"../../assets/videos/video14.mp4"} firstImgSrc={"../../assets/images/imagem1.jpg"}
            seccondImgSrc={"../../assets/images/imagem2.jpg"} reverse={false} />
        </div>

        <div className={styles.bigTittle}>
          <h1>QUEM SOU EU?</h1>

          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Apaixonada por fazer as produções de conteúdos, e ver o resultado positivo de cada um deles nos canais de comunicação dos clientes. Isso é o que mais me faz feliz na profissão. Minha trajetória e carinho com o Marketing é realmente muito intensa.
            Desde 2020 tenho me dedicado a aprender e colocar em prática todas as ferramentas de otimização e crescimento para levar
            resultados assertivos e exponenciais para cada cliente, sendo ele do ramo de alimentação, farmácia, materiais de construção
            e outros.
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Além de colocar em prática, aprender sempre foi um dos pilares mais importantes para que eu pudesse dar  o melhor na profissão. Por isso, sempre busquei por meios de aprendizagem como cursos, palestras, feiras ou eventos de Marketing Digital como o RD Summit.
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Meu intuito na profissão, mais do que fazer o que amo, é crescer de forma horizontal, não visando apenas o meu, mas o da equipe como um todo. Onde eu possa aprender, praticar em equipe e passar adiante a beleza que o Marketing tem.
          </p>

          <br />

          <h1>PRODUÇÕES</h1>
        </div>


        <div className={styles.cards}>

          {/*           
          <Card  videoWidth={"90%"} imgWidth={"90%"} videoSrc={"../../assets/videos/video18.mp4"} firstImgSrc={"../../assets/images/imagem15.jpg"}
            seccondImgSrc={"../../assets/images/imagem14.jpg"} reverse={true} />

          <Card videoWidth={"99%"}  imgWidth={"97%"} videoSrc={"../../assets/videos/video10.mp4"} firstImgSrc={"../../assets/images/imagem16.jpg"}
            seccondImgSrc={"../../assets/images/imagem17.jpg"} reverse={true} />
          <Card imgWidth={"39%"} videoSrc={"../../assets/videos/video1.mp4"} firstImgSrc={"../../assets/images/imagem19.jpg"}
            seccondImgSrc={"../../assets/images/imagem18.jpg"} reverse={false} /> */}


          {/* <div className={styles.fisrtGrid}>


            <div>one</div>
            <div>two</div>
            <div>tree</div> */}


          <div className={styles.seccondVideo}>
            <div>
              <video width={"116%"} autoPlay={true} loop muted>
                <source src={"../../assets/videos/video18.mp4"} type="video/mp4" />
              </video>
            </div>

            <div className={styles.seccondGridImages}>
              <img width={"80%"} className={styles.img1} src={"../../assets/images/imagem15.jpg"} alt="" />
              <img width={"80%"} className={styles.img2} src={"../../assets/images/imagem14.jpg"} alt="" />
            </div>
          </div>



          <div className={styles.thirdVideo}>

            <div className={styles.thirdGridImages}>
              <img width={"96%"} className={styles.img1} src={"../../assets/images/imagem19.jpg"} alt="" />
              <img width={"96%"} className={styles.img2} src={"../../assets/images/imagem18.jpg"} alt="" />
            </div>

            <div>
              <video width={"142%"} autoPlay={true} loop muted>
                <source src={"../../assets/videos/video1.mp4"} type="video/mp4" />
              </video>
            </div>
          </div>


          <div className={styles.seccondVideo}>
            <div>
              <video width={"116%"} autoPlay={true} loop muted>
                <source src={"../../assets/videos/video10.mp4"} type="video/mp4" />
              </video>
            </div>

            <div className={styles.seccondGridImages}>
              <img width={"80%"} className={styles.img1} src={"../../assets/images/imagem16.jpg"} alt="" />
              <img width={"80%"} className={styles.img2} src={"../../assets/images/imagem17.jpg"} alt="" />
            </div>
          </div>


          <Video firstVideoSrc={"../../assets/videos/video17.mp4"} seccondVideoSrc={"../../assets/videos/video15.mp4"} />
          <Video firstVideoSrc={"../../assets/videos/video16.mp4"} seccondVideoSrc={"../../assets/videos/video.mp4"} />
          <Video firstVideoSrc={"../../assets/videos/video4.mp4"} seccondVideoSrc={"../../assets/videos/video11.mp4"} />

        </div>

      </div>

      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div >

  )
}