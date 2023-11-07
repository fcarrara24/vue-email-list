const { createApp } = Vue;


const obj = {
    data() {
        return {
            message: 'hello vue'
        }
    },
    methods: {
        changeMessage() {
            this.message = 'ciao';
        }
    }
}

createApp(obj).mount('#app')