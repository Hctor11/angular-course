import { Component, Input, Output, EventEmitter, output } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import type User from './user.model';

// type User = {
//   id: string;
//   avatar: string;
//   name: string;
// }



@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})

export class UserComponent {
  @Input({required: true}) userObj!: {
    id: string;
    avatar: string;
    name: string;
  };
  @Input({required: true}) selected!: boolean;
  @Input({required: true}) id!: string;
  @Input({required: true}) avatar!: string;
  @Input({required: true}) name!: string;
  @Output() select = new EventEmitter<string>();

  // select = output<string>();

  // avatar = input.required<string>();
  // name = input.required<string>();

  // imagePath = computed(() => 'assets/users/' + this.avatar())

  get imagePath(){
    return 'assets/users/' + this.userObj.avatar;
  }

  onSelectUser(){
    this.select.emit(this.userObj.id)
  }
}
