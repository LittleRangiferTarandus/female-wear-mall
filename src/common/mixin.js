import backTop from "@/components/content/backTop/backTop";
let backTopMixin = {
    components:{
        backTop
    },
    methods:{
        backTopClick(){
            this.$refs.MyScroll.scrollTo(0,0,500)
        },
        
        backTopIfShow(position){
            this.backTopShow=position.y<-500
        },
    },
    data(){
        return{
            backTopShow:false,
        }
    },
}
export {backTopMixin}