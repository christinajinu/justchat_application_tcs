
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ChatService } from '../chat.service';
import { userModel} from '../register/userModel';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  profiles:userModel|any;
  hide=true;
  valid=true;
  user={
    email:'',
    password:''
  }
  i=0;
  emailmatch:boolean=true;
  errorval:boolean=false;
  userItem=new userModel('','','');
  registerform:FormGroup|any;

  constructor(public serv:ChatService,private router:Router,private formBuilder:FormBuilder) { }
  sign_in_btn = document.querySelector("#sign-in-btn");
  sign_up_btn = document.querySelector("#sign-up-btn");
 
  container:any;
  ngOnInit(): void {
   
  }
 
  validateuser(){
    this.serv.validateuser(this.user)
    //  .subscribe(res=>{
    //   if(res.doc==null){
    //     this.errorval=true;
    //     setTimeout(()=>{
    //       this.errorval = false;
    //  }, 3000);
    //   }
    //   else{
    //   // localStorage.setItem('id',res.doc._id)
    // localStorage.setItem('token',res.token)
      this.router.navigate([`/chat`])
      }
      
    // })
    

  // }

  

}
