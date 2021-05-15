import React from 'react'
import './ciudades-lugares.style.css'

const TablaCiudadesLugar = (props) => {
        return (
            <div className="tabla-ciudadesLugar">
                {props.ciudadTuristica.lugarCiudad} 
                <div>
                {props.ciudadTuristica.nomCiudad} 
                </div>
                
            </div>
        )
    }

export default TablaCiudadesLugar;