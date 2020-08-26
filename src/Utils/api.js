import http from "./http";

export function getIndexList() {
    return http.get('/ajax/movieOnInfoList?token=&optimus_uuid=546C64D0DB8311EA8DC6B9A03F0D539A1D7E06B10C91438A9A0832B2443EE849&optimus_risk_level=71&optimus_code=10')
}

// 首页上拉刷新请求数据
export function getMoreComing(data1, data2) {
    return http.get('/ajax/moreComingList?token=&' + data1 + '=' + data2)
}

//获取电影详情信息
export function getMovieDetail(params) {
    return http.get('/ajax/detailmovie', params);
}

//获取电影院信息
export function getCinemaList(params) {
    return http.post('/ajax/movie?forceUpdate=1598404020076', params)
}

//1598327132830

//获取单个电影院的信息
export function getSpecificCinema(params) {
    return http.get('/ajax/cinemaDetail', params);
}