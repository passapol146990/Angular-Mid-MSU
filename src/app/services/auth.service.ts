import { Injectable } from '@angular/core';
import user from "./members.json";

interface UserData {
  username: string,
  password: string,
  fname: string,
  lname: string,
  brithday: string,
  image: string,
  role: string
}

@Injectable({ providedIn: 'root' })


export class AuthService {
  account = new Map<string, UserData>();

  constructor() {
    user.forEach(element => {
      this.account.set(element.username,element);
    });
   }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('auth_token');
    return !!token;
  }

  login(u: string, p: string) {
    const a = this.account.get(u);
    if(!a){
      return {status:400,message:"ไม่พบอีเมลผู็ใช้นี้ในระบบ"}
    }
    if(a.password != p){
      return {status:400,message:"รหัสผ่านไม่ถูกต้อง"}
    }
    this.loginSuccess(JSON.stringify(a));
    return {status:200,message:"เข้าสู่ระบบสำเร็จ"}
  }

  getSession(){
    return JSON.parse(localStorage.getItem('auth_token')||"");
  }

  loginSuccess(token: string) {
    localStorage.setItem('auth_token', token);
  }

  logout() {
    localStorage.removeItem('auth_token');
  }
}