const http = {
    get(url, params) {
        if (params) {
            let arr = []
            Object.keys(params).forEach(value => arr.push(value + '=' + params[value]))
            // url += arr.join('&')
            // 判断url里面是否有?
            if (url.includes('?')) {
                url += '&' + arr.join('&')
            } else {
                url += '?' + arr.join('&')
            }
        }

        return fetch(url).then(res => res.json())
        // return fetch(url).then(res => res.json());
    },
    post(url, params) {
        let formData = new FormData();
        for (let key in params) {
            formData.append(key, params[key]);
        }
        return fetch(url, {
            method: 'POST',
            body: formData
        }).then(res => res.json());
    }
}
export default http;




