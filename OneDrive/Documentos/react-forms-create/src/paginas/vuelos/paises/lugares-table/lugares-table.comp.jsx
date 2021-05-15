import React from 'react'
import TablaCiudadesLugar from '../ciudades-lugares/ciudades-lugares-table.comp'
import TablaPaisLugar from '../paises-lugares/paises-lugares-table.comp'
import './lugares-table.style.css'

const TablaLugares = (props) => {
        
        return (
            <div className="lugares-table">
                Lugares Turísticos
                {props.lugaresList.map((paisLugar,indexpaisLugar)=>{
                    return(<React.Fragment key={paisLugar.id}>
                        <TablaPaisLugar nombrePaisLugar={paisLugar.nombrePaisLugar}/>
                        {paisLugar.ciudadTuristica.map((ciudadTuristica,indexCiudadTuristica)=>{
                            return (
                                <TablaCiudadesLugar key={ciudadTuristica.id}
                                ciudadTuristica={ciudadTuristica}/>
                            )

                        })}
                    </React.Fragment>

                    )
                })}
            </div>
        )
    }

export default TablaLugares;