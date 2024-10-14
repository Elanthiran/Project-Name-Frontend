import { createContext ,useContext, useState,useEffect} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";





const UserContext =createContext({
    data:[],
    title: "",
    domain: "",
    head: "",
    price: "",
    image:()=>{},
    setData: () => {},
    setTitle: () => {},
    setDomain: () => {},
    setHead:()=>{},
    setImage:()=>{},
    Add: () => {},
    handleSubmit: () => {},
    handleUpdate: () => {},
    handleDelete: () => {},
    search:"",
    setSearch:()=>{},
    user:[],
    setUser:()=>{}
    
    
})
export const useThisContext=()=>useContext(UserContext)




const API = "http://localhost:4002/getItem";

export function UserContextProvider({children})
{
const[data,setData]=useState([])
const[title,setTitle]=useState("")
const[domain,setDomain]=useState("")
const[id,setId]=useState("")
const[head,setHead]=useState("")
const[price,setPrice]=useState("")
const[image,setImage]=useState("")
const[search,setSearch]=useState("")
const[user,setUser]=useState([])
const navigate = useNavigate();
const Add = (newData) => {
    setData((prevData) => [...prevData, newData]);
  };
   

  const handleSubmit = (e, Data) => {
    e.preventDefault();
    axios.post(`${API}`,Data) 
      .then((response) => {
        console.log(response.data);
         Add(response.data)
         navigate("/Crud")
        
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleUpdate =(id, data) => {
   axios
      .put(`${API}/${id}`, data)
      .then((response) => {
        const updatedUser = response.data;
        setData((prevData) =>
          prevData.map((user) => (user._id === id ? updatedUser : user))
        );
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  const handleDelete = (id) => {
  axios
      .delete(`${API}/${id}`)
      .then(() => {
        setData((prevData) => prevData.filter((user) => user._id !== id));
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  useEffect(() => {
    axios
      .get(API)
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);



const value=
{
    data,
    title,
    domain,
    head,
    price,
    image,
    setData,
    setTitle,
    setDomain,
    setHead,
    setPrice,
    setImage,
    Add,
    handleSubmit,
    handleUpdate,
    handleDelete,
    id,
    setId,
    search,
    setSearch,
    user,
    setUser
    
};
return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};