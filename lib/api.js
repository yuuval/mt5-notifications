const URL = "https://fcsapi.com/api-v3/forex"

export async function getAllPairs() {
    const response = await fetch(`${URL}/list?type=forex&access_key=LprbHOtaI8Y6HIhvVdbqML4`)

    if (!response.ok) {
        return Promise.reject(response)
    }
    const data = await response.json()
    return data
}
export async function getPairById(id) {
    const response = await fetch(`${URL}/latest?id=${id}&access_key=LprbHOtaI8Y6HIhvVdbqML4`)
    if (!response.ok) {
        return Promise.reject(response)
    }
    const data = await response.json()
    return data
}


export async function login({email, password}) {
    const response = await fetch(`${URL}/login`, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({email, password})
    })

    if (!response.ok) {
        return Promise.reject(response)
    }

    const data = await response.json()
    return data
}

export async function register({email, password}) {
    const response = await fetch(`${URL}/register`, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({email, password})
    })

    if (!response.ok) {
        return Promise.reject(response)
    }

    const data = await response.json()
    return data
}