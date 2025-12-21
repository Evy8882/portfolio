import background from "../assets/background-pc.jpg";

function Home() {
  return <div className="home-container">
    <img src={background} alt="" className="background-img"/>
    <h1>Everton Mancio</h1>
    <h2>Desenvolvedor em Formação | Sites, jogos e aplicações interativas</h2>
    <p className="short-description">Estudante de Desenvolvimento de Sistemas focado em <b>JavaScript</b>, <b>TypeScript</b>, <b>React</b>, <b>PHP</b> e <b>python</b>, com interesse em <b>aplicações web</b>, <b>jogos</b> e <b>projetos interativos</b>. Busco unir lógica, criatividade e aprendizado contínuo em cada projeto.</p>
    <div className="home-buttons-container">
        <a className="home-button">Linkedin</a>
        <a className="home-button">Github</a>
    </div>
  </div>;
}
export default Home;