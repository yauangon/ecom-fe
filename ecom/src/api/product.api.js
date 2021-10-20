import API_PATH from "../config/api.path.const"

export const fetchAllProductAPI = async () => {
    return fetch(API_PATH.GET_ALL_PRODUCTS, {
        method: "GET",
        headers: { 'Content-Type': "application/json" },
        credentials: "include",
    })
    .then(res => {
        if(!res.ok) throw new Error("error")
        return res.json()})
    .then(data => {
        return data
    })
    .catch(error => {
        console.log(error);
        return false
    })
}

export const fetchEachProductAPI = async (paramJson) => {
    const query = new URLSearchParams(paramJson)
    const path = API_PATH.GET_PRODUCT_INFO_QUERY + query.toString()
    return fetch(path, {
        method: "GET",
        headers: { 'Content-Type': "application/json" },
        credentials: "include",
    })
    .then(res => {
        if(!res.ok) throw new Error("error")
        return res.json()})
    .then(data => {
        return data
    })
    .catch(error => {
        console.log(error);
        return false
    })
}