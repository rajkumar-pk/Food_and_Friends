import React from 'react';
import restData from '../restApi.json'; 

const Qualities = () => {

  const qualitiesList = restData.data?.[0]?.ourQualities || restData.ourQualities || restData.qualities || [];

  return (
    <section className="qualities" id="qualities">
      <div className="container">
        {qualitiesList.map((element) => (
          <div className="card" key={element.id}>
            <img src={element.image} alt={element.title} />
            <p className="title">{element.title}</p>
            <p className="description">{element.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Qualities;