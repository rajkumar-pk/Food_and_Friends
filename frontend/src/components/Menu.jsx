import React from 'react'
import data from '../restApi.json'

const Menu = () => {
  return (
    <section className="menu" id="menu">
      <div className="container">
        <div className="heading_section">
          <h2 className="heading">POPULAR DISHES</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat vitae eligendi cum reiciendis sint enim explicabo hic voluptates amet laudantium!</p>
        </div>
        <div className="dishes_container">
            {data.data[0]?.dishes?.map((element) => {
                return (
                    <div className="card" key={element.id}>
                        <img src={element.image} alt={element.title} />
                        <h3 className="dish_title">{element.title}</h3>
                        <button>{element.category}</button>
                    </div>
                )
            })}
        </div>
      </div>
    </section>
  )
}

export default Menu