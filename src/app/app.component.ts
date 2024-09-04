import { Component } from '@angular/core';
import { UserComponent } from './user/user.component';
import { HeaderComponent } from './header/header.component';
import { TasksComponent } from './tasks/tasks.component';
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  users = DUMMY_USERS;
  title = 'first-app';
  selectedUserId = 'u1';

  get selectedUser(){
    return this.users.find((user) => user.id === this.selectedUserId)!
  }

  onSelectUser(id: string): void {
    this.selectedUserId = id;
  }

}
