export interface Persona {
    id:number,
    nombre:string,
    edad: number | string,
    trabajoId?:number
}

// Aqui creamos un tipado de typescript, donde excluimos campos, es decdir OMITE<modelo, campo1, campoN> 
// usamos Omit , que es una utilidad de typescript para excluir propiedades
export type updatePersonaDTO = Omit<Persona , 'id'>
export type createPersonaDTO = Omit<Persona , 'id'>
