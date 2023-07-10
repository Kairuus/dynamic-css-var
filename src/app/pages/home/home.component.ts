import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent{

  constructor(private router: Router){}

  userID = '';
  password = '';

  userErrorMessage = '';
  passwordErrorMessage = '';

  invalidUserMessage = ''

  warning = true

  checkForSpace(userId: string, password: string) {
    if (userId.includes(' ')) {
      this.userErrorMessage = 'Contains Space';
    } else {
      this.userErrorMessage = '';
    }

    if (password.includes(' ')) {
      this.passwordErrorMessage = 'Contains Space';
    } else {
      this.passwordErrorMessage = '';
    }

  }

  userValidation(userId: string, password: string){

   let userDiv = (<HTMLElement>document.getElementById('userDiv'))
   let userInput = (<HTMLElement>document.getElementById('userInput'))

   let passwordDiv = (<HTMLElement>document.getElementById('passwordDiv'))
   let passwordInput = (<HTMLElement>document.getElementById('passwordInput'))

    if(userId !== 'testuser'){
      userDiv.style.backgroundColor = '#F95353'
      userInput.style.backgroundColor = '#F95353'
      this.invalidUserMessage = 'Invalid User or Password'
    }
    if(password !== 'mypassword'){
      passwordDiv.style.backgroundColor = '#F95353'
      passwordInput.style.backgroundColor = '#F95353'
      this.invalidUserMessage = 'Invalid User or Password'
    }

    if(userId === 'testuser' && password === 'mypassword'){
      this.router.navigate(['/content'])
    }
  }

  clearAll(){

    let userDiv = (<HTMLElement>document.getElementById('userDiv'))
    let userInput = (<HTMLElement>document.getElementById('userInput'))

    let passwordDiv = (<HTMLElement>document.getElementById('passwordDiv'))
    let passwordInput = (<HTMLElement>document.getElementById('passwordInput'))

    this.userID = '';
    this.password = '';
    this.userErrorMessage = '';
    this.passwordErrorMessage = '';

    userDiv.style.backgroundColor = ''
    userInput.style.backgroundColor = ''
    passwordDiv.style.backgroundColor = ''
    passwordInput.style.backgroundColor = ''

  }
}
