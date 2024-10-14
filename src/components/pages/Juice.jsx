import Card from "./Card"

const Juice = ({users }) => {
    const juice=users.filter((items)=>items.domain==="Juice")
  return (
    <div className="container">
        <div className="row d-flex py-5">
        {
            juice.map((items,index)=>
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

export default Juice