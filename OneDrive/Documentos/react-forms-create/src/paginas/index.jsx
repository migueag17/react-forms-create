import React, { useState } from 'react';
import './index.style.css'
import TablaLugares from './vuelos/paises/lugares-table/lugares-table.comp';


import TablaVuelos from './vuelos/paises/tabla-vuelos/vuelos-table.comp';

const VuelosPag = (props) => {
    
    let vuelosList = [
           
                    { 
                        id:"v1p1",
                      paisNombre:"Vuelos Nacionales" ,
                      ciudades:[
                        {   
                            id:"v1p1c1",
                           nombreCiudad:'Medellin',
                           precio: '540000',
                           fecha:'11 Mayo',
                        },
                        {   
                            id:"v1p1c2",
                            nombreCiudad:'Manizales',
                            precio: '790000',
                            fecha:'19 Mayo',
                         },
                         {   
                            id:"v1p1c3",
                            nombreCiudad:'Bogota',
                            precio: '800000',
                            fecha:'09 Mayo',
                         },
                         {   
                            id:"v1p1c4",
                            nombreCiudad:'Cartagena',
                            precio: '1200000',
                            fecha:'22 Mayo',
                         },
                         {   
                            id:"v1p1c5",
                            nombreCiudad:'Santa Marta',
                            precio: '1200000',
                            fecha:'29 Mayo',
                         },
                         {   
                            id:"v1p1c6",
                            nombreCiudad:'Armenia',
                            precio: '1200000',
                            fecha:'27 Mayo',
                         },
                         {   
                            id:"v1p1c7",
                            nombreCiudad:'Cali',
                            precio: '1200000',
                            fecha:'02 Mayo',
                         },
                         {   
                            id:"v1p1c8",
                            nombreCiudad:'Ibague',
                            precio: '1200000',
                            fecha:'02 Mayo',
                         },
                        ]  
                      
                
            },
          {
                    id:"v2p2",
                    paisNombre:"Vuelos Internacionales" ,
                    ciudades:[
                      {  
                        id:"v2p2c1",
                         nombreCiudad:'Madrid',
                         precio: '5400000',
                         fecha:'11 Mayo',
                      },
                      {
                        id:"v2p2c2",
                          nombreCiudad:'Barcelona',
                          precio: '3500000',
                          fecha:'16 Mayo',
                       },
                       {  
                        id:"v2p2c3",
                         nombreCiudad:'Paris',
                         precio: '7800000',
                         fecha:'31 Octubre',
                      },
                      {
                        id:"v2p2c4",
                          nombreCiudad:'Moscú',
                          precio: '4300000',
                          fecha:'16 Octubre',
                       },
                       {
                        id:"v2p2c5",
                          nombreCiudad:'Londres',
                          precio: '2700000',
                          fecha:'30 Diciembre',
                       },
                       {
                        id:"v2p2c6",
                          nombreCiudad:'Dubai',
                          precio: '7800000',
                          fecha:'13 Julio',
                       },
                       {
                        id:"v2p2c7",
                          nombreCiudad:'Singapur',
                          precio: '2150000',
                          fecha:'12 Junio',
                       },
                       {
                        id:"v2p2c8",
                          nombreCiudad:'Tokio',
                          precio: '6700000',
                          fecha:'19 Agosto',
                       },
                    ]  
        }
    ];
        
    const [vuelos,setVuelos] = useState(vuelosList)

    let lugaresList =[
        {
            id:"l1",
            nombrePaisLugar: "Colombia",
            ciudadTuristica:[
                {
                    id:"l1c1",
                    lugarCiudad:"Parque Tayrona",
                    nomCiudad:"Santa Marta",
                },
                {
                    id:"l1c2",
                    lugarCiudad:"Islas del Rosario",
                    nomCiudad:"Cartagena",
                },
                {
                    id:"l1c3",
                    lugarCiudad:"Valle del Cocora",
                    nomCiudad:"Quindío",
                },
                {
                    id:"l1c4",
                    lugarCiudad:"Catedral de Sal",
                    nomCiudad:"Zipaquirá",
                },
                {
                    id:"l1c5",
                    lugarCiudad:"Museo del oro",
                    nomCiudad:"Bogotá",
                },
                {
                    id:"l1c6",
                    lugarCiudad:"Piedra del Peñol",
                    nomCiudad:"Guatapé",
                },
            ]




        },

        {
            id:"l2",
            nombrePaisLugar: "España",
            ciudadTuristica:[
                {
                    id:"l2c1",
                    lugarCiudad:"Casa Millá",
                    nomCiudad:"Barcelona",
                },
                {
                    id:"l2c2",
                    lugarCiudad:"Alhambra",
                    nomCiudad:"Granada",
                },
                {
                    id:"l2c3",
                    lugarCiudad:"Pico del Tefle",
                    nomCiudad:"Tenerife",
                },
                {
                    id:"l2c4",
                    lugarCiudad:"Park Guell",
                    nomCiudad:"Barcelona",
                },
                {
                    id:"l2c5",
                    lugarCiudad:"Palacio Real",
                    nomCiudad:"Madrid",
                },
                {
                    id:"l2c6",
                    lugarCiudad:"Catedral de Barcelona",
                    nomCiudad:"Barcelona",
                },
            ]  
        }
    ];

    const [lugares, setLugares] = useState(lugaresList)

    const [nombrePais, setNombrePais] = useState('v1p1');
    const [nombreCiudad, setNombreCiudad] = useState('');
    const [precio, setPrecio] = useState(0);
    const [fecha, setFecha] = useState('');

    const [nombreCiudadValidacion, setnombreCiudadValidacion] = useState('');
    const [fechaValidacion, setfechaValidacion] = useState('');
    const [precioValidacion, setprecioValidacion] = useState('');
    let validate = true;

    const agregarVuelo = (event) =>{
        event.preventDefault();
        console.log('nombrePais: ' + nombrePais);
        console.log('nombreCiudad: ' + nombreCiudad);
        console.log('precio: ' + precio);
        console.log('fecha: ' + fecha);

        if(nombreCiudad == null || nombreCiudad ==''){
            validate = false;
            setnombreCiudadValidacion("Nombre obligatorio");
        }else {
            setnombreCiudadValidacion("");
        }
        if(fecha == null || fecha =='' ){
            validate = false;
            setfechaValidacion("Fecha Obligatoria");
        }else {
            setfechaValidacion("");
        }
            if(precio == null || precio <= 0){
                validate = false;
                setprecioValidacion("El precio debe ser mayor a 0");
            }else {
                setprecioValidacion("");
            }
        if(validate == true){
            const newVuelo={
                id:nombreCiudad,
                nombreCiudad:nombreCiudad,
                precio: precio,
                fecha:fecha,
            };
    
            const nuevaListaVuelos=[];
                for(let i =0; i < vuelos.length; i++) {
                    console.log(nombrePais);
                    console.log(vuelos[i].id)
                  if(vuelos[i].id !== nombrePais) {
                    nuevaListaVuelos.push(vuelos[i]);
                  }else {
                    nuevaListaVuelos.push(
                      {
                        ...vuelos[i], 
                        ciudades:[...vuelos[i].ciudades, newVuelo]
                      }
                    );
                  }
                }
                setVuelos(nuevaListaVuelos);
        }
    }

    const [nombrePaisLugar,setNombrePaisLugar] = useState('l1');
    const [nombreLugar,setNombreLugar] = useState('');
    const [nombreCiudadLugar,setNombreCiudadLugar] = useState('');

    const [nombrePaisValidacion, setNombrePaisValidacion] = useState('');
    const [nombreLugarValidacion, setNombreLugarValidacion] = useState('');
    const [nombreLugarCiudadValidacion, setLugarCiudadValidacion] = useState('');
    let validateLugar = true;
    
    const agregarLugar = (event) =>{
        event.preventDefault();
        console.log('nombrePaisLugar: ' + nombrePaisLugar);
        console.log('nombreLugar: ' + nombreLugar);
        console.log('nombreCiudadLugar: ' + nombreCiudadLugar);
        
        if(nombrePaisLugar == null || nombrePaisLugar ==''){
            validateLugar = false;
            setNombrePaisValidacion("Nombre Pais obligatorio");
        }else {
            setNombrePaisValidacion("");
        }
        
        if(nombreLugar == null || nombreLugar ==''){
            validateLugar = false;
            setNombreLugarValidacion("Nombre Lugar obligatorio");
        }else {
            setNombreLugarValidacion("");
        }
        
        if(nombreCiudadLugar == null || nombreCiudadLugar ==''){
            validateLugar = false;
            setLugarCiudadValidacion("Nombre Ciudad obligatorio");
        }else {
            setLugarCiudadValidacion("");
        }
        if(validateLugar == true){
            const newLugar={
                id:nombrePaisLugar,
                lugarCiudad:nombreLugar,
                nomCiudad:nombreCiudadLugar,
            };
    
            const NuevaListaLugares=[];
                for(let i =0; i < lugares.length; i++) {
                
                  if(lugares[i].id !== nombrePaisLugar) {
                    NuevaListaLugares.push(lugares[i]);
                  }else {
                    NuevaListaLugares.push(
                      {
                        ...lugares[i], 
                        ciudadTuristica:[...lugares[i].ciudadTuristica, newLugar]
                      }
                    );
                  }
                }
                setLugares(NuevaListaLugares);
        }
        
    }


    return(
    <div>
        
        <header>
            <h1 className="titulo">Aeropuerto Manizales </h1>
        </header>

        <div className="nav-color">
            <nav className="navegacion-principal contenedor">
                <a> Inicio</a>
                <a>Ofertas De Vuelos</a>
                <a>Crear Vuelo</a>
                <a>Lugares Turísticos</a>
                <a>Crear Lugares Turísticos</a>
            </nav>
        </div> 
        
        <div className="principal">
            <div className="contenedor-vuelos">
            <div>
        <main className="contenedor2 sombra">
            <section>
                <h2>Crear Vuelo</h2>
                <form className="formulario">
                    <fieldset>
                        <legend>Llena todos los campos</legend>
                        <div className="contenedor-campos">
                        <div className="campo">
                        <label> Tipo de Vuelo </label>
                        </div>
                        <div className="campo">
                            <select value={nombrePais}
                            onChange={(event)=>{
                                console.log(event.target.value);
                                setNombrePais(event.target.value);
                            }}
                            className="input-text">
                           <option value="v1p1">Vuelos Nacionales</option>
                           <option value="v2p2">Vuelos Internacionales</option>
                           </select></div>

                        <div className="campo">
                            <label > Nombre ciudad</label>
                            <input value={nombreCiudad}
                            onChange={(event)=>{
                                setNombreCiudad(event.target.value);
                            }}
                            className="input-text" type="text" placeholder="Nombre ciudad"/>
                        </div>
                
                        <div className="campo">
                             <label>Precio</label>
                            <input value={precio}
                            onChange={(event)=>{
                                setPrecio(event.target.value);
                            }}
                            className="input-text" type="number" placeholder="Precio vuelo"/>
                        </div>
                
                        <div className="campo">
                            <label>Fecha</label>
                            <input value={fecha}
                            onChange={(event)=>{
                                setFecha(event.target.value);
                            }}
                            className="input-text" type="date" placeholder="Fecha vuelo"/>

                        </div>
                
                    </div>
            <span className='error'>{nombreCiudadValidacion}</span>
            <span className='error'>{fechaValidacion}</span>
            <span className='error'>{precioValidacion}</span>
            <div className="alinear-derecha flex">
            
                <input onClick={agregarVuelo}
                 className="boton w-100" type="submit" value="Crear"/>
            </div>

                    </fieldset>

                </form>
            </section>
        </main>
        </div>
            <TablaVuelos 
            vuelosList={vuelos}
            />
        
        </div>

        

            
        </div>
        
        <div className="contenedor-principal">
            <div className="contenedor-vuelos">
            <div className="contenedor-vuelos">
        <div>
        <main className="contenedor2 sombra">
            <section>
                <h2>Crear Lugar Turístico</h2>
                <form className="formulario">
                    <fieldset>
                        <legend>Llena todos los campos</legend>
                        <div className="contenedor-campos">
                            
                            
                        <div className="campo">
                            <select value={nombrePaisLugar}
                            onChange={(event)=>{
                                console.log(event.target.value);
                                setNombrePaisLugar(event.target.value);
                            }}
                            className="input-text">
                           <option value="l1">Colombia</option>
                           <option value="l2">España</option>
                           </select></div>
                        
                        <div className="campo">
                            <label>Nombre Lugar Turístico</label>
                            <input value={nombreLugar}
                            onChange={(event)=>{
                                setNombreLugar(event.target.value);
                            }}
                            className="input-text" type="text" placeholder="Lugar Turístico"/>
                        </div>

                        <div className="campo">
                            <label > Nombre ciudad</label>
                            <input value={nombreCiudadLugar}
                            onChange={(event)=>{
                                setNombreCiudadLugar(event.target.value);
                            }}
                            className="input-text" type="text" placeholder="Nombre ciudad"/>
                        </div>
                    </div>
            
            <span className='error'>{nombrePaisValidacion}</span>
            <span className='error'>{nombreLugarValidacion}</span>
            <span className='error'>{nombreLugarCiudadValidacion}</span>
            <div className="alinear-derecha flex"></div>

            <div className="alinear-derecha flex">
                <input onClick={agregarLugar}
                 className="boton w-100" type="submit" value="Crear"/>
            </div>

                    </fieldset>

                </form>
            </section>
        </main>
    </div>

    <TablaLugares 
        lugaresList={lugares}
        />
        </div>
            </div>
        </div>

</div> 

    )   
                            
}

export default VuelosPag;