export const NEW_PROD = 'NEW_PROD'
export const DELETE_PROD = 'DELETE_PROD'
export const UPDATE_PROD = 'UPDATE_PROD'
export const NEW_CATEGORY = 'NEW_CATEGORY'
export const DELETE_CATEGORY = 'DELETE_CATEGORY'


/* -----------------------------------------CRUD----------------------------------------------------- */

export function NewProd(payload) {  //Action para h crear nuevo produto CRUD/crearproducto.js
    return {
      type: 'NEW_PROD',
      payload
    };
}

export function UpdateProd(payload) {  //Action para h crear nuevo produto CRUD/actualizarproducto.js
    return {
      type: 'UPDATE_PROD',
      payload
    };
}

export function DeleteProd(payload) {  //Action para h crear nuevo produto CRUD/borrarproducto.js
    return {
      type: 'DELETE_PROD',
      payload
    };
}

export function NewCategory(payload) {  //Action para h crear nuevo produto CRUD/borrarproducto.js
    return {
      type: 'NEW_CATEGORY',
      payload
    };
}

export function DeleteCategory(payload) {  //Action para h crear nuevo produto CRUD/borrarproducto.js
    return {                               //HABLAR CON EL EQUIPO DE BACK
      type: 'DELETE_CATEGORY',
      payload
    };
}
/* --------------------------------------------------------------------------------------------------- */
