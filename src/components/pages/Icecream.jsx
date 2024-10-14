import Card from "./Card"

const Icecream = ({users}) => {
    const icecream=users.filter((items)=>items.domain==="Icecream")
  return ( 
    <div className="container">
        <div className="row d-flex py-5">
        {
            icecream.map((items,index)=>
            {
                return(
<Card items={items} key={index} />
                )
            })

        }


    </div>
    </div>
  )
}

export default Icecream