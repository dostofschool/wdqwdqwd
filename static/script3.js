const vueapp3 = Vue.createApp({
    data() {
        return {

        }
    },
    methods: {
        ishod() {
            async function ishodizakka() {
                const resp = await fetch("/ishod");
                window.location.href = resp.url;
            }
            ishodizakka();
        }
    }
})
const vm3 = vueapp3.mount("#vueapp3");