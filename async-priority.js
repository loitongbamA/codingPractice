//to check how setTimeout execute when there are background promises are in microTask queue and setTimeout in event queue
const noOfAsyncTasks = 50;
const getRandomInt = () => {
    return Math.random() * 100
};

const initTimer = () => {
    console.log("timer initiated");
    const t = setInterval(async () => {
        console.log("set interval timer executed");
    }, 5000)

    return () => clearInterval(t);
}

const executeTest = () => {
    let timerStart = 1;

    for (let i = 1; i <= noOfAsyncTasks; i++) {

        const promObj = new Promise((resolve) => {
            setTimeout(() => {
                resolve(`Job ${i} completed.`);
            }, 1000 * timerStart)
        });

        timerStart++;

        promObj
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    initTimer();
}

executeTest();