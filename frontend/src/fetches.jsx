
export const getFetch = () => {
    return new Promise((resolve, reject) => {
        fetch("http://localhost:8888/api/friends")
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
    })
}

export const postFetch = (inputData) => {
    console.log(inputData)
    return new Promise((resolve, reject) => {
        fetch("http://localhost:8888/api/friends", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(inputData)
        })
            .then(data => resolve(data))
            .catch(err => console.log(err))
    })
}