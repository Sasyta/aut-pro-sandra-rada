export {student}
export function age(n){
    return "your age is "+ n
}
class student{
    contructor(name,id){
        this.name= name;
        this.id= id;
    }
    get name (){
        return "your name is"+ this.name;
    }
    set name (value){
        this.name= value;
    }
}
