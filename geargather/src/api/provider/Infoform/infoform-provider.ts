import request from "../../request";

export function infoformApi(data:any){

    return request(
        {
            url: '/info-forms',
            method: 'POST',
            data: data
        }, false
    )
}