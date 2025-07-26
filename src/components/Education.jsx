const Education = () => {
  return (
    <section className="fade-in-on-scroll">
      <h3>Education</h3>
      <div className="education-tile">
        <img src={`${import.meta.env.BASE_URL}mkce-college.jpg`} alt="MKCE College" />
        <h4>B.Tech in Information Technology</h4>
        <p>M. Kumarasamy College of Engineering</p>
        <p>2024 - 2028</p>
      </div>
      <div className="education-tile">
        <img src={`${import.meta.env.BASE_URL}maruthi-school.jpg`} alt="Maruthi School" />
        <h4>HSC - Maths & Computer Science</h4>
        <p>Shri Maruthi Matric School</p>
        <p>93.0% - School Second in SSLC, Top Mark in HSC</p>
      </div>
    </section>
  );
};

export default Education;
