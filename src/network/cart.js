import {getDetail} from './detail'

export function getCartList  (list){
    let theRes = []
    return new Promise((resolve,reject) => {
      Object.keys(list).forEach((key) => {
        getDetail(key).then( res => { 
          let item = {
            title:res.data.result.itemInfo.title,
            img:res.data.result.itemInfo.topImages[0],
            number:list[key],
            id:key,
            price:res.data.result.itemInfo.lowNowPrice
          }
          theRes.push(item)
          if (theRes.length === Object.keys(list).length){
              theRes.sort((a,b) => {
                if(a.id<=b.id) {
                  return -1
                }else{
                  return 1
                }
              })
            resolve(theRes)
          }
        })
      })
    })
  }
  