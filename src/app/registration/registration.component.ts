import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit{

  formgroup:any;
  posting = false;

  constructor(private api:ApiService,private router:Router){ }


  ngOnInit(): void {
    this.load();
  }

  load(){
    this.formgroup = new FormGroup({
      name:new FormControl("",Validators.required),
      email:new FormControl("",Validators.compose([Validators.required,Validators.email])),
      password:new FormControl("",Validators.required)
    })
  }

  submit(data:any){
    this.api.post("users",data).subscribe((result:any)=>{
      console.log(result);
    })

    localStorage.setItem("users",JSON.stringify(data));

    this.posting = true;
    this.router.navigate(['login']);
  }


  moveto(){
    this.router.navigate(['login']);
  }

}

