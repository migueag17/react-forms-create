import React from 'react';
import './paises-lugares-table.style.css'

const TablaPaisLugar = (props) => {
    return (
        <div className= "paises-lugares-table">
            {props.nombrePaisLugar}
    
        </div>
    )
}
export default TablaPaisLugar;