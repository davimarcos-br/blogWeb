import React from 'react'
import './Tag.css'

const Tag = props => {
  // const lista = props.series.map((str) => 
  // {
  //   str = str.substr(0,3)
  //   return <p className= {str + ' disc text-uppercase'}>{str}</p>
  // })
   const lista = props.serie.map((str) => <p className= {str + ' Tag Serie'}>{str}</p>)

  return (
    <div className="d-flex flex-row border-top py-1 mt-auto  ">
    <p className="TagAutor Tag d-block d-sm-none px-2">{props.autor}</p> 
    <p className={props.disciplina + ' Tag'}>{props.disciplina}</p>
    <p className="Tag Data">{props.data}</p>
     {lista}
     </div>
    )
}





export default Tag