import background from "../assets/background-pc.jpg";
import githubIco from "../assets/github-ico.png";
import linkedinIco from "../assets/linkedin-ico.png";
import Header from "./header";

function Home() {
  return <div className="home-container">
    <img src={background} alt="" className="background-img"/>
    <Header></Header>
    <h1>Everton Mancio</h1>
    <h2>Desenvolvedor em Formação | Sites, jogos e aplicações interativas</h2>
    <p className="short-description">Estudante de Desenvolvimento de Sistemas focado em <b>JavaScript</b>, <b>TypeScript</b>, <b>React</b>, <b>PHP</b> e <b>python</b>, com interesse em <b>aplicações web</b>, <b>jogos</b> e <b>projetos interativos</b>. Busco unir lógica, criatividade e aprendizado contínuo em cada projeto.</p>
    <div className="home-buttons-container">
        <a href="https://www.linkedin.com/in/everton-mancio/" target="_blank" className="home-button">
        <img src={linkedinIco} className="button-icon" />
        Linkedin
        </a>
        <a href="https://github.com/Evy8882" target="_blank" className="home-button">
        <img src={githubIco} className="button-icon invert" />
        Github
        </a>
    </div>
  </div>;
}
export default Home;