export default function WhoWeAre() {
  const founders = [
    {
      name: "Dhanush Chandra",
      title: "Founder's & CEO of DCX",
      details: [
        "A passionate entrepreneur dedicated to making Swiss luxury accessible to all. With a master's degree from the University of Zurich, I have honed my skills in business management and strategic leadership. At DCX, we are transforming luxury travel and lifestyle experiences. In addition to my role at DCX, I have a keen interest in investing in tech companies, particularly those innovating in AI and digital solutions. I am also passionate about event organizing, creating unforgettable experiences that bring people together"
      ],
      image: "images/whoAreWe/dhanush.png"
    },
    {
      name: "Munilal Jatavath",
      title: "Founder's & CTO of DCX",
      details: [
        "I handle all business operations and thrive across multiple domains. With experience as a tour guide and operational head, I bring a well-rounded perspective to every aspect of the company. My journey has shaped my ability to lead, innovate, and provide exceptional experiences in luxury travel and lifestyle."
      ],
      image: "images/whoAreWe/muni.png"
    }
  ];

  return (
    <section
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-100 bg-cover bg-center min-h-screen"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80')`,
        backgroundBlendMode: 'overlay'
      }}
    >
      <div className="container mx-auto max-w-7xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-12 sm:mb-16 text-white drop-shadow-lg tracking-wide">
          Who Are We
        </h1>

        <div className="space-y-8 sm:space-y-10">
          {founders.map((founder, index) => (
            <div
              key={index}
              className="max-w-4xl mx-auto bg-white/90 backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-xl flex flex-col md:flex-row gap-6 sm:gap-8 hover:shadow-2xl transition-all duration-300 border border-gray-100/50"
            >
              <img
                src={founder.image}
                alt={founder.name}
                className="w-full md:w-1/2 max-h-80 sm:max-h-96 object-contain rounded-xl shadow-md transform hover:scale-105 transition-transform duration-300"
              />
              <div className="md:w-1/2 space-y-4 sm:space-y-5">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">{founder.name}</h2>
                <h3 className="text-lg sm:text-xl font-medium text-indigo-600">{founder.title}</h3>
                <p className="text-gray-800 leading-relaxed text-base sm:text-lg">{founder.details[0]}</p>
                <p className="text-gray-800 leading-relaxed text-base sm:text-lg">{founder.details[1]}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}