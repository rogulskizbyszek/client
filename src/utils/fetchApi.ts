import axios from "axios"
export async function fetchApi(url: string) {
    try {
        const responseData = await axios.get(url)
        return responseData
    } catch (error) {
        throw error
    }
}