import "./Timeline.css";
import { ReactComponent as WorkIcon } from "./work.svg";
import { ReactComponent as SchoolIcon } from "./school.svg";
import { ReactComponent as CollegeIcon } from "./college.svg";
import { ReactComponent as MedalIcon } from "./medal.svg";
import timelineElements from "./timelineElements";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

function Timeline() {
  let workIconStyles = { background: "#06D6A0" };
  let schoolIconStyles = { background: "#FFDB00" };
  let collegeIconStyles = { background:  "#AD61BA"};
  let medalIconStyles = { background:  "#3FA7FF"};


  return (
    <div>
      <h1 className="Text">Timeline</h1>
      <VerticalTimeline>
        {timelineElements.map((element) => {
          let isWorkIcon = element.icon === "work";
          let isSchool = element.icon ==="school";
          let isCollege = element.icon ==="college";
          
          return (
            <VerticalTimelineElement
              key={element.key}
              date={element.date}
              dateClassName="date"
              iconStyle={isWorkIcon ? workIconStyles : isSchool?  schoolIconStyles: isCollege? collegeIconStyles :medalIconStyles}
              icon ={
                isWorkIcon ? <WorkIcon/>:isSchool ? <SchoolIcon/>: isCollege ? <CollegeIcon/> :<MedalIcon/>

              }
            >
              <h3 className="vertical-timeline-element-title">
                {element.title}
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                {element.location}
              </h5>
              <p id="description">{element.description}</p>
             
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
}

export default Timeline;