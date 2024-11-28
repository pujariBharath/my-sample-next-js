import React from "react";

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      title: "Case Study 1",
      description: "Description of case study 1.",
    },
    {
      id: 2,
      title: "Case Study 2",
      description: "Description of case study 2.",
    },
    {
      id: 3,
      title: "Case Study 3",
      description: "Description of case study 3.",
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Case Studies</h1>
      <ul>
        {caseStudies.map((study) => (
          <li key={study.id} style={{ marginBottom: "20px" }}>
            <h2>{study.title}</h2>
            <p>{study.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CaseStudies;
