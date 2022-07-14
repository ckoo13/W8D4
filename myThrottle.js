Function.prototype.myThrottle = function (interval) {
    let tooSoon = false;

    return function closure() {

        if (!tooSoon) {
            tooSoon = true;
            setTimeout(() => tooSoon = false, interval);
            this.closure();
        }
    }
}

class Neuron {
    fire() {
      console.log("Firing!");
    }
  }
  
  const neuron = new Neuron();
  // When we create a new Neuron,
  // we can call #fire as frequently as we want
  
  // The following code will try to #fire the neuron every 10ms. Try it in the console:
  const interval = setInterval(() => {
    neuron.fire();
  }, 500);
  
  // You can use clearInterval to stop the firing:
 
  
  // Using Function#myThrottle, we should be able to throttle
  // the #fire function of our neuron so that it can only fire
  // once every 500ms:
  