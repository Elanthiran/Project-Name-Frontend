import Card from "./Card"

const Cake = ({users }) => {
    const cake=users.filter((items)=>items.domain==="Cake")
  return (
    <div className="container">
        <div className="row d-flex py-5">
        {
            cake.map((items,index)=>
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

export default Cake