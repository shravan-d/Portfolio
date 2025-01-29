import React from "react";

const ExperienceCard = ({
  role,
  company,
  location,
  duration,
  description,
  techStack,
  companyLink,
}) => {
  return (
    <div
      style={{
        backgroundColor: "rgba(30, 30, 30, 1)", // Navy-like background
        color: "#cce7ff", // Soft blue text
        padding: "16px",
        borderRadius: "8px",
        maxWidth: "80%",
        margin: "20px auto",
        fontFamily: "Courier New, Courier, monospace",
        boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
        
      }}
    >
      {/* Role and Company */}
      <h3 style={{ margin: "10px 10px 10px 10px" }}>
        {role} ·{" "}
        <a
          href={companyLink}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#cce7ff", textDecoration: "none", fontWeight: "bold" }}
        >
          {company}
        </a>
      </h3>

      {/* Location and Duration */}
      <p style={{ margin: "10px 10px 16px", fontSize: "16px", opacity: 0.8 }}>
        {duration} · {location}
      </p>

      {/* Description */}
      <p style={{ margin: "20px 20px", lineHeight: "2", textAlign: 'left' }}>
      {description.map((bullet, index) => (
            <div key={index} style={{ margin: "10px 0px"}}>· {bullet}</div>
        ))}
        </p>

      {/* Tech Stack */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "15px", justifyContent: 'center'}}>
        {techStack.map((tech, index) => (
          <span
            key={index}
            style={{
              backgroundColor: "rgb(31, 82, 56)",
              color: "#cce7ff",
              padding: "8px 16px",
              borderRadius: "4px",
              fontSize: "12px",
              fontWeight: "bold",
            }}
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

function Experience() {
  return (
    <div className='container' style={{background: 'rgba(35, 35, 35, 0.6)'}}>
        <ExperienceCard
            role="Software Development Co-op"
            company="Method AI"
            location="Boston, USA"
            duration="6 Months"
            description={["Second software team member in an early-stage start-up","Developed a 3D surgical visualization tool in C++ and Qt with real-time data streaming and a tumor segmentation algorithm, saving $350,000 by eliminating third-party software", "Automated the data capture and annotation pipeline using Python, AWS S3 and Lambda, reducing manual effort and enabling faster insights for machine learning models", "Established a scalable production environment by integrating continuous testing and static analysis pipelines using GitHub Actions, GTest, and Sonar, and setting up cloud infrastructure with AWS, ensuring robust code quality"]}
            techStack={["C++", "Python", "gRPC", "PostgreSQL", "Qt", "AWS", "Docker"]}
            companyLink="https://www.methodsurgical.ai"
          />
          <ExperienceCard
            role="Software Development Engineer"
            company="Samsung SDS"
            location="Gurgaon, India"
            duration="2 years"
            description={["Engineered and integrated APIs using Spring Boot and Java and a UI using ReactJS for a resource management system, improving backend efficiency by 40% through optimized database operations with PostgreSQL", "Recognized as 1 of 3 representatives for an outstanding employee program in the Samsung HQ in South Korea", "Provided training on data structures and algorithms to interns"]}
            techStack={["Java", "JavaScript", "React", "MySQL", "SpringBoot", "PostgreSQL"]}
            companyLink="https://www.samsungsds.com/in/index.html"
          />
          {/* <ExperienceCard
            role="Computer Vision Co-op"
            company="IIT Kanpur"
            location="Chennai, India"
            duration="June - November 2020"
            description={["Developed and authored a patent for an identification system for cattle using Python for development and C++ for production for use in mobile handsets with low quality cameras.", " Implemented a pipeline consisting of object detection, de-skewing techniques, character localization and a digit recognizer with a prediction accuracy of 97%."]}
            techStack={["C++", "Python", "PyTorch", "OpenCV", "Android"]}
            companyLink="https://www.ncflexe.in"
          /> */}
    </div>
  );
}

export default Experience;