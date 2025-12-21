import pfp from "../assets/pfp.png";
import downloadIco from "../assets/download-ico.png";
import curriculo from "../assets/Curriculo_Everton_Mancio.pdf";

function About() {
  return (
    <div className="about-container">
      <div className="content">
        <h1 className="appear">Sobre Mim</h1>
        <div className="appear">
          Sou um jovem de 17 anos e desenvolvedor em formação, apaixonado por programação
          desde muito cedo. Gosto de entender <b>como as coisas funcionam por trás do código</b>, aplicando esse
          conhecimento tanto em aplicações web quanto no desenvolvimento de
          jogos.
          <br />
        <br />
          Estou indo para o último ano do meu curso técnico em <b>Desenvolvimento de Sistemas</b> e já desenvolvi diversos projetos que me ajudaram a aprimorar minhas habilidades, como:
          <br />
          <br />
          <ul>
            <li>
              Aplicações em <b>React</b> e <b>React Native</b>
            </li>
            <li>
              Funções lógicas complexas
            </li>
            <li>
              Jogos com foco em <b>mecânicas originais</b>, e
              atmosferas
            </li>
            <li>
              Projetos educacionais voltados para <b>Matemática e Química</b>
            </li>
          </ul>
          Valorizo aprendizado constante e projetos que
          desafiem minha lógica e criatividade. Meu objetivo é evoluir como
          desenvolvedor e criar soluções <b>úteis, bem estruturadas e interessantes</b>.
        </div>
        <br />
    
        <a href={curriculo} target="_blank" className="link-button">
            <img src={downloadIco} alt="Download" className="button-icon invert" />
            Baixar Currículo
        </a>

      </div>
      <div className="image-container appear">
        <img src={pfp} alt="Profile picture" />
      </div>
    </div>
  );
}

export default About;
