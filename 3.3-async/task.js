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
        const time = new Date();
        if (`${time.getMinutes()}`.length < 2 || `${time.getHours()}`.length < 2) {
            if (`${time.getHours()}`.length < 2) {
                timeHours = 0 + `${time.getHours()}`;
            }
            if (`${time.getMinutes()}`.length < 2) {
                timeHoursAndMinutes = timeHours + ':' + 0 + `${time.getMinutes()}`;
                return timeHoursAndMinutes;
            }
            return timeHoursAndMinutes + ':' + new Date().getMinutes();
        }
        return `${new Date().getHours()}:${new Date().getMinutes()}`;
       
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