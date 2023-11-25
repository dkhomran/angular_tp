import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent  implements OnInit {


  constructor(private router: Router) {}


  goToUser() {
    this.router.navigate(["user"])
  }

  ngOnInit(): void {
    
  }
}
