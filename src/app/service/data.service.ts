import { BadInput } from './../common/bad-input';
import { catchError, map } from 'rxjs/operators';
import { NotFoundError } from './../common/not-found-error';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpParams } from '@angular/common/http';

import { HttpHeaders } from '@angular/common/http';
import { JwtModule, JwtHelperService } from '@auth0/angular-jwt';
import { observable, Observable } from 'rxjs';
import { AppError } from '../common/app-error';
import { tokenName } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  url = 'http://localhost:3000';


  currentUser: any;
  userId;
  image: any;
  imagepost: any;
  tokens: any;
  admin:boolean;
  user: boolean;
  redirectUrl: string;

  constructor(private http: HttpClient) {
    let token = localStorage.getItem('token');

  }
  logxyz() {
    return ("a");
  }

  register(credentials) {
    console.log("s")
    const hheaders = new HttpHeaders({ 'x-source': 'web' });
    return this.http.post(this.url + "/api/user/register", credentials, { headers: hheaders })
      .subscribe(
        response => {

          console.log("a")
          let result = response
          console.log(result)
        },
        (error: Response) => {
          if (error.status === 404)
            alert('Post Already Deleted');
          else {
            alert('An unexpected error occured.');
            console.log(error);
          }
        }
      )
  }
  // register(credentials) {
  //   console.log("s")
  //   const hheaders = new HttpHeaders({ 'x-source': 'web' });
  //   return this.http.post(this.url + "/api/user/register", credentials, { headers: hheaders }) 
  //   .pipe(map(
  //     response => {
  //       console.log(response);            
  //     },
  //   ))}


  login(credentials) {
    const hheaders = new HttpHeaders({ 'x-source': 'web' });
    console.log(credentials)
    return this.http.post(this.url + "/api/user/login", credentials, { headers: hheaders })

      .pipe(map(
        response => {
          console.log("a")
          if (response && response["msg"]) {
            this.user=true
            localStorage.setItem('token', response["msg"]);

            return true;
          }
          else return false;
        }
      ))
  }

  pledge(credentials) {
    let toke = localStorage.getItem("token");
    let token = "Token " + toke;
    const hheaders = new HttpHeaders({ 'x-source': 'web', 'x-auth-token': toke })
    return this.http.post(this.url + "/api/user/form", credentials, { headers: hheaders })

      .pipe(map(
        response => {
          console.log(response);
        },
      ))
  }

  profile() {
    let toke = localStorage.getItem("token");
    let token = "Token " + toke;

    const hheaders = new HttpHeaders({ 'x-source': 'web', 'x-auth-token': toke })
    const requestOptions = {
      header: hheaders,
    }
    let pl = this.url + "/api/user/profile"
    console.log(pl)
    return this.http.get(pl, { headers: hheaders })
      .pipe(map(
        response => {
          console.log(response);
          return (response)
        },
      ))
  }

  feed(credentials) {
    console.log("s")
    let toke = localStorage.getItem("token");
    let token = "Token " + toke;
    const hheaders = new HttpHeaders({ 'x-source': 'web', 'x-auth-token': toke })
    return this.http.post(this.url + "/api/user/feedback", credentials, { headers: hheaders })

      .pipe(map(
        response => {
          console.log(response);
        },
      ))
  }

  gfeed() {

    console.log("h")
    const headers = new HttpHeaders({ "x-source": "web" })
    let ul = this.url + "/api/user/feedback"
    console.log(ul)
    return this.http.get(ul, { headers })
      .pipe(map(
        response => {
          console.log(response);
          return (response)
        },
      ))
  }

  gsfeed() {
    console.log("h")
    const headers = new HttpHeaders({ "x-source": "web" })
    let params = new URLSearchParams();
    params.append("userId", this.userId)
    let ul = this.url + "/api/user/feedback/:userid"
    console.log(ul)

    return this.http.get(ul, { headers })
      .pipe(map(
        response => {
          console.log(response);
          return (response)
        },
      ))
    //  .subscribe(
    //   response => {

    //       console.log("a")
    //       let result = response
    //       console.log(result)
    //     })
  }

  activatetoken(token) {
    const headers = new HttpHeaders({ "x-source": "web" })
    let ul = this.url + "/api/user/activate?" + 'token=' + token;
    return this.http.post(ul, {}, { headers: headers })
      .pipe(map(
        response => {
          console.log(response);
          return (response)
        },
      ))
  }


  adminregister(credentials) {
    console.log("s")
    return this.http.post(this.url + "/api/admin/register", credentials)
      .subscribe(response => {

        console.log("a")
        let result = response
        console.log(result)
      })
  }

  adminlogin(credentials) {
    const hheaders = new HttpHeaders({ 'x-source': 'web' });
    return this.http.post(this.url + "/api/admin/login", credentials, { headers: hheaders })


      .pipe(map(
        response => {
          // localStorage.setItem('access_token', response.get()
          console.log("a")
          let result = response
          console.log(result)
          let header = new HttpHeaders();
          console.log(header)
          console.log(response["msg"])
          if (response && response["msg"]) {
            this.admin=true;
            localStorage.setItem('token', response["msg"]);

            return true;
          }
          else return false;

        }))
  }


  admindashboard(result) {
    let toke = localStorage.getItem("token");
    console.log(result)
    const hheaders = new HttpHeaders({ 'x-source': 'web', 'x-auth-token': toke })
    return this.http.post(this.url + "/api/admin/dashboard", result, { headers: hheaders })

      .pipe(map(
        response => {
          console.log(response);
          return (response)
        },
      ))
  }

  adminformsapproved() {
    let toke = localStorage.getItem("token");

    const headers = new HttpHeaders({ 'x-auth-token': toke, "x-source": "web" })
    let ul = this.url + "/api/admin/approvedForms"
    console.log(ul)
    return this.http.get(ul, { headers })
      .pipe(map(
        response => {
          console.log(response);
          return (response)
        },
      ))
  }


  approvals() {

    let toke = localStorage.getItem("token");

    const headers = new HttpHeaders({ 'x-auth-token': toke, "x-source": "web" })
    //  const requestOptions = {                                                                                                                                                                                 
    //   headers:hheaders , 
    // };
    let ul = this.url + "/api/admin/pendingApprovalForms"
    console.log(ul)
    return this.http.get(ul, { headers })
      .pipe(map(
        response => {
          console.log(response);
          return (response)
        },
      ))

  }

  checkapproval(fa) {
    let toke = localStorage.getItem("token");
    console.log(fa)
    console.log("a")

    const headers = new HttpHeaders({ 'x-auth-token': toke, "x-source": "web" })
    return this.http.put(this.url + "/api/admin/approval", fa, { headers: headers })
      .pipe(map(
        response => {
          console.log(response);
          return (response)
        },
      ))
  }

  upload(f){
    console.log(f)
    let toke = localStorage.getItem("token");
    const formData = new FormData();
      
          formData.append('image', this.imagepost);
          formData.append("Tag",f["Tags"])
          formData.append("Description",f["Description"])
    const headers = new HttpHeaders({'x-auth-token': toke ,"x-source":"web"})
  
    return this.http.post(this.url + "/api/admin/content", formData, { headers: headers })
    .subscribe(
      response => {
 
          console.log("a")
          let result = response
          console.log(result)
        })

  }
  upload1(f)
  { 
    console.log(f)
    let toke = localStorage.getItem("token");
    const formData = new FormData();
      
          formData.append('review', this.image);
          formData.append("feedback",f["feedback"])
          formData.append("Subject",f["Subject"])    
    const headers = new HttpHeaders({'x-auth-token': toke ,"x-source":"web"})
    return this.http.post(this.url + "/api/user/feedback", formData, { headers: headers })
    .subscribe(
      response => {
          console.log("a")
          let result = response
          console.log(result)
        })
  }
  // uploadImage(f){

  //   let toke = localStorage.getItem("token");
  //   console.log(f)
  //   const headers = new HttpHeaders({'x-auth-token': toke ,"x-source":"web"})

  //   return this.http.post(this.url + "/api/admin/content", f, { headers: headers })
  //   .subscribe(
  //     response => {

  //         console.log("a")
  //         let result = response
  //         console.log(result)
  //       })}
  uploadImage(image: File) {
    this.imagepost = image

  }
  uploadImage1(image: File) {
    this.image = image

  }
  imageget() {



    const headers = new HttpHeaders({ "x-source": "web" })

    return this.http.get(this.url + "/api/content", { headers: headers })
      .pipe(map(
        response => {
          console.log(response);
          return (response)
        },
      ))
  }
  videoget() {


    const headers = new HttpHeaders({ "x-source": "web" })

    return this.http.get(this.url + "/api/video", { headers: headers })
      .pipe(map(
        response => {
          console.log(response);
          return (response)
        },
      ))
  }


  video(value) {

    let toke = localStorage.getItem("token");

    const headers = new HttpHeaders({ 'x-auth-token': toke, "x-source": "web" })
    //  const requestOptions = {                                                                                                                                                                                 
    //   headers:hheaders , 
    // };
    return this.http.post(this.url + "/api/admin/video", value, { headers: headers })
      .pipe(map(
        response => {
          console.log(response);
          return (response)
        },
      ))
  }

  videodel(value) {

    let toke = localStorage.getItem("token");

    const headers = new HttpHeaders({ 'x-auth-token': toke, "x-source": "web" })
    let options = {
      headers: headers,
      body: value
    };

    return this.http.delete(this.url + "/api/admin/video", options)
      .pipe(map(
        response => {
          console.log(response);
          return (response)
        },
      ))

  }

  forgotpassword(f) {
    console.log('a')
    const headers = new HttpHeaders({ "x-source": "web" })
    console.log(f)
    return this.http.post(this.url + "/api/user/sendPasswordResetEmail", f, { headers: headers })
      .pipe(map(
        response => {
          console.log("h")
          console.log(response);
          return (response)
        },
      ))
  }

  forgotpasswordtwo(token) {
    console.log(token)
    this.tokens = token
  }
  forgot(f) {
    const headers = new HttpHeaders({ "x-source": "web" })
    let a = this.url + "/api/user/resetPassword?" + 'token=' + this.tokens;
    return this.http.put(a, f, { headers: headers })
      .pipe(map(
        response => {
          console.log("h")
          console.log(response);
          return (response)
        },
      ))
  }
  changepassword(f) {
    let toke = localStorage.getItem("token");
    console.log(f)
    console.log("a")
    let a = this.url + "/api/user/changePassword"
    const headers = new HttpHeaders({ 'x-auth-token': toke, "x-source": "web" })
    return this.http.put(a, f, { headers: headers })
      .pipe(map(
        response => {
          console.log("h")
          console.log(response);
          return (response)
        },
      ))
  }



  logout() {
    this.currentUser = null;
    localStorage.clear();

  }
  // isLoggedIn() {
  //   let toke = localStorage.getItem("token")
  //   const helper = new JwtHelperService();
  //   const expirationDate = helper.getTokenExpirationDate(toke);
  //   return (expirationDate);
  // }
  isLoggedIn() {
    if(this.user==true)
    {
    let toke = localStorage.getItem("token")
    const helper = new JwtHelperService();
    const expirationDate = helper.getTokenExpirationDate(toke);
    return (expirationDate);
    }
    else{
      return false;
    }
  }

  isLoggedInAdmin() {
    if(this.admin==true)
    {
    let toke = localStorage.getItem("token")
    const helper = new JwtHelperService();
    const expirationDate = helper.getTokenExpirationDate(toke);
    //console.log(expirationDate)
    return (expirationDate);
    
    }
    else
    {
      return false;
    }
  }

  displayUser() {
    let token = localStorage.getItem('token')
    if (!token) return null;

    return new JwtHelperService().decodeToken(token);
  }

  

  // use private keyword if needed
  private handleError(error: Response) {
    if (error.status === 400) {
      // console.log('handled error' + error.status);
      return Observable.throw(new BadInput(error.json()));
    }

    if (error.status === 404)
      return Observable.throw(new NotFoundError());

    return Observable.throw(new AppError(error));
  }
}