import React, { useState, useEffect } from "react";
import SmallCard from './SmallCard';




function ContentRowMovies(){
    const [coffee, setCoffee] = useState([]);
    const [grindings, setGrinding] = useState([]);
    const [users, setUser] = useState([]);


    useEffect(() => {
        fetch("http://localhost:3030/api/product")
          .then((response) => {
            return response.json();
          })
          .then((coffees) => {
            setCoffee(coffees.data);
          })
          .catch((error) => console.log(error));
      }, []);
    
      useEffect(() => {
        fetch("http://localhost:3030/api/grinding")
          .then((response) => {
            return response.json();
          })
          .then((grinding) => {
            setGrinding(grinding.data);
          })
          .catch((error) => console.log(error));
      }, []);

      useEffect(() => {
        fetch("http://localhost:3030/api/user")
          .then((response) => {
            return response.json();
          })
          .then((users) => {
            setUser(users.data);
          })
          .catch((error) => console.log(error));
      }, []);
    
    
    let ProductsInDb = {
        title: 'Products in Data Base',
        color: 'primary', 
        cuantity: coffee.length,
        icon: 'fa-coffee'
    }
       
    let Users = {
        title:' Total Users', 
        color:'success', 
        cuantity: users.length,
        icon:'fa-user-check'
    }    
    
    let Grindings = {
        title:'Grindings Types' ,
        color:'warning',
        cuantity: grindings.length,
        icon:'fa-seedling'
    }
    
    let cartProps = [ProductsInDb, Users, Grindings];

    return (
    
        <div className="row">
            
            {cartProps.map( (movie, i) => {

                return <SmallCard {...movie} key={i}/>
            
            })}

        </div>
    )
}

export default ContentRowMovies;