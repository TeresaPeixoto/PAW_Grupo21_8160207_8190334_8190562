export class Evento {
    constructor(
      public _id?: string, public eventName?: string, 
      public local?: string, public eventDate? : Date,
      public price?: number, public lugares?: number,
       public description?: string, 
        public lotacao?:number, public eventStatus?: string) {
    }
    
  }