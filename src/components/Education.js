import React from "react";

const EducationCard = ({
    degree,
    university,
    location,
    period,
    courses,
    research,
    universityLink,
  }) => {
    return (
      <div
        style={{
          backgroundColor: "rgba(30, 30, 30, 1)", // Navy-like background
          color: "#cce7ff", // Soft blue text
          padding: "16px",
          // lineHeight: 1.5,
          borderRadius: "8px",
          maxWidth: "80%",
          margin: "16px auto",
          fontFamily: "Courier New, Courier, monospace",
          boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
        }}
      >
        {/* Degree and University */}
        <h3 style={{ margin: "0 0 8px" }}>
          {degree} ·{" "}
          <a
            href={universityLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#cce7ff", textDecoration: "none", fontWeight: "bold" }}
          >
            {university}
          </a>
        </h3>
  
        {/* Location and Period */}
        <p style={{ margin: "0 0 16px", fontSize: "14px", opacity: 0.8 }}>
          {period} · {location}
        </p>
  
        {/* Research Project */}
        {research && (
          <>
          <div style={{ margin: "20px 25px", textAlign: 'left' }}>
            {" "}
            <a
                href={"https://regamexr.sites.northeastern.edu"}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#cce7ff", textDecoration: "none"}}
            >
                As part of the <b>ReGame-XR Lab</b>:
            </a>
            </div>
            <p style={{ margin: "20px 20px", lineHeight: "1.8", textAlign: 'left' }}>
            {research.map((bullet, index) => (
                    <div key={index} style={{ margin: "10px 0px"}}>· {bullet}</div>
                ))}
                </p>
            {/* <p style={{ margin: "0 0 16px", lineHeight: "1.6" }}>{research}</p> */}
          </>
          
        )}

        {/* Relevant Courses */}
        <p style={{ margin: "0 0 8px", fontWeight: "bold" }}>Coursework</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "15px", justifyContent: 'center'}}>
            {courses.map((tech, index) => (
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
  

function Education() {
  return (
    <div className='container' style={{background: 'rgba(35, 35, 35, 0.6)'}}>
        <EducationCard
            degree="M.S. Specializing in Machine Learning"
            university="Northeastern University"
            location="Boston, USA"
            period="September 2022 — December 2024"
            courses={[
                "Machine Learning with Small Data",
                "Advanced Computer Vision",
                "Natural Language Processing",
                "Applied Probability & Stochastic Processes",
            ]}
            research={["Designed and implemented an end-to-end ML system, establishing a data pipeline for collecting eye-tracking data and training an object detection model (YOLO) in PyTorch, to statistically model human gaze behavior and characterize spatial awareness in games", "Led a team of 5 interns to develop a diabetes management app in Unity, incorporating an LSTM model to predict glucose fluctuations, and creating data visualization dashboards", "Built a VR application in Unity (C#) to replace the Bruininks-Oseretsky Test (BOT-2) for Motor Proficiency as a means for early intervention for Autism Spectrum Disorder and enhance data collection"]}
            universityLink="https://www.northeastern.edu"
            />
        {/* <EducationCard
            degree="Bachelor of Technology in Electrical & Computer Engineering"
            university="National Institute of Technology"
            location="Kurukshetra, India"
            period="Auguest 2016 — May 2020"
            courses={[
                "Data Structures & Algorithms",
                "Object Oriented Programming",
                "Image Processing",
                "Computer Networking",
            ]}
            universityLink="https://www.xyzuniversity.edu"
            />  */}
    </div>
  );
}

export default Education;