import profileImage from "../assets/profile_picture.jpeg";
const About = () => {
  return (
    <section
      id="about"
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gray-900"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-16">
          About Me
        </h2>
        <div className="grid md:grid-cols-3 gap-12 items-start">
          <div className="md:col-span-1 flex justify-center">
            <img
              src={profileImage}
              alt="Professional Portrait of Veera Supraja"
              className="rounded-xl shadow-2xl border-4 border-teal-600 object-cover w-full max-w-xs transition-transform duration-500 hover:scale-[1.02]"
            />
          </div>
          <div className="md:col-span-2 text-lg text-gray-300 space-y-6">
            <p>
              Hello! I'm Veera Supraja, a passionate Software Engineer with
              around 2 years of experience building and deploying scalable web
              applications. My journey started with a curiosity for how things
              work online, and it quickly grew into a dedication to clean code,
              performance, and user-centric design.
            </p>
            <p>
              I specialize in the MERN and MEAN stack and thrive on tackling
              complex problems with elegant, efficient solutions. Whether it's
              architecting a robust backend API or crafting pixel-perfect
              frontend interfaces, I bring energy and attention to detail to
              every project.
            </p>
            <p>
              Beyond coding, I'm interested in Singing, Pencil Art. I believe
              continuous learning and collaboration are key to growth in
              technology. I am currently seeking Frontend/Full-Stack Developer
              opportunities. Let's build something amazing together!
            </p>
            <a
              href="https://drive.google.com/uc?export=download&id=13VSwN-2sY1GIPZEcelRIe4aWnnmPFiHI"
              download="VeeraSuprajaK-resume.pdf"
              className="inline-flex items-center text-teal-400 hover:text-teal-300 font-semibold transition-colors group"
            >
              Download Resume (PDF)
              <svg
                className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
