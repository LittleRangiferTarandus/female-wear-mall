import {request} from "./request.js"

export function getDetail(id) {
    return request({
        url:"/detail",
        params:{
            iid:id
        }
    })
}
export function getRecommend(){
    return request({
        url:'/recommend'
    })
}
export class commodity {
    constructor(result){
    this.title = result.itemInfo.title
    this.desc = result.itemInfo.desc
    this.newPrice = result.itemInfo.price
    this.oldPrice = result.itemInfo.oldPrice
    this.discount = result.itemInfo.discountDesc
    this.columns = result.columns
    this.services = result.shopInfo.services
    this.realprice = result.itemInfo.lowNowPrice
    }
}

export class shop {
    constructor(shopInfo){
        this.logo = shopInfo.shopLogo;
        this.name = shopInfo.name;
        this.fans= shopInfo.cFans;
        this.sells = shopInfo.cSells;
        this.score = shopInfo.score;
        this.goodsCount = shopInfo.cGoods;
    }
}
export class GoodsParam {
    constructor(itemParams) {
        //注: images可能没有值(某些商品有值，某些没有值)
        this.image = itemParams.info.images ? itemParams.info.images[0]: '';
        this.infos = itemParams.info.set;
        this.sizes = itemParams.rule.tables[0];
    }
}

export class CommentData {
    constructor(CommentData) {
        this.name = CommentData.user.uname
        this.comment = CommentData.content
        this.avatar = CommentData.user.avatar
        this.style = CommentData.style
        this.date = CommentData.created
    }
}

export class RecommendData {
    constructor(data) {
        this.url = data.item_url
        this.show = {
            img : data.image
        }
        this.title = data.title
        this.price = data.price
        this.cfav = data.cfav

    }
}
