import React, { useState, useEffect } from "react";
import ChartRow from './ChartRow';


function Chart (){

    const [coffee, setCoffee] = useState([]);


    useEffect(() => {
        fetch("http://localhost:3030/api/products/firstCoffee")
          .then((response) => {
            return response.json();
          })
          .then((coffees) => {
            setCoffee(coffees.data);
          })
          .catch((error) => console.log(error));
      }, []);



    return (
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Descripcion</th>
                                <th>intensidad</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                            coffee.map( ( row , i) => {
                                return <ChartRow { ...row} key={i}/>
                            })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default Chart;