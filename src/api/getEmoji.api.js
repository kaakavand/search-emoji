import http from "../services/service";

export async function getEmoji() {
    try {
        const response = await http.get('/categories/smileys-emotion?access_key=169ca5d5932bf03ea9c25464bf97dc8e7b251397');
        return response.data;
    } catch (e) {
        return Promise.reject(e);
    }
}
