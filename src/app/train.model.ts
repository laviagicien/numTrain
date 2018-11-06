import { Time } from "@angular/common";

export class Train{
    public destination: String;
    public codeTerminus: String;
    public hour: Time;
    public numTrain: String;

    constructor(){
        this.destination = "";
        this.codeTerminus = "";
        this.hour = {
            hours : null,
            minutes : null
        };
        this.numTrain = "";
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

    setCodeTerminus (terminus:String){
        this.codeTerminus = terminus;
    }

    getCodeTerminus (){
        return this.codeTerminus;
    }

}