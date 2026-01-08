const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gray-900"
    >
      <div className="max-w-xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-16">
          Get in Touch
        </h2>
        <p className="text-center text-lg text-gray-300 mb-8">
          Have a project in mind or just want to chat? Drop me a line below!
        </p>
        <div className="text-center mb-8">
          <a
            href="mailto:kvsupraja2710@gmail.com"
            className="bg-teal-600 text-white font-bold px-8 py-4 rounded-lg shadow-lg hover:bg-teal-400 transition-colors inline-block"
          >
            Send Me an Email
          </a>
        </div>
        <div className="mt-12 text-center space-y-4">
          <p className="text-xl font-semibold text-white">
            Connect with me on social media:
          </p>
          <div className="flex justify-center space-x-6">
            {/* GitHub Icon */}
            <a
              href="https://github.com/Supraja-Koppisetty"
              target="_blank"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Github-Profile"
            >
              <svg
                className="w-8 h-8"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.417 2.865 8.174 6.824 9.504.499.09.679-.217.679-.485 0-.237-.015-.866-.015-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.156-1.11-1.47-1.11-1.47-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.092.39-1.983 1.029-2.682-.103-.253-.446-1.272.098-2.641 0 0 .84-.268 2.75 1.022A9.607 9.607 0 0112 4.041c.85.003 1.701.144 2.502.485 1.909-1.29 2.747-1.022 2.747-1.022.546 1.369.202 2.388.1 2.641.64.699 1.029 1.59 1.029 2.682 0 3.848-2.339 4.698-4.566 4.943.359.369.678.1.678.951 0 1.338-.015 2.418-.015 2.744 0 .268.18.587.68.484A10.017 10.017 0 0022 12.017C22 6.484 17.523 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            {/*  LinkedIn Icon */}
            <a
              href="https://linkedin.com/in/kvsupraja"
              target="_blank"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="LinkedIn Profile"
            >
              <svg
                className="w-8 h-8"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.535-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
