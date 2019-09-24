import React from 'react'
import './Disc.css'

const Disc = props => {
  const lista = props.disciplinas_autor.map((str) => 
  {
    str = str.substr(0,3)
    return <p className= {str + ' disc text-uppercase'}>{str}</p>
  })

  return <>lista</>

}





export default Disc