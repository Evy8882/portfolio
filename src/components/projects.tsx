import GithubIco from "../assets/github-ico.png"
import DeployIco from "../assets/deploy-ico.png"
import PortfolioImage from "../assets/projects-imgs/portfolio.png";
import ChemisterImage from "../assets/projects-imgs/chemister.png";
import LabControlImage from "../assets/projects-imgs/labcontrol.png";
import TubePreviewImage from "../assets/projects-imgs/tubepreview.png";
import LerMaisImage from "../assets/projects-imgs/lermais.png";
import LogGameImage from "../assets/projects-imgs/logarithmgame.png";
import ProjMan from "../assets/projects-imgs/projman.png";
import Precometro from "../assets/projects-imgs/precometro.png";

function Projects() {
    type Project = {
        title: string;
        description: string;
        deploy: string | null;
        repository: string;
        image: any;
        techs: string[];
        categories: string[];
    };

    const projects: Project[] = [
        {
            title: "Portfólio pessoal",
            description: "O portfólio que você está vendo agora! Desenvolvido para apresentar minhas habilidades e projetos.",
            deploy: "/",
            repository: "https://github.com/Evy8882/portfolio",
            image: PortfolioImage,
            techs: ["React", "TypeScript", "CSS"],
            categories: ["Web Development", "Frontend"]
        },
        {
            title: "CheMister",
            description: "Aplicativo Web com funcionalidades diversas envolvendo cálculos químicos.",
            deploy: "https://che-mister.vercel.app",
            repository: "https://github.com/Evy8882/CheMister",
            image: ChemisterImage,
            techs: ["React", "TypeScript", "CSS"],
            categories: ["Web Development", "Frontend"]
        },
        {
            title: "LabControl",
            description: "Aplicativo com a finalidade de controlar os agendamentos dos laboratórios na Etec de Peruíbe.",
            deploy: null,
            repository: "https://github.com/otavio-emanoel/LabControl",
            image: LabControlImage,
            techs: ["React Native", "Expo", "MySQL", "Express", "Node.js"],
            categories: ["Mobile Development", "Frontend", "Backend"]
        },
        {
            title: "Proj-Man",
            description: "Aplicativo desktop para gerenciamento de projetos com funcionalidades de criação, edição e exclusão de tarefas e notas.",
            deploy: null,
            repository: "https://github.com/Evy8882/Proj-Man",
            image: ProjMan,
            techs: ["Rust", "React", "CSS", "Tauri"],
            categories: ["Desktop Development", "Frontend", "Backend"]
        },
        {
            title: "Preçometro",
            description: "Aplicativo Web, focado no backend, para comparação de preços de produtos em diferentes lojas online.",
            deploy: null,
            repository: "https://github.com/Evy8882/Precometro",
            image: Precometro,
            techs: ["React", "TypeScript", "CSS"],
            categories: ["Web Development", "Backend"]
        },
        {
            title: "Tube-Preview",
            description: "Aplicatio web que resume vídeos do youtube com base no audio transcrito a partir de suas URLs",
            deploy: "https://tube-preview.vercel.app/",
            repository: "https://github.com/Evy8882/Tube-Preview",
            image: TubePreviewImage,
            techs: ["React", "TypeScript", "CSS", "Python", "AI"],
            categories: ["Web Development", "Frontend", "Backend"]
        },
        {
            title: "LerMais",
            description: "Site criado em um Hackaton, disponibiliza livros de domínio público e independentes com sistema de recompensas aos usuários.",
            deploy: null,
            repository: "https://github.com/Evy8882/CollabTask",
            image: LerMaisImage,
            techs: ["React", "JavaScript", "PHP", "MySQL"],
            categories: ["Web Development", "Frontend", "Backend"]
        },
        {
            title: "Logarithm Game",
            description: "Jogo educativo e animado para praticar o cálculo de logaritmos de forma divertida, desenvolvido para uma plataforma de jogos criada por mim e outros colegas.",
            deploy: "https://evy8882.github.io/MathGames/log-game.html",
            repository: "https://github.com/Evy8882/MathGames",
            image: LogGameImage,
            techs: ["HTML", "CSS", "JavaScript"],
            categories: ["Game Development", "Frontend"]
        }

    ];

    return (
        <div className="projects-container" id="projects">
            <h1 className="appear">Projetos</h1>
            <div className="content">
                {projects.map((project, index) => (
                    <div key={index} className="project-card appear">
                        <img src={project.image} alt={project.title} className="project-image" />
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                        <div className="project-techs">
                            {project.techs.map((tech, techIndex) => (
                                <span key={techIndex} className="tech-tag">{tech}</span>
                            ))}
                        </div>
                        <div className="project-links">
                            {project.deploy && (
                                <a href={project.deploy} target="_blank" className="project-link">
                                    <img src={DeployIco} alt="deploy-icon" />
                                    Deploy
                                </a>
                            )}
                            <a href={project.repository} target="_blank" className="project-link">
                                <img src={GithubIco} alt="GitHub" className="github-icon" />
                                Github
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;