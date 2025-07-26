const projects = [
  {
    title: 'PrintAway – Smart Printing Service',
    description: 'A web-based platform for college students and staff to upload documents for printing, choose options like color and pickup time, and get admin approval. Built with Flask, MongoDB, HTML/CSS, and JavaScript.',
  },
  {
    title: 'CEASER – Cipher Using Steganography',
    description: 'A security project embedding Caesar Cipher-encrypted messages in images using steganography for secure communication.',
  },
  {
    title: 'Telegram Bot for Municipal Corporation',
    description: 'A Telegram bot for automating public services like complaint registration, status tracking, and announcements.',
  },
  {
    title: 'ShareCircle – Optimal Neighbourhood Sharing',
    description: 'A sharing economy platform for community members to borrow and lend items, promoting sustainability.',
  },
  {
    title: 'More Projects Coming Soon...',
    description: 'Stay tuned for upcoming projects in full-stack development and innovative solutions!',
  },
];

const Projects = () => {
  return (
    <section className="fade-in-on-scroll">
      <h3>Projects</h3>
      <div className="tree">
        {projects.map((project, index) => (
          <div key={index} className="tree-branch">
            <h4>{project.title}</h4>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;