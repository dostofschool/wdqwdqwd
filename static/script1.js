const vueapp1 = Vue.createApp({
    data() {
        return {
            checkers: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        }
    },
    methods: {
        smenaform(n) {
            if(this.checkers[n] === 0) {
                document.getElementById(`dosti${n}`).classList.remove("prev");
                document.getElementById(`dosti${n}`).classList.add("next");
                document.getElementById(`plus${n}`).classList.add("plusafter");
                this.checkers[n] = 1;
            }
            else {
                document.getElementById(`dosti${n}`).classList.remove("next");
                document.getElementById(`dosti${n}`).classList.add("prev");
                document.getElementById(`plus${n}`).classList.remove("plusafter");
                this.checkers[n] = 0;
            }
        },
        
    }
})
const vm1 = vueapp1.mount('#vueapp1');