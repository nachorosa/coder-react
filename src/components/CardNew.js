const CardNew = (props) => {
  return (
    <>
        <div className="tienda" >
            {props.otroComponente({name:"cocaa", price: 234 })}
            {props.otroComponente({name:"pepsii", price: 240 })}
            {props.otroComponente({name:"aguaa", price: 180 })}
            {props.otroComponente({name:"cervezaa", price: 270 })}
        </div>
    </>
  )
}
export default CardNew