import { useContext } from "react";
import { dataBaseData } from "../../context/context";
import { useRef } from "react";
import { postFetch } from "../../fetches";
function AddFriend() {
    const { fetchedData } = useContext(dataBaseData)
    console.log(fetchedData)
    const keys = []
    for (let prop in fetchedData[0]) {
        keys.push(prop)
    }
    const sendData = (e) => {
        e.preventDefault()
        const form = new FormData(e.target)
        console.log(form)
        let sendData = {}
        form.forEach((value, key) => sendData[key] = value);
        // var json = JSON.stringify(object);
        postFetch(sendData)
    }
    return (<article>
        <h1>Füge einen Freund hinzu</h1>
        <form onSubmit={sendData}>
            {keys.slice(1, 30).map((data) => {
                return (
                    <input type="text" name={data} placeholder={data}></input>
                )
            })}
            <button type="submit">Submit</button>
        </form>
    </article>);
}

export default AddFriend;