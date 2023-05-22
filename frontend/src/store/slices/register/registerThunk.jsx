import { createAsyncThunk } from "@reduxjs/toolkit";
import { registerUserApi } from "../../../api/formsApi";

/**
 * @description La funcion registerUserThunk recibe el vaor de la función createAsyncThunk de Redux-Toolkit que recibe
 * como parametros el nombre de la acción  'registration/registerUser'  y una función asincrona que recibe como parametro los datos del usuario que se va a registrar
 * ejecuta la funcion  'registerUserApi()' con los datos del usuario a registrar para enviar una peticion HTTP al servidor y retorna los datos del usuario que se va a registrar.
 * @param {Object} registerData
 * @returns {Object} data
 *  
 */

export const registerUserThunk = createAsyncThunk(
    'registration/registerUser',
    async (registerData) => {
      const data = await registerUserApi(registerData)
      return data;
    }
  );