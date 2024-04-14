function textDelay(text, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const div = document.getElementById('content');
            div.textContent = text;
            resolve();
        }, delay);
    });
}

textDelay('Этот текст появился с задержкой в 5 секунд', 5000)
    .then(() => console.log('Текст был заполнен после задержки (5 сек)'));