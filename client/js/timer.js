var Stopwatch = function(elem, options) {

    var timer = createTimer(),
      offset,
      clock = 0,
      interval;
  
    // default options
    options = options || {};
    options.delay = options.delay || 1;
  
    // append elements     
    elem.appendChild(timer);
  
    // initialize
    reset();
  
    // private functions
    function createTimer() {
      return document.createElement("span");
    }
  
    function createButton(action, handler) {
      var a = document.createElement("a");
      a.href = "#" + action;
      a.innerHTML = action;
      a.addEventListener("click", function(event) {
        handler();
        event.preventDefault();
      });
      return a;
    }
  
    function start() {
      if (!interval) {
        offset = Date.now();
        interval = setInterval(update, options.delay);
      }
      console.error(new Error("start").stack);
    }
  
    function stop() {
      if (interval) {
        clearInterval(interval);
        interval = null;
      }
      console.error(new Error("stop").stack);
      return clock / 1000;
    }
  
    function reset() {
      let time = clock;
      clock = 0;
      render(0);
      console.error(new Error("reset").stack);
      return time / 1000;
    }
  
    function update() {
      clock += delta();
      render();
    }
  
    function render() {
      timer.innerHTML = clock / 1000;
    }
  
    function delta() {
      var now = Date.now(),
        d = now - offset;
  
      offset = now;
      return d;
    }
  
    // public API
    this.start = start;
    this.stop = stop;
    this.reset = reset;
  };