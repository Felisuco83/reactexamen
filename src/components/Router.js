import { BrowserRouter, Route, Switch } from "react-router-dom";
import React, { Component } from "react";
import MenuPlantilla from "./plantilla/MenuPlantilla";
export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <MenuPlantilla />
        <Switch>
                    
          {/* <Route exact path="/create" component={InsertarHospital} />
                    
          <Route
            exact
            path="/update/:id/:nombre/:direccion/:telefono/:camas"
            render={(props) => {
              var id = props.match.params.id;
              var nom = props.match.params.nombre;
              var dir = props.match.params.direccion;
              var tlf = props.match.params.telefono;
              var camas = props.match.params.camas;
              return (
                <ModificarHospital
                  idhospital={id}
                  nombre={nom}
                  direccion={dir}
                  telefono={tlf}
                  camas={camas}
                />
              );
            }}
          /> */}
                  
        </Switch>
              
      </BrowserRouter>
    );
  }
}
