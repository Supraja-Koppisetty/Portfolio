const Hero = () => {
  return (
    <section
      id="hero"
      className="flex items-center justify-center flex-col h-screen px-4 sm:px-6 lg:px-8 bg-gray-900"
    >
      <div className="max-w-5xl mx-auto text-center space-y-8">
        {/*  larger font size is needed for this */}
        <p className="text-teal-400 text-xl sm:text-2xl">
          Hi, I'm Veera Supraja
        </p>
        <h1 className="text-white text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
          I craft elegant solutions with
          <span className="text-teal-400"> modern web technologies</span>
        </h1>
        <p
          className="text-xl text-gray-400 mb-10 fade-in-up"
          style={{ animationDelay: "0.5s" }}
        >
          [Full-Stack Developer | UI Specialist]
        </p>
        <a
          className="bg-teal-600 text-white px-8 py-3 rounded-lg shadow-xl hover:bg-teal-400 transition-colors inline-block"
          href="#projects"
        >
          View My Work
        </a>
      </div>
    </section>
  );
};
export default Hero;
