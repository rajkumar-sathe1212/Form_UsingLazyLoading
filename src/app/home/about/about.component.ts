import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit{

  datas:any;

  ngOnInit(): void {

  }

  constructor(private api:ApiService) {
    this.api.get("users").subscribe((result:any)=>{
      this.datas = result;
    })
   }

   edit(data:any){

   }

   delete(data:any){
    if(confirm("sure to delete")){
      this.api.delete("users",data + data.id).subscribe((result:any)=>{

      })
    }
   }



}
