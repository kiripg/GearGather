import request from "../../request";

export function calendarApi(){

    return request(
        {
            url: '/events/',
            method: 'GET'
        }, true
    )
}