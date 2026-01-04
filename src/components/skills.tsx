function Skills() {
  return (
    <div className="skills-container" id="skills">
      <h1 className="appear">{"< "}Habilidades{" />"}</h1>
      <div className="skills-list">
        <div className="skills-group appear">
          <h2 className="appear">Front-end</h2>
          <div className="skill-tag" title="Linguagem de marcação para estruturar páginas web">
            <i className="devicon-html5-plain"></i> HTML
          </div>
          <div className="skill-tag" title="Linguagem de estilo para estilizar páginas web">
            <i className="devicon-css3-plain"></i> CSS
          </div>
          <div className="skill-tag" title="Linguagem de programação para interatividade em páginas web">
            <i className="devicon-javascript-plain"></i> JavaScript
          </div>
          <div className="skill-tag" title="Biblioteca JavaScript para criar interfaces de usuário">
            <i className="devicon-react-original"></i> React/Native
          </div>
          <div className="skill-tag" title="Biblioteca para estilização de componentes">
            <i className="devicon-tailwindcss-plain"></i> Tailwind CSS
          </div>
          <div className="skill-tag" title="Biblioteca para estilização de componentes">
            <i className="devicon-bootstrap-plain"></i> Bootstrap
          </div>
        </div>
        <div className="skills-group appear">
          <h2 className="appear">Back-end</h2>
          <div className="skill-tag" title="Linguagem de programação para desenvolvimento web">
            <i className="devicon-php-plain"></i> PHP
          </div>
          <div className="skill-tag" title="Ambiente de execução JavaScript no lado do servidor">
            <i className="devicon-nodejs-plain"></i> Node.js
          </div>
          <div className="skill-tag" title="Framework para criar APIs e aplicações web com Node.js">
            <i className="devicon-express-original"></i> Express
          </div>
          <div className="skill-tag" title="Linguagem de programação versátil e poderosa">
            <i className="devicon-python-plain"></i> Python
          </div>
          <div className="skill-tag" title="Microframework web para Python">
          <i className="devicon-flask-original"></i> Flask
          </div>
          <div className="skill-tag" title="Linguagem de programação focada em segurança e desempenho">
            <i className="devicon-rust-plain"></i> Rust
          </div>
        </div>
        <div className="skills-group appear">
          <h2 className="appear">Outros</h2>
          <div className="skill-tag" title="Sistema de controle de versão para rastrear mudanças no código">
            <i className="devicon-git-plain"></i> Git
          </div>
          <div className="skill-tag" title="Plataforma para hospedagem e colaboração de código">
            <i className="devicon-github-original"></i> Github
          </div>
          <div className="skill-tag" title="Sistema de gerenciamento de banco de dados relacional">
            <i className="devicon-mysql-plain"></i> MySQL
          </div>
          <div className="skill-tag" title="Superset do JavaScript que adiciona tipagem estática">
            <i className="devicon-typescript-plain"></i> Typescript
          </div>
          <div className="skill-tag" title="Editor de código-fonte popular entre desenvolvedores">
            <i className="devicon-vscode-plain"></i> VS Code
          </div>
          <div className="skill-tag" title="Plataforma para containerização e virtualização leve">
            <i className="devicon-docker-plain"></i> Docker
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
