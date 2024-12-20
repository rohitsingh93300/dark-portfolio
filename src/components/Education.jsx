import React from "react";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Science (BSc)",
      institution: "Bangabashi Morning College",
      year: "2018 - 2021",
      description: "Graduated with a strong foundation in critical thinking and problem-solving.",
      icon: "🎓",
    },
    {
      degree: "Higher Secondary (11th-12th) ",
      institution: "Adarsh Madhyamik Vidhyalaya",
      year: "2016 - 2018",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit Vel molestiae.",
      icon: "🎓",
    },
    {
      degree: "Secondary (10th)",
      institution: "A.R.N.C Vidhyalya",
      year: "2016",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit Vel molestiae.",
      icon: "🎓",
    },
  ];

  const experience = [
    {
      role: "Founder & Developer",
      company: "Webelite Builders",
      year: "2024 - Present",
      description: "Founded a digital marketing and web development agency, delivering tailored solutions.",
      icon: "💼",
    },
    {
      role: "MERN Stack Developer (Intern)",
      company: "Company Name",
      year: "2023",
      description: "Developed and optimized MERN stack applications, enhancing user experience.",
      icon: "💻",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-gray-950 to-gray-950 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-extrabold text-center text-gray-300 mb-12">
          Education & Experience
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Education Section */}
          <div>
            <h3 className="text-3xl font-semibold text-gray-300 mb-6">Education</h3>
            {education.map((edu, index) => (
              <div
                key={index}
                className="flex items-start bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2 mb-6"
              >
                <div className="text-4xl mr-6 text-blue-500">{edu.icon}</div>
                <div>
                  <h4 className="text-xl font-bold text-gray-200">{edu.degree}</h4>
                  <p className="text-gray-300">{edu.institution}</p>
                  <p className="text-gray-300 text-sm italic">{edu.year}</p>
                  <p className="text-gray-300 mt-2">{edu.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Experience Section */}
          <div>
            <h3 className="text-3xl font-semibold text-gray-300 mb-6">Experience</h3>
            {experience.map((exp, index) => (
              <div
                key={index}
                className="flex items-start bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2 mb-6"
              >
                <div className="text-4xl mr-6 text-green-500">{exp.icon}</div>
                <div>
                  <h4 className="text-xl font-bold text-gray-200">{exp.role}</h4>
                  <p className="text-gray-300">{exp.company}</p>
                  <p className="text-gray-300 text-sm italic">{exp.year}</p>
                  <p className="text-gray-300 mt-2">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
