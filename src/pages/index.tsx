import Card from '../components/card/card'
import Footer from '../components/footer/footer.component'
import Header from '../components/header/header.component'
import styles from './home.module.scss'



export default function LandingPage(props: any) {

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <Header></Header>
      </div >

      <div className={styles.body}>


        <div className={styles.fisrtCard}>
          <Card videoSrc={"../../assets/videos/video14.mp4"} firstImgSrc={"../../assets/images/imagem1.jpg"}
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

          <h1>MEUS TRABALHOS</h1>
        </div>


        <div className={styles.cards}>
          <Card videoSrc={"../../assets/videos/video14.mp4"} firstImgSrc={"../../assets/images/imagem1.jpg"}
            seccondImgSrc={"../../assets/images/imagem2.jpg"} reverse={true} />
          <Card videoSrc={"../../assets/videos/video14.mp4"} firstImgSrc={"../../assets/images/imagem1.jpg"}
            seccondImgSrc={"../../assets/images/imagem2.jpg"} reverse={false} />
          <Card videoSrc={"../../assets/videos/video14.mp4"} firstImgSrc={"../../assets/images/imagem1.jpg"}
            seccondImgSrc={"../../assets/images/imagem2.jpg"} reverse={true} />
          <Card videoSrc={"../../assets/videos/video14.mp4"} firstImgSrc={"../../assets/images/imagem1.jpg"}
            seccondImgSrc={"../../assets/images/imagem2.jpg"} reverse={false} />
        </div>

      </div>

      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div >

  )
}