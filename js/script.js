const { createApp } = Vue;


const obj = {
    data() {
        return {
            mailArray: [],
            APIwebsite: `https://flynn.boolean.careers/exercises/api/`,
            section: `random/mail`
        }
    },
    methods: {
        createArray() {
            for (let index = 0; index < 10; index++) {
                this.getEmail();
            }
        },
        getEmail() {
            axios
                .get(`${this.APIwebsite}${this.section}`)
                .then(
                    (res) => {
                        //pushing element into the array as a promise inside of the function
                        this.mailArray.push(res.data.response);
                    }
                )
            //  
        }
    },
    computed: {
        arrayLength() {
            return this.mailArray.length
        }
    }
}

createApp(obj).mount('#app')



// https://flynn.boolean.careers/exercises/api/random/mail