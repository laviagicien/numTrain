import { Time } from "@angular/common";

export class train{
    public destination: String;
    public hour: Time;
    public numTrain: String;

    constructor(){

    }

    setDestination(dest:String){
        this.destination = dest;
    }
      
    getDestination(){
        return this.destination;
    }

    setHour(hours:number, minutes:number){
        this.hour.hours = hours;
        this.hour.minutes = minutes;
    }

    getHour(){
        return this.hour.hours + ":" + this.hour.minutes;
    }
    
}