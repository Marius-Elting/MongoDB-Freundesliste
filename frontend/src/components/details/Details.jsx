import { useLocation } from "react-router-dom";


function Details() {
    const location = useLocation()
    console.log(location.state)
    const data = location.state
    return (<article>
        <h1>Alles über {data.firstname}{data.lastname}</h1>
        <p>Geburtstag: {data.birthday}</p>
        <p>Handynummer: {data.mobile}</p>
        <p>E-Mail: {data.mail}</p>
        <p>Beruf: {data.profession}</p>
        <h3>Geld:{data.cash}</h3>
        <p>{data.selfEmployed ? "Ist Hustler" : "Ist kein Hustler"}</p>
        <p>{data.isCustomer ? "Ist Ehrenmann" : "Ist kein Ehrenmann"}</p>
    </article>);
}

export default Details;