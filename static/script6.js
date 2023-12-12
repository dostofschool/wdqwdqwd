const vueapp6 = Vue.createApp({
    data() {
        return {
            provpass: false,
        }
    },
    methods: {

    }
});
const vm6 = vueapp6.mount('#vueapp6');


document.forms['editForm'].addEventListener('submit', e => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const midname = document.getElementById('midname').value;
    const classer = document.getElementById('classer').value;
    const bukva = document.getElementById('bukva').value;
    const loginer = document.getElementById('loginer').value;
    if (name === '' || surname === '' || midname === '' || classer === '' || loginer === ''|| bukva === '') {
        vm6.provpass = true;
        document.getElementById('vnim').innerText = 'Заполните все поля!';
    }
    else {
        async function izmena() {
            const resp = await fetch('/izmena', {
                method: "POST",
                headers: { "Accept": "application/json", "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: name,
                    surname: surname,
                    midname: midname,
                    classer: parseInt(classer, 10),
                    bukva: bukva,
                    login: loginer,
                })
            });
            window.location.href = resp.url;
        }
        izmena();
    }
})