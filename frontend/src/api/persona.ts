import { Persona, createPersonaDTO, updatePersonaDTO } from '../types/persona'
const BASE_URL = import.meta.env.VITE_URL_DEV

export const getPersonas = async ():Promise<Persona[]> =>{
    const res = await fetch(`${BASE_URL}/api/personas`)
    const data = await res.json()
    return data.personas
}

export const createPersona =async (persona:createPersonaDTO): Promise<Persona>=>{
    const res = await fetch(`${BASE_URL}}/api/personas`,{
        method:'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(persona)
    })
    const data = await res.json()
    return data.persona
}

export const updatePersona =async (id:number, persona: updatePersonaDTO):Promise<Persona> =>{
    const res = await fetch(`${BASE_URL}/api/personas/${id}`,{
        method:'PUT',
        headers:{'Content-Type': 'application/json'},
        body:JSON.stringify(persona)
    })
    const data = await res.json()
    return data.persona
}


export const deletePersona = async (id:number): Promise<void> =>{
    await fetch(`${BASE_URL}/api/personas/${id}`, {method:'DELETE'})
}