class car {
    constructor(color,model){
        this.color=color;
        this.model=model;

    }
    startEngine(){
        console.log("starting engine");
        
    }
}
class mercedes extends car {
    constructor(engine,roof,color,model){
        super(color,model);
        this.engine=engine;
        this.roof=roof;

    }
}

let mer=new mercedes("v8","open","blue","2025")
let c= new car("green","1998");
console.log(mer);

