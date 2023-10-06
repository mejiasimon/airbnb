import { response } from "express";

export class controllerHabitacion {
  constructor() {}
  buscar(request, response) {
    try {
      response.status(200).json({"estado":true,"mensaje":"peticion exitosa habitaciones buscadas","datos":null});
    } catch (error) {
      console.error(error);
            response
              .status(400)
              .json({
                estado: false,
                mensaje: "peticion fallada",
                datos:null
              });
    }
  }
  buscarEspecifico(request, response) {
    let id=request.params.id
    try {
      response
        .status(200)
        .json({
          estado: true,
          mensaje: "peticion exitosa habitacion buscada",
          datos: null,
        });
    } catch (error) {
      console.error(error);
      response.status(400).json({
        estado: false,
        mensaje: "peticion fallada",
        datos: null,});
    }
  }
  modificar(request, response) {
    let datos=request.body
    let id=request.paramas.id
    try {
      response.status(200).json({
        estado: true,
        mensaje: "peticion exitosa habitacion actualizada",
        datos: null,
      });
    } catch (error) {
      console.error(error);
      response.status(400).json({
        estado: false,
        mensaje: "peticion fallada",
        datos: null,
      });
    }
  }
  registrar(request, response) {
    let datos=request.body
     try {
       response.status(200).json({
         estado: true,
         mensaje: "peticion exitosa habitacion creada",
         datos: null,
       });
     } catch (error) {
       console.error(error);
       response.status(400).json({
         estado: false,
         mensaje: "peticion fallada",
         datos: null,
       });
     }
  }
  eliminar(request, response) {
    let id=request.params.id
    try {
      response.status(200).json({
        estado: true,
        mensaje: "peticion exitosa habitacion eliminada",
        datos: null,
      });
    } catch (error) {
      console.error(error);
      response.status(400).json({
        estado: false,
        mensaje: "peticion fallada",
        datos: null,
      });
    }
  }
}
  