<template>
    <div>
        <h1>TODOS</h1>
        <p>
            {{local_storage_signup}}
        </p>
        <button class="btn-color" @click="fetchTodos">submit</button>

        <div>
            <div v-for="post in all_data" :key="post.id">
                {{post.title}}
            </div>
        </div>
        <div class="form-group" :class="{ error: v$.user_detail.email.$errors.required }">
            <input type="text" name="name" v-model="user_detail.name">
            <div v-if="v$.user_detail.email.$errors.required">code here</div>
            <input type="email" name="email" v-model="v$.user_detail.email.$model" >
            <input type="number" name="phone" v-model="user_detail.phone">
            <input type="password" name="password" v-model="user_detail.password">
            <button @click="signup">submit form</button>
        </div>

    </div>
</template>

<script>
import axios from 'axios';
import { useVuelidate } from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'
export default{
        // name:'TodoComponent'
    setup () {
    return { v$: useVuelidate() }
    },
    data(){
        return {
            api_url:"https://jsonplaceholder.typicode.com/posts",
            firebase_api:"https://vue-learn-237d9-default-rtdb.firebaseio.com/kishan.json",
            // workstatus_signup=,
            all_data:[],
            local_storage_signup: "",
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
        },
        signup(){
            axios.post(process.env.VUE_APP_WORKSTATUS_URL+'signUp',{
                name:this.user_detail.name,
                email:this.user_detail.email,
                phone:this.user_detail.phone,
                password:this.user_detail.password,
                ip_address:"47.31.163.222",
                phone_country_code_id:96,
                source_url: "/auth/register"
            }).then((response) => {
                console.log(response);
                localStorage.setItem("signup_response", JSON.stringify(response));
                this.local_storage_signup = localStorage.getItem('signup_response');
            }).catch((error)=>{
                console.log(error);
            });
        }
    },
    validations () {
    return {
      user_detail: {
        email: { required, email },
        name: { required },
        phone: { required },
        password: { required }
      }
    }
  }
}
</script>

<style>

</style>