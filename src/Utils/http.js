const http = {
    get(url) {
        return fetch(url).then(res => res.json());
    }
}
export default http;




