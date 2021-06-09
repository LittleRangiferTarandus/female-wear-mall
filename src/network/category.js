import {request} from './request'
export function getLeft(){
    return request({
        url:'/category'
    })
}
export function getRight(maitKey){
    return request({
        url:'/subcategory',
        params:{
            maitKey
        }
    })
}
export function getDown(miniWallkey){
    return request({
        url:'/subcategory/detail',
        params:{
            miniWallkey
        }
    })
}