export interface user {
  id: number;
  name: string;
  nickname: string;
  correo: string;
  password: string;
  profileImage: string;
  estatus: boolean;
}

export interface userLogin{
  nickname:string,
  password:string
}

