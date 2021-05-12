  
import React from 'react'
import './SkillsSection.css'

function SkillsSection() {
  document.title = "My Skills";
    return (
        <body className="allskills">
        <h1 className="Text">My Skills</h1>
        <div class="skills-area">
          <div class="skill">
            <div class="skill-title">React</div>
            <div class="skill-bar"></div>
            <div class="react skill-fill">
              <span class="skill-percent">60%</span>
            </div>
          </div>
          <div class="skill">
            <div class="skill-title">Java</div>
            <div class="skill-bar"></div>
            <div class="java skill-fill">
              <span class="skill-percent">80%</span>
            </div>
          </div>
          <div class="skill">
            <div class="skill-title">Javascript</div>
            <div class="skill-bar"></div>
            <div class="javascript skill-fill">
              <span class="skill-percent">65%</span>
            </div>
          </div>
          <div class="skill">
            <div class="skill-title">Python</div>
            <div class="skill-bar"></div>
            <div class="python skill-fill">
              <span class="skill-percent">65%</span>
            </div>
          </div>
          <div class="skill">
            <div class="skill-title">C</div>
            <div class="skill-bar"></div>
            <div class="c skill-fill">
              <span class="skill-percent">50%</span>
            </div>
          </div>
          <div class="skill">
            <div class="skill-title">Spring </div>
            <div class="skill-bar"></div>
            <div class="spring skill-fill">
              <span class="skill-percent">60%</span>
            </div>
          </div>
          <div class="skill">
            <div class="skill-title">Deep Learning </div>
            <div class="skill-bar"></div>
            <div class="dl skill-fill">
              <span class="skill-percent">50%</span>
            </div>
          </div>
        </div>
      </body>
    )
}

export default SkillsSection;