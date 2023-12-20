<template>
    <div class="wrap">
        <input type="text" v-model="searchValue" @keyup.enter='search' class="search">
        <div class="recommend">
            <div class="tags" v-for="(item,index) in tagList" :key="item.classid" @click="choose(index)">
            {{ item.name }}</div>
        </div>
        <div class="type">
            <div class="typeItem" v-for="item in typeList" :key="item.classid" @click="detail(item.classid)">
            {{ item.name }}</div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                searchValue:'',
                tagList:[],
                typeList:[]
            }
        },
        created(){
            this.recommend()
        },
        methods:{
            //跨域的解决方案：请求代理
            search(){
                this.$axios({
                    url:'/api/search',
                    method:'get',
                    params:{
                        keyword:this.searchValue,
                        num:10,
                        appkey:'11a581379fb20bdd '
                    }
                }).then((res)=>{
                    console.log(res)
                })
            },
            recommend(){
                this.$axios({
                    url:'/api/class',
                    method:'get',
                    params:{
                        appkey:'11a581379fb20bdd'
                    }
                }).then((res)=>{
                    // console.log(res)
                    this.tagList = res.data.result
                    console.log(this.tagList)
                    this.typeList = res.data.result[0].list.slice(0,10)
                    console.log(this.typeList)
                })
            },
            choose(index){
                this.typeList = this.tagList[index].list.slice(0,10)
            },
            detail(classid){
                this.$router.push(`/detail?classid=${classid}`)
            }
        }
    }
</script>

<style scoped>
.search{
    width: 90%;
    height: 50px;
    margin-left: 5%;
    margin-top: 10px;
}
.wrap{
    padding: 5px;
}
.tags{
    display: inline-block;
    padding:5px 10px;
    background: skyblue;
    border-radius: 5px;
    margin-right: 3px;
    margin-top: 5px;
}
.type{
    margin-top:20px;
    margin-left: 5%;
}
.typeItem{
    display: inline-block;
    border-radius: 10px;
    width: 45%;
    height: 100px;
    line-height: 100px;
    text-align: center;
    background: pink;
    margin-right: 3%;
    margin-bottom: 10px;
}
</style>