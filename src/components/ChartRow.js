import React from 'react';


function ChartRow(props){
    return (
                <tr>
                    <td>{props.name}</td>
                    <td>{props.description}</td>
                    <td>{props.intensity}</td>
                </tr>
            )
    }
    
        

export default ChartRow;