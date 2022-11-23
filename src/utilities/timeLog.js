class TimeLog {
  timeLogs = [];

  start = (id) => {
    let startTime = new Date();
    this.timeLogs.push({ id, startTime });
  };

  end = (id) => {
    let endTime = new Date();
    let tlList = this.timeLogs.filter((tl) => tl.id.localeCompare(id) == 0);
    if (tlList.length) {
      // @ts-ignore
      let timeDiff = endTime - tlList[0].startTime; //in ms
      let ctd = this.convert(timeDiff);
      this.timeLogs = this.timeLogs.filter(
        (tl) => tl.id.localeCompare(id) != 0
      );
      console.debug(`${id} : ${ctd.minutes} mins ${ctd.seconds} secs`);

      return;
    }
    console.error(`no start time found for ${id} `);
  };

  convert = (milliseconds) => {
    const secs = Math.floor(Math.abs(milliseconds) / 1000);
    const mins = Math.floor(secs / 60);
    const hours = Math.floor(mins / 60);
    const days = Math.floor(hours / 24);
    const millisecs = Math.floor(Math.abs(milliseconds)) % 1000;
    const multiple = (term, n) => (n !== 1 ? `${n} ${term}s` : `1 ${term}`);

    return {
      days: days,
      hours: hours % 24,
      hoursTotal: hours,
      minutesTotal: mins,
      minutes: mins % 60,
      seconds: secs % 60,
      secondsTotal: secs,
      milliSeconds: millisecs,
      get diffStr() {
        return `${multiple(`day`, this.days)}, ${multiple(
          `hour`,
          this.hours
        )}, ${multiple(`minute`, this.minutes)} and ${multiple(
          `second`,
          this.seconds
        )}`;
      },
      get diffStrMs() {
        return `${this.diffStr.replace(` and`, `, `)} and ${multiple(
          `millisecond`,
          this.milliSeconds
        )}`;
      },
    };
  };
}

let timeLogger = new TimeLog();

// timeLogger.start("h");
// timeLogger.end("h");
export default timeLogger;
