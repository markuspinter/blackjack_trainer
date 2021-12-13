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
    }
  
    function stop() {
      if (interval) {
        clearInterval(interval);
        interval = null;
      }
      return clock / 1000;
    }
  
    function reset() {
      let time = clock;
      clock = 0;
      render(0);
      return time / 1000;
    }
  
    function update() {
      clock += delta();
      render();
    }
  
    function render() {
      timer.innerHTML = (clock / 1000).toFixed(3);
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

  var CountdownTimer = function(elem, startTime, callback, options) {

    var timer = createTimer(),
      offset,
      clock = startTime,
      interval,
      startTime = startTime,
      callback = callback;
  
    // default options
    options = options || {};
    options.delay = options.delay || 1;
    options.precision = options.precision || 3;
  
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
    }
  
    function stop() {
      if (interval) {
        clearInterval(interval);
        interval = null;
      }
      return clock / 1000;
    }
  
    function reset() {
      let time = startTime;
      clock = time;
      render();
      return time / 1000;
    }

    function buzz() {
      stop();
      clock = startTime;
      callback();
    }
  
    function update() {
      clock -= delta();
      render();
      if (clock <= 0)
      {
        buzz();
      }
    }
  
    function render() {
      timer.innerHTML = (clock / 1000).toFixed(options.precision);
    }
  
    function delta() {
      var now = Date.now(),
        d = now - offset;
  
      offset = now;
      return d;
    }

    function setStartTime(newStartTime)
    {
      startTime = newStartTime;
    }
  
    // public API
    this.start = start;
    this.stop = stop;
    this.reset = reset;
    this.setStartTime = setStartTime;
  };