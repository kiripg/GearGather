import request from "../../request";

export function loginApi(data: any) {
    data.grant_type = 'password';

    return request({
        url: '/auth/local',
        method: 'post',
        data: data,
    }, false);
}

export function meApi() {
    return request({
        url: '/users/me?populate=profilePicture',
        method: 'GET'
    }, true);
}

export function changePasswordApi(data: any) {
    return request({
        url: '/auth/change-password',
        method: 'POST',
        data: data,
    }, true);
}

