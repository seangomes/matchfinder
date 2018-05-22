import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../../../shared/models/user';

@Pipe({
  name: 'userFilter',
  pure: false
})
export class UserPipe implements PipeTransform {

  transform(userList: User[], searchUsername: string, searchRank: string, searchClanname: string): any {
    if(userList && userList.length) {
      return userList.filter(user => {
        if(searchUsername && user.username.toLowerCase().indexOf(searchUsername.toLowerCase()) === -1) {
          return false;
        }
        if(searchRank && user.rank.toLowerCase().indexOf(searchRank.toLowerCase()) === -1) {
          return false;
        }
        if(searchClanname && user.clan.toLowerCase().indexOf(searchClanname.toLowerCase()) === -1) {
          return false;
        }
        return true;
      });
    }
    else {
      return userList;
    }

  }

}
