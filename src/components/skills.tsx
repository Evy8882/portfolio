function Skills() {
  return (
    <div className="skills-container" id="skills">
      <h1 className="appear">Habilidades</h1>
          <div className="skills-list">
            <h2 className="appear">Front-end</h2>
            <div className="skills-group appear">
              <i
                className="skill-tag devicon-html5-plain"
                style={{ backgroundColor: "#E34F26" }}
              >
                {" "}
                HTML
              </i>
              <i
                className="skill-tag devicon-css3-plain"
                style={{ backgroundColor: "#1572B6" }}
              >
                {" "}
                CSS
              </i>
              <i
                className="skill-tag devicon-javascript-plain"
                style={{ backgroundColor: "#F7DF1E", color: "black" }}
              >
                {" "}
                JavaScript
              </i>
              <i
                className="skill-tag devicon-react-original"
                style={{ backgroundColor: "#61DAFB", color: "black" }}
              >
                {" "}
                React/Native
              </i>
            </div>
            <h2 className="appear">Back-end</h2>
            <div className="skills-group appear">
              <i
                className="skill-tag devicon-php-plain"
                style={{ backgroundColor: "#777BB4" }}
              >
                {" "}
                PHP
              </i>
              <i
                className="skill-tag devicon-nodejs-plain"
                style={{ backgroundColor: "#339933" }}
              >
                {" "}
                Node.js
              </i>
              <i
                className="skill-tag devicon-express-original"
                style={{ backgroundColor: "#000000" }}
              >
                {" "}
                Express
              </i>
              <i
                className="skill-tag devicon-python-plain"
                style={{ backgroundColor: "#3776AB" }}
              >
                {" "}
                Python
              </i>
            </div>
            <h2 className="appear">Game dev</h2>
            <div className="skills-group appear">
              <i
                className="skill-tag devicon-godot-plain"
                style={{ backgroundColor: "#478CBF", color: "black" }}
              >
                {" "}
                Godot
              </i>
              <i className="skill-tag" style={{ backgroundColor: "#8A2BE2" }}>
                Game Maker
              </i>
            </div>
            <h2 className="appear">Others</h2>
            <div className="skills-group appear">
              <i
                className="skill-tag devicon-git-plain"
                style={{ backgroundColor: "#F05032" }}
              >
                {" "}
                Git
              </i>
              <i
                className="skill-tag devicon-mysql-plain"
                style={{ backgroundColor: "#4479A1" }}
              >
                {" "}
                MySQL
              </i>
              <i
                className="skill-tag devicon-typescript-plain"
                style={{ backgroundColor: "#3178C6" }}
              >
                {" "}
                Typescript
              </i>
            </div>
        </div>
    </div>
  );
}

export default Skills;
