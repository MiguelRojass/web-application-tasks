import React, { Component, useEffect, useState } from 'react'

export class Clock extends Component {
   constructor(props) {
      super(props);
      // Estado privado del component
      this.state = {
         // Se genera una fecha como estado inicial del componente
         fecha: new Date(),
         edad: 0,
         nombre: 'Martín',
         apellidos: 'San José'
      };
   }
   componentDidMount(){
      this.timerID = setInterval (
         () => this.tick(), 1000
      );
   }
   componentWillUnmount() {
      clearInterval (this.timerID);
   }
   render() {
      return (
         <div>
         <h2>
         Hora Actual:
         {this.state.fecha.toLocaleTimeString()}
         </h2>
         <h3>{this.state.nombre} {this.state.apellidos}</h3>
         <h1>Edad: {this.state.edad}</h1>
         </div>
      )
   }
   tick(){
      this.setState((prevState) => {
         let edad = prevState.edad +1;
         return {
            ...prevState,
            fecha: new Date(),
            edad
         }
      });
   }
}

// Componente de tipo clase a componente funcional
export const ClassToFunction = () => {

  // Generar el valor inicial
  const valorInicial = {
    fecha: new Date(),
    edad: 0,
    nombre: 'Miguel',
    apellidos: 'Rojas Trujillo'
  }

  const [datos, setDatos] = useState(valorInicial);

  /**
   * Preguntar porque funciona la variable "let edad" llamandola tal cual e 
   * invocandola en el return de la función "tick()" la parte de "edad" y 
   * porque no cuando se cambia el nombre
   */
  const tick = () => {
    setDatos((contador) => {
      let edad = contador.edad + 1;
      return {
        ...contador,
        fecha: new Date(),
        edad
      }
    })
  }

  useEffect(() => {
    const timerID = setInterval(() => {
      tick()
    }, 1000)
  
    return () => {
      clearInterval(timerID)
    }
  }, [])
     

   return (
     <div>
      <h2>
        Hora Actual: { datos.fecha.toLocaleTimeString() }
      </h2>
      <h3>
        { datos.nombre } { datos.apellidos }
      </h3>
      <h1>
        Edad: { datos.edad }
      </h1>
     </div>
   )
}