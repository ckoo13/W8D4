class Clock {
    constructor() {
      // 1. Create a Date object.
      const date = new Date()
      // 2. Store the hours, minutes, and seconds.
      this.hours = date.getHours();
      this.minutes = date.getMinutes();
      this.seconds = date.getSeconds();
      // 3. Call printTime.
      this.printTime()
      // 4. Schedule the tick at 1 second intervals.
      setInterval(this._tick.bind(this), 1000)
    }
  
    printTime() {
      // Format the time in HH:MM:SS
      console.log(`${this.hours}:${this.minutes}:${this.seconds}`)
      // Use console.log to print it.
    }
  
    _tick() {
      // 1. Increment the time by one second.
      this._incrementSeconds();
      // 2. Call printTime.
      this.printTime();
    }

    _incrementSeconds() {
          if (this.seconds === 59) {
              this.seconds = 0;
              this._incrementMinutes();
              
          }
          
          else {
              this.seconds += 1;
          }
      }

      _incrementMinutes() {
        if (this.minutes === 59) {
            this.minutes = 0;
            this._incrementHours();
        }
        else {
            this.minutes += 1;
        }
      }

      _incrementHours() {
        if (this.hours === 23) {
            this.hours = 0;
            this.minutes = 0;
            this.seconds = 0;
        }
        else {
            this.hours += 1;
        }
      }
    }
  
  
  const clock = new Clock();