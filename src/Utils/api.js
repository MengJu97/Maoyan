import http from "./http";

export function getIndexList() {
    return http.get('/ajax/movieOnInfoList?token=&optimus_uuid=546C64D0DB8311EA8DC6B9A03F0D539A1D7E06B10C91438A9A0832B2443EE849&optimus_risk_level=71&optimus_code=10')
}

// 首页上拉刷新请求数据
export function getMoreComing(data1, data2) {
    return http.get('/ajax/moreComingList?token=&' + data1 + '=' + data2)
}
