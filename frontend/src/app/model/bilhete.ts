export class Bilhete {
    constructor(
        public _id?: string,
        public eventID?: String,
      public lugares?: number, 
        public comprovativo?: String,
        public ticketStatus?: String,
        public userID?:string) {
    }
    
  }

