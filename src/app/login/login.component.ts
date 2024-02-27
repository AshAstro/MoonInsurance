import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../_service/api-service';
import { loginUser } from '../loginUser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  role: string = 'user';
  username: string = '';
  password: string = '';
  loading: boolean = false;
  //apiService: any;

constructor(private apiService: ApiServiceService){}

ngOnInit(): void {
    
}

// loginUser() {
//   console.log('i am inside LoginUser');
//   this.apiService.loginUser(this.loginUser).subscribe(() => {
//     this.loginUser();
//   });
// }
loginUser() {
  console.log('I am inside loginUser');
  const user = new loginUser(); // Create an instance of loginUser
  user.email = this.username; // Set email
  user.password = this.password; // Set password

  this.apiService.loginUser(user).subscribe(() => {
    
  });
}

  login() {
    this.loading = true;
    // Simulating login process for 3 seconds
    setTimeout(() => {
      if (this.role === 'admin') {
        alert('Admin logged in successfully!');
        // Redirect to admin dashboard or desired page
      } else {
        alert('User logged in successfully!');
        // Redirect to user dashboard or desired page
      }
      this.loading = false;
    }, 3000);
  }

}
