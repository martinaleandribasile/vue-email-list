const app = new Vue({
    el: "#app",
    data: {
        mailNumber: '',
        mailArray: [],
        checkedValue: 0
    },
    methods: {
        generateMail() {
            this.checkedValue = 0
            for (let i = 1; i <= this.mailNumber; i++) {
                axios
                    .get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then((response) => {
                        this.mailArray.push(response.data.response);
                    })
            }
            this.checkedValue = this.mailNumber
            this.mailNumber = ""
        },
        restart() {
            window.location.reload()
        }
    }
})