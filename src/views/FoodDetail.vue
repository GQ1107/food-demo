<template>
    <div>
        <div class="detail" v-for="(item,index) in detailList" :key="item.id">
            <h1>{{ index+1 }}{{ item.name }}</h1>
            <img :src="item.pic">
            <p>{{ item.content }}</p>
            <h2>原材料：</h2>
            <ul>
                <li v-for="(a,index) in item.material" :key="index">
                    {{ a.mname }}:{{ a.amount }}
                </li>
            </ul>
            <h2>烹饪步骤：</h2>
            <ul>
                <li v-for="(a,index) in item.process" :key="index" v-html="index+1+':'+a.pcontent">
                    
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                detailList:[]
            }
        },
        created(){
            this.$axios({
                url:'/api/byclass',
                method:'get',
                params:{
                    classid:this.$route.query.classid,
                    start:0,
                    num:10,
                    appkey:'11a581379fb20bdd'
                }
            }).then((res)=>{
                this.detailList = res.data.result.list
            })
        }
    }
</script>

<style scoped>

</style>