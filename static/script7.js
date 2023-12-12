const vueapp7 = Vue.createApp({
    data() {
        return {
            provpass: false,
        }
    },
    methods: {

    }
});
const vm7 = vueapp7.mount('#vueapp7');


document.forms['editPassForm'].addEventListener('submit', e => {
    e.preventDefault();
    const pass = document.getElementById('passer').value;
    const pass2 = document.getElementById('passer2').value;
    const pass3 = document.getElementById('passer3').value;
    if (pass === '' || pass2 === '' || pass3 === '') {
        vm7.provpass = true;
        document.getElementById('vnim').innerText = 'Заполните все поля!';
    }
    else if (pass3 !== pass2) {
        vm7.provpass = true;
        document.getElementById('vnim').innerText = 'Пароли не совпадают!';
    }
    else {
        async function feditpass() {
            const resp = await fetch('/feditpass', {
                method: "POST",
                headers: { "Accept": "application/json", "Content-Type": "application/json" },
                body: JSON.stringify({
                    oldpass: pass,
                    newpass: pass2
                })
            });
            const respText = await resp.text();
            if(respText === 'No') {
                vm7.provpass = true;
                document.getElementById('vnim').innerText = 'Неверный старый пароль!';
            }
            else {
                window.location.href = resp.url;
            }
        }
        feditpass();
    }
})