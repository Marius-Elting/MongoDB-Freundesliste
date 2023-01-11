import { Link } from "react-router-dom";

function SingleElement({ data, key }) {
    console.table(data)
    return (<article key={key}>
        <h4>{data.firstname}{data.lastname}</h4>
        <p>{data.mobile}</p>
        <a href={`mailto:${data.mail}`}>{data.mail}</a>
        <Link to="/details" state={data}>Mehr Infos</Link>
    </article>
    );
}

export default SingleElement;