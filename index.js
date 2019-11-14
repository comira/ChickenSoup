'use strict';

(function () {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/ChickenSoup/sw.js', {scope: '/ChickenSoup/'}).then(res => {
            console.log('Success');
        }).catch(err => {
            console.log('Failed')
        })
    }
    let p = document.getElementById('result');
    let sentences = [];
    fetch('./data.json').then(res => res.json()).then(res => {
        sentences = res;
        let index = Math.floor(Math.random() * Math.floor(res.length));
        p.innerText = res[index];
    });
    document.getElementById('btn_refresh').addEventListener('click',function () {
        let index = Math.floor(Math.random() * Math.floor(sentences.length));
        p.innerText = sentences[index];
    })
})();
