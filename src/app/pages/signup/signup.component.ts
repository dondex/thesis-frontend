import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userService:UserService,private snack:MatSnackBar) { }

  public user = {
    username:'',
    password:'',
    firstName:'',
    lastname:'',
    email:'',
    phone:'',
  }

  ngOnInit(): void {
  }

  formSubmit()
  {
    console.log(this.user);
    if(this.user.username=='' || this.user.username ==null)
    {
      // alert('User is required !!');
      this.snack.open("Username is required !!", '', {
        duration:3000,

      });
      return;
    }

    //validate

    //addUser: userservice
    this.userService.addUser(this.user).subscribe(
      (data:any)=>{
        //success
        console.log(data)
        // alert("success");
        // Swal.fire('Successfully done !!', 'User id is '+ data.id, 'success');
        Swal.fire('Welcome to ICC Exam Portal !!', 'You have Successfully Registered');
      },
      (error)=>{
        //error
        console.log(error)
        // alert('something went wrong');
        this.snack.open('This user already exist !!', '',{
          duration: 3000,
        })
      }
    )
  }

  //this.user

}
