export class Evento {
    constructor(
      public _id?: string, public eventName?: string, public eventDate? : Date,
      public price?: number, public promotorID?: string, public localID?:string,
       public description?: string,  public eventStatus?: string, public bilhetesDisponiveis?: number,
        public eventPicture?: String) {
    }
    
  }