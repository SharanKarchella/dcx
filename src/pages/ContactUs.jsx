export default function ContactUs() {
  const contacts = [
    {
      name: "Rahul Sharma",
      title: "Customer Relations Manager",
      phone: "+91 987-654-3210",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Dhanush Patel",
      title: "Business Development Lead",
      phone: "+91 876-543-2109",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
    },
  ];

  const officeAddress = {
    line1: "123 Innovation Drive",
    line2: "Tech City, Mumbai, MH 400001",
    country: "India",
    email: "info@company.com",
    phone: "+91 22-1234-5678",
  };

  return (
    <section
      className="py-16 sm:py-20 px-4 sm:px-6 min-h-screen"
      style={{
        backgroundImage: `
          linear-gradient(to right, #d946ef, #06b6d4), 
          url('https://images.unsplash.com/photo-1528459801416-a63296b8ee56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80')
        `,
        backgroundBlendMode: "overlay",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto max-w-6xl">
        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-12 sm:mb-16 text-gray-900 drop-shadow-md tracking-wide animate-fade-in">
          Contact Us
        </h1>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 sm:mb-16">
          {contacts.map((contact, index) => (
            <div
              key={index}
              className="bg-white p-6 sm:p-8 rounded-xl shadow-lg flex flex-col items-center text-center hover:shadow-xl transition-all duration-300 border border-gray-200"
            >
              <img
                src={contact.image}
                alt={contact.name}
                className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-4 border-indigo-500 mb-4 object-cover"
              />
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                {contact.name}
              </h2>
              <h3 className="text-lg sm:text-xl font-medium text-indigo-600 mb-3">
                {contact.title}
              </h3>
              <p className="text-gray-700 text-base sm:text-lg">
                <span className="font-semibold">Phone:</span> {contact.phone}
              </p>
            </div>
          ))}
        </div>

        {/* Office Address */}
        <div className="max-w-2xl mx-auto bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-gray-200 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Our Office
          </h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            {officeAddress.line1}
            <br />
            {officeAddress.line2}
            <br />
            {officeAddress.country}
          </p>
          <p className="text-gray-700 text-base sm:text-lg mt-4">
            <span className="font-semibold">Email:</span> {officeAddress.email}
            <br />
            <span className="font-semibold">Phone:</span> {officeAddress.phone}
          </p>
        </div>
      </div>
    </section>
  );
}
