export default interface IUser {
    id?: any | null,
    fullname: string,
    email: string,
    homeaddress? : string ,
    phonenumber? : string ,
    password: string,
    token? : any ,
    roles?: Array<string>
  }