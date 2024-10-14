import { useThisContext } from "../../context/usercontext";
import Card from "./Card";

const All = ({ users }) => {
  
  return (
    <div className="container">
      <div className="row d-flex py-5">
        {users.map((items, index) => (
          <Card key={index} items={items} />
        ))}
      </div>
    </div>
  );
};

export default All;