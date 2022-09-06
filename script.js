function pic() {
    var bgm = ['https://imgur.com/a/ZayQjzF','https://imgur.com/a/h5YCrV8','https://imgur.com/a/pktYE8K'];

    $('.random_bg').css({
        'background' : 'url('+ bgm[Math.floor(Math.random() * bgm.length)] + ') no-repeat',
        'background-position' : '100%',
        'background-size' : 'cover'
    });
}

pic();
