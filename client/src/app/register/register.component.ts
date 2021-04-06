import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { userModel} from './userModel';

import { from } from 'rxjs';
import { ChatService } from '../chat.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
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
     

  ngOnInit():void {
    this.serv.getallprofiles().subscribe((data)=>{
      this.profiles=JSON.parse(JSON.stringify(data));
    })
  this.registerform=this.formBuilder.group({
    'uname':[this.userItem.uname,[Validators.required]],
    'email':[this.userItem.email,[Validators.required,Validators.email]],
    'password':[this.userItem.password,[Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]]//add pwd validation
  })
}

  adduser(){
    // this.emailval();
    if(this.valid){
      this.serv.adduser(this.userItem);
      this.userItem=new userModel('','','');
      alert("successfully added");
      this.router.navigate(['/login'])

   
    }
    else{
      this.emailmatch=false;
      setTimeout(()=>{
        this.emailmatch =true;
      }, 3000);
    }
  }

}