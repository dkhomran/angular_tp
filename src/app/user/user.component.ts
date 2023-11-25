import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';



@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent  implements OnInit{


  constructor(private router : Router) {}

  user = {
    imagepath: "./assets/img/aa.png",
    fisrtname : "dekhil",
    lastname: "omran",
    age: 24
  }

  goToRegister() {
    this.router.navigate(['register'])
  }

  ngOnInit(): void {
    
  }
}
