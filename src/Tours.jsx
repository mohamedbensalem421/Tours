import React from 'react'
import { useState } from "react"


function Tours({name, id, price, image, info, remove}) {
  const [readMore ,setReadMore ] = useState(false)
  console.log();
  return (
          <article>
          <span>{`$ ${price}`}</span>
          <img src={image} alt={name} />
          <div className="content">
          <h3>{name}</h3>
          <p>{readMore ? info : `${info.substring(0,200)}...`}
            <button onClick={() =>setReadMore(!readMore)}>{readMore ? 'Show Less' : 'Read More'}</button>
          </p>
          <button onClick={() =>remove(id)}>Not Interested</button>
          </div>
        </article>
  )
}

export default Tours