export class User {
  constructor(public userName?: string, public email?: string, public birthDate? : Date,
    public cellphone?: number, public nif?: number, public address?: string, public password?:string,
    public userStatus?: string, public role?:string, public nBilhetes?: number) {
  }
  
}
