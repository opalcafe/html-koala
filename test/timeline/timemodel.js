
//class representing a span of time in a chronology
class TimeAge{
    constructor(chrono, name, chronoStart, chronoEnd){
        this.chrono = chrono;
        this.name = name;
        this.start = chronoStart;
        this.end = chronoEnd;
    }

    //gets the Universal Units (START) date for this age
    getUUStart(){
        const scale = this.chrono.scale;
        const offset = this.chrono.uuStart;
        const cmap = scale * this.start + offset;

        return cmap;
    }
    //gets the Universal Units (END) date for this age
    getUUEnd(){
        const scale = this.chrono.scale;
        const offset = this.chrono.uuStart;
        const cmap = scale * this.end + offset;
        return cmap;
    }
}

//a chronology is unit of decimal time, 
class TimeChrono{
    constructor(uuStart, scale, name){
        this.uuStart = uuStart;
        this.scale =scale;
        this.name = name;

        this.ages = new Map();
    }

    //Create and return new age object
    createAge(name, start, end){
        let someAge = new TimeAge(this, name, start, end);
        this.ages.set(name,someAge);
        return someAge;
    }
    print(){
        console.log(this);
    }
}

//contains all chronology objects to represent a time model
class TimeModel{
    constructor(){
        this.map = new Map();
    }

    setChrono(chrono){
        this.map.set(chrono.name, chrono);
    }
}


//testing stuff

let timeModel = new TimeModel();

let cEarth = new TimeChrono(80, 1, "earth");

timeModel.setChrono(cEarth);

let ice = cEarth.createAge("Ice Age", 89, 1001);
let war = cEarth.createAge("Thosand Year War", 100, 1100)

console.log("start: " +ice.getUUStart() + " end: " + ice.getUUEnd());
console.log("start: " +war.getUUStart() + " end: " + war.getUUEnd());


cEarth.print();