import { useEffect, useState } from "react";
import { Link } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export const Product = () => {
    const[data , setData] = useState([]);

    useEffect( () => {
        getData()
    }, [])

    const getData = async() => {
        try{
            const res = await fetch("https://fakestoreapi.com/products");
            const data = await res.json()
            setData(data);
            console.log(data)
        }
        catch(err){
            console.log(err);
        }
    }
 

    return <div>
        { data.map((e, i) => {
          return  <NavLink to={`/description/${e.id}`}><li>{e.title}</li> </NavLink>
        }) }
    </div>
}