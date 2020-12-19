
export class UserFromToken {
  sub: string;
  authorities: string[];
  iat: Date;
  exp: Date;
}
