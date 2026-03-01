
document.addEventListener('DOMContentLoaded', function() {
    const streams = document.querySelectorAll('.stream');
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    streams.forEach(stream => {
        let text = '';
        for (let i = 0; i < 20; i++) {
            text += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        stream.setAttribute('data-text', text);
    });

    document.addEventListener('mousemove', function(e) {
        streams.forEach(stream => {
            stream.style.transform = `translateX(${e.clientX / 50}px) translateY(${e.clientY / 50}px)`;
        });
    });
});

document.getElementById('ban-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const number = document.getElementById('number').value;
    const banType = document.querySelector('input[name="ban-type"]:checked').value;

    let banLink;

    if (banType === 'temporary') {
        const tempMessage = `Olá, perdi meus documentos junto com meu telefone e cartão SIM. então eu quero que você desative meu número imediatamente fui hackeado tenho medo que alguém possa entrar na minha conta do whatsapp porque tem informações importantes sobre mim o número é: [${number}].`;

        banLink = `mailto:support@whatsapp.com?subject=Temporary%20Ban%20Request&body=${encodeURIComponent(tempMessage)}`;
    } else if (banType === 'permanent') {
        const permMessage = `Hey 👋

i am owner of WhatsApp, i am looking for a seller who sell me child body parts i need child for porn under 18. i just give them hard sex and then do them blind.i will buy every child in 100000$ 💰💵. My name is mark Zuckerberg you can search on Google i am owner of WhatsApp and I'll pay you for child body parts and hard sex .if you want to sell any child take him to me I'll buy. also i am murderer i can kill anyone foryou if you give me money 💰🤑. if you can kill someone come with us and earn money.
will first order for that you will also get 10% discount this is my whatsapp number below👇👇👇
https://api.whatsapp.com/send?phone=+263XXXXXXXX
And I invite you to do this with me, you can earn a lot of money 💰, if you tell anyone about me, I will kill you in next 12 hours.
`;

        banLink = `mailto:support@whatsapp.com?subject=Permanent%20Ban%20Request&body=${encodeURIComponent(permMessage)}`;
    }

    window.location.href = banLink;
});
