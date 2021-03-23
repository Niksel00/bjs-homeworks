class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, callback, id) {
        if (!id) {
            throw new Error ('error text: no id')
        }
        if (this.alarmCollection.some((elem) => elem.id == id)) {
            return console.error ('error text: more than one id')
        }
        this.alarmCollection.push ({
            id,
            time,
            callback
        });
    }

    removeClock(id) {
        const len = this.alarmCollection.length;
        this.alarmCollection = this.alarmCollection.filter((elem) => id != elem.id);
        return (len != this.alarmCollection.length);
    }

    getCurrentFormattedTime() {
        return new Date().toLocaleTimeString().slice(0,-3);
    }

    start() {
        this.timerId = setInterval(() => this.alarmCollection.forEach(elem => {
            if(this.getCurrentFormattedTime() === elem.time) {
                return elem.callback();
            }
        }),1000)
    }

    stop() {
        if(this.timerId) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    printAlarms() {
        console.log(`alarms: ${this.alarmCollection.length}`);
        this.alarmCollection.forEach(elem => console.log(`${elem.id} ${elem.time}`));
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}

let phoneAlarm = new AlarmClock();

function testCase() {
    phoneAlarm.addClock("09:00", () => console.log('Пора вставать'), 1);
    phoneAlarm.addClock("09:01", () => {
        console.log('Давай, вставай уже!');
        phoneAlarm.removeClock(2)
    }, 2);
    phoneAlarm.addClock("09:02", () => {
        console.log('Вставай, а то проспишь!');
        phoneAlarm.clearAlarms();
        phoneAlarm.printAlarms();
    }, 3);
    phoneAlarm.printAlarms();
    phoneAlarm.start();    
}