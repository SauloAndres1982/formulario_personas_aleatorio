import "./Persona.css"

const Person = ({person}) => {
    return(
        <div className="Persona">
            <div className="Persona-imagen">
                <img alt={person.name} src={person.picture.medium} />
            </div>
            <div className="Persona-name">
                {person.name.title} {person.name.first}
            </div>
            <div className="Persona-location">
                {person.location.city} <br /> {person.location.state}
            </div>
        </div>
    )
}
export default Person;