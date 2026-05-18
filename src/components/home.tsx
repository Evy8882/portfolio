import background from "../assets/background-pc.jpg";
import githubIco from "../assets/github-ico.png";
import linkedinIco from "../assets/linkedin-ico.png";
import Header from "./header";
import LogoLoop from './LogoLoop';
import TextType from './TextType';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiBootstrap,
  SiPhp,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiFlask,
  SiRust,
  SiGit,
  SiGithub,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiTypescript,
  SiDocker,
  SiLinux,
} from 'react-icons/si';

const techLogos = [
  { node: <SiHtml5 />, title: "HTML", href: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { node: <SiCss3 />, title: "CSS", href: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { node: <SiJavascript />, title: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { node: <SiReact />, title: "React/Native", href: "https://react.dev" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiBootstrap />, title: "Bootstrap", href: "https://getbootstrap.com" },
  { node: <SiPhp />, title: "PHP", href: "https://www.php.net" },
  { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
  { node: <SiExpress />, title: "Express", href: "https://expressjs.com" },
  { node: <SiPython />, title: "Python", href: "https://www.python.org" },
  { node: <SiFlask />, title: "Flask", href: "https://flask.palletsprojects.com" },
  { node: <SiRust />, title: "Rust", href: "https://www.rust-lang.org" },
  { node: <SiGit />, title: "Git", href: "https://git-scm.com" },
  { node: <SiGithub />, title: "Github", href: "https://github.com" },
  { node: <SiMysql />, title: "MySQL", href: "https://www.mysql.com" },
  { node: <SiPostgresql />, title: "PostgreSQL", href: "https://www.postgresql.org" },
  { node: <SiMongodb />, title: "MongoDB", href: "https://www.mongodb.com" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiDocker />, title: "Docker", href: "https://www.docker.com" },
  { node: <SiLinux />, title: "Linux", href: "https://www.linux.org" },
];

function Home() {
  return (
    <div className="home-container">
      <img src={background} alt="" className="background-img" />
      <Header></Header>
      <TextType 
        text={["Everton Mancio"]}
        typingSpeed={145}
        pauseDuration={5200}
        showCursor
        cursorCharacter="▎"
        deletingSpeed={50}
        cursorBlinkDuration={0.5}
        className="home-title"
      />
      <h1 style={{display: "none"}}>Everton Mancio</h1> {/* para SEO */}
      <h2>Desenvolvedor em Formação | Sites, jogos e aplicações interativas</h2>
      <p className="short-description">
        Estudante de Desenvolvimento de Sistemas focado em <b>JavaScript</b>,{" "}
        <b>TypeScript</b>, <b>React</b>, <b>PHP</b> e <b>python</b>, com
        interesse em <b>aplicações web</b>, <b>jogos</b> e{" "}
        <b>projetos interativos</b>. Busco unir lógica, criatividade e
        aprendizado contínuo em cada projeto.
      </p>
      <div className="home-buttons-container">
        <a
          href="https://www.linkedin.com/in/everton-mancio/"
          target="_blank"
          className="home-button"
        >
          <img src={linkedinIco} className="button-icon" />
          Linkedin
        </a>
        <a
          href="https://github.com/Evy8882"
          target="_blank"
          className="home-button"
        >
          <img src={githubIco} className="button-icon invert" />
          Github
        </a>
      </div>
      <LogoLoop
        logos={techLogos}
        speed={70}
        direction="left"
        logoHeight={32}
        gap={64}
        hoverSpeed={0}
        scaleOnHover
        fadeOut
        fadeOutColor="#0000"
        ariaLabel="Technology partners"
      />
    </div>
  )
}
export default Home;