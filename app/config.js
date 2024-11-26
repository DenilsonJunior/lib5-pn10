var config = {
    salvarDados: true,
    debug: false,
    waterMark: false,
    language: 'pt-br',
    video: 'default',
    lms: {
        name: 'default'
    },
    acessibility: {
        tools: true,
        outlines: false,
        vlibras: false,
        customLibras: false
    },
    behaviors: {
        adaptive: false,
        width: 1920,
        height: 1080,
        fontSize: 30
    },
    modalVoltar: {
        active: false,
        msg: 'Você quer continuar de onde parou ou reiniciar o curso?',
        yes: 'CONTINUAR',
        no: 'REINICIAR',
        color: '#0a698d'
    },
    pages: [{
            uid: 'onepage',
            src: 'onepage/index.html'
        },
        {
            uid: 'onepage1',
            src: 'onepage1/index.html'
        },
        {
            uid: 'onepage2',
            src: 'onepage2/index.html'
        },
        {
            uid: 'onepage3',
            src: 'onepage3/index.html'
        },
        {
            uid: 'onepage4',
            src: 'onepage4/index.html'
        },
        {
            uid: 'tela1',
            src: 'tela1/index.html'
        },
        {
            uid: 'tela2',
            src: 'tela2/index.html'
        }
    ]
};
try {
    module.exports = config;
} catch (e) {}