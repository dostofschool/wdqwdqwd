const vueapp9 = Vue.createApp({
    data() {
        return {

        }
    },
    methods: {

    }
});
const vm9 = vueapp9.mount('#vueapp9');


document.forms['addIzobrForm'].addEventListener('submit', e => {
    const opisanie = document.getElementById('opisanie').value;
    const filer = document.getElementById('filer').value;
    if (!filer || opisanie === '') {
        e.preventDefault();
        vm8.provpass = true;
        document.getElementById('vnim').innerText = 'Заполните все поля!';
    }
})