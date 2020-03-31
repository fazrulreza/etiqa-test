import { Component, OnInit } from '@angular/core';
import { User } from '../user'
import { UserService } from '../user.service'
import { UserDetailsComponent } from '../user-details/user-details.component'

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  providers: [UserService]
})
export class UserListComponent implements OnInit {

  users: User[]
  selectedUser: User

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService
      .getAllUser()
      .then((users: User[]) => {
        this.users = users;
      })
  }

  private getIndexOfUser = (userId: Number) => {
    return this.users.findIndex((user) => {
      return user.id === userId;
    })
  }

  selectUser = (user: User) => {
    this.selectedUser = user
  }

  createNewUser = () => {
    const user: User = {
      id: 0,
      username: '',
      email: '',
      phone_no: '',
      skillsets: '',
      hobby: ''
    }
    this.selectUser(user)
  }

  createUser = (user: User) => {
    this.users.push(user);
    this.selectUser(user);
    return this.users;
  }

  updateUser = (user: User) => {
    const x = this.getIndexOfUser(user.id);
    if (x !== -1) {
      this.users[x] = user;
      this.selectUser(user);
    }
    return this.users;
  }

  deleteUser = (userId: Number) => {
    const x = this.getIndexOfUser(userId);
    if (x !== -1) {
      this.users.splice(x, 1);
      this.selectUser(null);
    }
    return this.users;
  }

}