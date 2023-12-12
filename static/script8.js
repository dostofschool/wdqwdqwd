const vueapp8 = Vue.createApp({
    data() {
        return {
            provpass: false,
        }
    },
    methods: {
        smenatexta() {
            document.getElementById('spaner').innerText = document.getElementById('filer').value.split('\u002F').pop();
        }
    }
});
const vm8 = vueapp8.mount('#vueapp8');


document.forms['addIzobrForm'].addEventListener('submit', e => {
    const opisanie = document.getElementById('opisanie').value;
    const filer = document.getElementById('filer').value;
    if (!filer || opisanie === '') {
        e.preventDefault();
        vm8.provpass = true;
        document.getElementById('vnim').innerText = 'Заполните все поля!';
    }
})