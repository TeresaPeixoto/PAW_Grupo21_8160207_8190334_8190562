export class Evento {
    constructor(public eventName?: string, 
      public local?: string, public eventDate? : Date,
      public price?: number, public lugares?: number,
       public description?: string, 
        public lotacao?:number) {
    }
    
  }