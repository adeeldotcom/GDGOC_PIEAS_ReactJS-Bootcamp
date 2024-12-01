import React from 'react';

const ClassItem = ({ name, description, duration }) => (
  <div className="mb-6 bg-white p-6 rounded-lg shadow-md">
    <h3 className="text-xl font-semibold text-blue-800 mb-2">
      {name} <span className="float-right text-blue-600">{duration}</span>
    </h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Classes = ({ classList }) => {
  return (
    <section id="classes" className="py-20 bg-gray-200">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-blue-800">Our Classes</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {classList.map((classItem, index) => (
            <ClassItem 
              key={index}
              name={classItem.name}
              description={classItem.description}
              duration={classItem.duration}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Classes;
