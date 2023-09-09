function clock() {
    const initializeTime = new Date();

    let seconds = initializeTime.getSeconds();
    let minutes = initializeTime.getMinutes();
    let hours = initializeTime.getHours();

    document.getElementById('seconds-text').innerText = seconds <= 9 ? '0' + seconds : seconds;
    document.getElementById('minutes-text').innerText = minutes <= 9 ? '0' + minutes + ':' : minutes + ':';
    document.getElementById('hours-text').innerText = hours <= 9 ? '0' + hours + ':' : hours + ':';

    setTimeout(function() {
        clock()
    }, 1000);
};

clock();