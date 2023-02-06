import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  formgroup:any;
  formArray:any = [];
  posting = false;

  ngOnInit(): void {
    this.load();
  }

  constructor(private router:Router,private api:ApiService) {
    this.api.get("users").subscribe((result:any)=>{
      this.formArray = result;
      console.log(this.formArray.value);
    })
  }

  load(){
    this.formgroup = new FormGroup({
      email:new FormControl(""),
      password:new FormControl("")
    })
  }

  submit(data:any){
    console.log(data);

    for(let i = 0; i< this.formArray.length; i++){
      if(data.email == this.formArray[i].email && data.password == this.formArray[i].password){
        this.posting = true;
        confirm("Success"+ this.router.navigate(['home']));
      }
    }
    if(this.posting == false){
      alert("Invalid credentials");
    }

  }


  movebackto(){
    this.router.navigate(['']);
  }

}
