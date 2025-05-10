import React from 'react';
import '../styles/AboutSection.css';

function AboutSection({ data }) {
  if (!data) {
    return null;
  }

  const { about } = data;

  return (
    <section className="section hurrah" id="about">
    <div  className="container" >
      <h2 style={{textAlign: 'center'}}>{about.title}</h2>
      <div>
        <p className="p1">TIET in collaboration with NITTTR Chandigarh is organizing a conference on Transforming Higher Education
          for Future: Education 4.0.<br />
          This conference focuses on the evolving landscape of higher education in the era of
          digitization and Education 4.0. It explores the integration of emerging technologies such as
          Artificial Intelligence, automation, and advanced engineering to transform the learning
          environment, curricula, and pedagogy. Bringing together the educators, policymakers, researchers, and innovators, the conference
          aims to inspire strategic approaches for embedding technology into academia and
          industry. The goal is to enhance the quality of education and address the dynamic needs
          of a globalized world.
          With a strong emphasis on implementing Education 4.0 standards and the Outcome-
          Based Education (OBE) framework, now a cornerstone for higher education
          institutions, this conference invites original research papers on diverse topics which are 
          mentioned in <a href="#Conference_Tracks">Conference Tracks</a>
</p><br />
        <div className="btns">
          <a href="images/Objectives.pdf" target="_blank">Conference Objectives</a>
          <a href="images/outcome.pdf" target="_blank">Expected Outcomes</a>
          <a href="images/THEFE 4.0.pdf" target="_blank"> Call for Papers </a>
        </div>
      </div>
    </div>
  </section>
  );
}

export default AboutSection; 