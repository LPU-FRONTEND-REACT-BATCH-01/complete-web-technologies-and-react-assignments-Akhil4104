import React from 'react'
import { isExportSpecifier } from 'typescript'

const Card = ({ data }) => {
  return (
    <div>
      <h2>{data.title}</h2>
      <p>{data.description}</p>
    </div>
  )
}

export default Card;