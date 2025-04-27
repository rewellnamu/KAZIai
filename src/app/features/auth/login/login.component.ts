import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  role: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.role = this.route.snapshot.paramMap.get('role');
    console.log('Role:', this.role); // Debugging purpose
  }
}
