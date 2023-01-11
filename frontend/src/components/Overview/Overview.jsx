import { useContext } from "react";
import { dataBaseData } from "../../context/context";
import SingleElement from "../SingleElement/SingleElement";
function OverView() {
    const { fetchedData } = useContext(dataBaseData)
    return (
        <section>
            {fetchedData.map((data, index) => (
                <SingleElement data={data} key={index} />
            ))}
        </section>
    );
}

export default OverView;