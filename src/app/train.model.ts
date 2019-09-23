import { Time } from "@angular/common";

export class Train{
    public destination: String;
    public codeTerminus: String;
    public hour: Time;
    public numTrain: String;

    constructor(d: String, ct: String) {
        this.destination = d;
        this.codeTerminus = ct;
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

    setNumTrain(){
        let periode = this.hour.hours < 12 ? "4" : "5";
    
        let codeHour ;
    
        if(periode == "4"){
          codeHour = (this.hour.hours * 4 + Math.floor(this.hour.minutes/15) + 1) * 2 - 1
        }
        
        if(periode == '5'){
          codeHour = ((this.hour.hours - 12) * 4 + Math.floor(this.hour.minutes/15) + 1) * 2 - 1
        }
    
        if(codeHour.toString().length == 1){
            codeHour = "0" + codeHour;
        }

        this.numTrain = "16" + periode + this.codeTerminus + codeHour;
    }

    getNumTrain(){
        return this.numTrain;

    }

    reset(){
        this.destination = "";
        this.codeTerminus = "";
        this.hour = {hours: null, minutes: null};
        this.numTrain = "";
    }

}