
//import {out} from  "./utility";

console.log('welcome koala');



function example(){

}

class TestPersist{
    constructor() {
        
    }

    writeObject(id, object){
        out(`${id} Writing Object To DB" + ${JSON.stringify(object)}`);
    }
}



class WebContext{
    constructor(){
        this.observers = new Set();
    }

    bindContext(value){
        this.observers.add(value);
    }

    destory(){
        this.observers.forEach(val=>{
            val.onDestory();
        });
    }
}


class Car{
    constructor(name){
        this.name = name;
    }

    print(){
        out(`car name ${this.name}`);
    }
}

class KeiListener{
    constructor(context, caller, callset){
        this.caller = caller;
        this.callset = callset;
        this.context = context;
        context.bindContext(this);
    }

    onDestory(){
       // out("Listner Being Destroyed");
        this.recall();
        this.caller = null;
        this.context = null;
        this.callset = null;
    }

    recall(){
        this.callset.delete(this);
    }
    

    attach(){
        this.callset.add(this);
    }

    post(object){
        this.caller(object);
    }
}

class KeiContext{
    constructor(persist){
        this.perist = persist;
    }
}

class Kei{
    constructor(keiContext, object) {
        this.private_keicontext = keiContext;
        this.private_value = object;
        this.private_observers = new Set();
    }

    get(caller){
        let before = JSON.stringify(this.private_value);
        caller(this.private_value);
        let after = JSON.stringify(this.private_value);
        let same = before === after;
        if(!same)
            this.private_notifyobserver(JSON.parse(before), this.private_value);
        //out(same)
    }

    private_notifyobserver(before, after){
        this.private_observers.forEach((val)=>{
            val.post(this.private_value);
        });
        let val = this.private_value;
        this.private_keicontext.perist.writeObject("7373", val);
    }

    listen(context, caller){
        let newListener = new KeiListener(context, caller, this.private_observers);
        this.private_observers.add(newListener);

        return newListener;
    }
}
const keiContext = new KeiContext(new TestPersist());

let mycar = new Car("Named Car");

const wrapCar = new Kei(keiContext, mycar);

let mycontext = new WebContext();


let register = wrapCar.listen(mycontext, (car)=>{
   $("#content").html(`Named: ${car.name}`);
})
wrapCar.get((val)=>{
    //val.print();
   // out(val)
   //val.name = "WOR"
   val.name = "Change me up";
});


wrapCar.get(val=>{
    //val.name = "Ahain";
})

register.attach();


wrapCar.get(val =>{
   // val.name = "ANOTHER!!";
});


mycontext.destory();








