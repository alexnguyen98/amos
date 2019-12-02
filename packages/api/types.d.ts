declare namespace Express {
  export interface Response {
    locals: any
  }
  export interface Request {
    user?: any
 }
}