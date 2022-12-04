<template>
    <div>
        <h1>TODOS</h1>
        <button class="btn-color" @click="fetchTodos">submit</button>

        <div>
            <div v-for="post in all_data" :key="post.id">
                {{post.title}}
            </div>
        </div>
        <div>
            <input type="text" name="name" v-model="user_detail.name">
            <input type="email" name="email" v-model="user_detail.email">
            <input type="number" name="phone" v-model="user_detail.phone">
            <input type="password" name="password" v-model="user_detail.password">
            <button @click="submitData">submit form</button>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default{
    // name:'TodoComponent'
    data(){
        return {
            api_url:"https://jsonplaceholder.typicode.com/posts",
            firebase_api:"https://vue-learn-237d9-default-rtdb.firebaseio.com/kishan.json",
            all_data:[],
            user_detail:{
                id:1,
                name:"",
                email:"",
                phone:"",
                password:""
            }
        }
    },
    methods:{
        fetchTodos(){
            console.log('inside function');
            axios.get(this.api_url).then((response) => {
                this.all_data = response.data
                // console.log(res)
            });
        },
        submitData(){
            axios.post(this.firebase_api, {
                name:this.user_detail.name,
                email:this.user_detail.email,
                phone:this.user_detail.phone,
                password:this.user_detail.password
            }).then((response) => {
                // this.all_data = response.data
                console.log(response)
            });
        }
    }
}
</script>

<style>

</style>