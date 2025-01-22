import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule], // Ajout de FormsModule ici
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  login: string = '';
  password: string = '';

  constructor(private authService: AuthService) {}

  onLogin(): void {
    console.log('Formulaire soumis !', { login: this.login, password: this.password });
    this.authService.login(this.login, this.password).subscribe(
      (response) => {
        console.log('Réponse du backend :', response);
      },
      (error) => {
        console.error('Erreur :', error);
      }
    );
  }
}
