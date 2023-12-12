const vueapp10 = Vue.createApp({
    data() {
        return {
            blurer: 0,
        }
    },
    methods: {
        ydalenie(y) {
            async function udizbaz() {
                const resp = await fetch('/ydaldost', {method: 'POST', body: y});
                window.location.href = resp.url;
            }
            udizbaz();
        },
        priblizh(x) {
            let bloki = document.getElementById('mainer');
            bloki.classList.add('unshow');
            let oBig = document.getElementById('vueapp10').appendChild(document.createElement('DIV'));
            let obig2 = document.getElementById(`izodiv${x}`);
            oBig.innerHTML = obig2.innerHTML;
            if (oBig.querySelector('button')) {
                oBig.querySelector('button').remove();
            }
            oBig.classList.add('chel');
            oBig.style.position = `absolute`;
            oBig.style.left = `50%`;
            oBig.style.transform = `translate(-50%, -50%) rotate(1turn)`;
            oBig.style.top = '50vh';
            oBig.style.position = 'fixed';
            oBig.style.zIndex = '100';
            if(document.getElementById(`izobr${x}`).height > document.getElementById(`izobr${x}`).width) {
                document.querySelector('.chel').firstElementChild.style.height = '75vh';
            }
            else {
                document.querySelector('.chel').firstElementChild.style.width = '50vw';
            }
            oBig.addEventListener('click', function(ev) {
                ev.stopPropagation();
                bloki.classList.remove('unshow');
                document.querySelector('.chel').remove();
            });
        }
    }
});
vueapp10.mount('#vueapp10');