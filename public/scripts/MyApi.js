



export class MyApi{
    #hey = 90;
    constructor(){
        if(MyApi.instance)
            return MyApi.instance;
        this.id = Math.random() * 1000;
        MyApi.instance = this;
    }



    wow(){
        console.log("id: " + this.id);
    }

    hey(){
        return console.log(`heya: ${this.#hey}`);
    }

    someimp(){
        this.imp.getSome();
    }


}



MyApi.init = function(imp){
    let api = new MyApi();
   
    if(api.imp){
        console.warn("Api already initialised, call to init ignored. Remove this call");
        return;
    }
    api.imp = imp;
    
    console.log("init Mypi: %O", imp);
}
//MyApi.init = apiInit;

export class TestStatic {
    static #INSTANCE;

    static initStatic(){
        TestStatic.#INSTANCE = "My Private Static Instance";
        console.log("init static")
    }

    static getMe(){
        return TestStatic.#INSTANCE;
    }



}