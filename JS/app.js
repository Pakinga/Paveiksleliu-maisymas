
    "use strict"
    const ul = document.querySelector('ul');
    const btnShow = document.querySelector('.rodyti');
    const btnMix = document.querySelector('.maisyti');

    btnShow.addEventListener('click', addImage);
    btnMix.addEventListener('click', mixImage);

    let imageList = [];
    imageList.push ('Image/1.jpg');
    imageList.push ('Image/2.jpg');
    imageList.push ('Image/3.jpg');
    imageList.push ('Image/4.jpg');
    imageList.push ('Image/5.jpg');
    imageList.push ('Image/6.jpg');
    imageList.push ('Image/7.jpg');
    imageList.push ('Image/8.jpg');
    imageList.push ('Image/9.jpg');
    imageList.push ('Image/10.jpg');



    function addImage() {
        for (let i=0; i < imageList.length; i++){
            let li = document.createElement('li');
            let img = document.createElement('img');
            img.src = imageList[i];
            img.setAttribute("class", "img_class");
            li.appendChild(img);
            ul.appendChild(li);
        }
    }
    function mixImage() {
        var currentIndex = imageList.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = imageList[currentIndex];
            imageList[currentIndex] = imageList[randomIndex];
            imageList[randomIndex] = temporaryValue;
        }
        for (let i=0; i < imageList.length; i++){
            const li = document.querySelector('li');
            const img = document.querySelector('img');
            img.src = imageList[i];
            li.appendChild(img);
            ul.appendChild(li);
        }
    }

