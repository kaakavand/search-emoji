import http from "../services/service";

export async function getEmoji() {
    try {
        const response = await http.get();
        return response.data;
    } catch (e) {
        return Promise.reject(e);
    }
}
