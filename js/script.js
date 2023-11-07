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
                this.mailArray.push(this.getEmail())
            }

        },
        getEmail() {
            axios
                .get(`${this.APIwebsite}${this.section}`)
                .then(
                    (res) => {
                        console.log(res.data.response)
                        return res
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