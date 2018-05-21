import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../../../shared/models/user';

@Pipe({
  name: 'userFilter',
  pure: false
})
export class UserPipe implements PipeTransform {

  transform(userList: User[], searchUsername: string): any {
    console.log(searchUsername);
    console.log(userList);
    if(userList && userList.length) {
      return userList.filter(user => {
        if(searchUsername && user.username.toLowerCase().indexOf(searchUsername.toLowerCase()) === -1) {
          return false;
        }
      });
    }
    else {
      return userList;
    }

  }

}
