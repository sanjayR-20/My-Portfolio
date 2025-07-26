const Resume = () => {
  return (
    <section className="resume fade-in-on-scroll">
      <h3>Resume</h3>
      <div className="resume-image-container">
        <img
          src={`${import.meta.env.BASE_URL}resume.jpg`}
          alt="Sanjay R Resume"
          className="resume-image"
        />
      </div>
    </section>
  );
};

export default Resume;