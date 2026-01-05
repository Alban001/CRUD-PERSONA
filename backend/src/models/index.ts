import { Persona } from './persona.model'
import { Trabajo } from './trabajo.model'

Persona.hasMany(Trabajo, {
    foreingKey: 'personaId',
    as:'trabajos'
})

Trabajo.belongsTo(Persona,{
    foreignKey: 'perosnaId',
    as:'persona'
})

export {
    Persona,
    Trabajo
}