// it tells about one to may dependencies between objects so that if one object is changed other automatically gets updated
  

class Subject {
    constructor() {
      this._observers = [];
    }
  
    subscribe(observer) {
      this._observers.push(observer);
    }
  
    unsubscribe(observer) {
      this._observers = this._observers.filter(obs => observer !== obs);
    }
  
    fire(change) {
      this._observers.forEach(observer => {
        observer.update(change);
      });
    }
  }
  
  class Observer {
    constructor(state) {
      this.state = state;
      this.initialState = state;
    }
  
    update(change) {
      let state = this.state;
      switch (change) {
        case 'INC':
          this.state = ++state;
          break;
        case 'DEC':
          this.state = --state;
          break;
        default:
          this.state = this.initialState;
      }
    }
  }
  
  // usage
  const sub = new Subject();          //initialises the array _observer inside sub object
  
  const obs1 = new Observer(1);        // for obs1 properties are state and initial state =1
  const obs2 = new Observer(19);      //for obs2 properties are state and initial state = 19
  
  sub.subscribe(obs1);                // calls subject fn then subscribe and pushes obs1 in _observer
  sub.subscribe(obs2);
  
  sub.fire('DEC');                      // this is used to decrement the state value
  
  console.log(obs1.state); // 0         // this prints the value of state for obs1
  console.log(obs2.state); // 18        //for obs2
