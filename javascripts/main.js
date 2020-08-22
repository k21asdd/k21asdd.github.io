import vue from "vue"
let vm = new Vue({
    el: '#test_vue',
    data: {
    test_content: 'Hello Vue!',
    list_data : ["Okla", "Okba", "Ok"],
    }
});
let app = new Vue({   
    el:"#app",   
    data:{     
    count: 0   
    },   
    methods:{     
    add(){
        this.count+=1;
    }   
    } 
}); 

