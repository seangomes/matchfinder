import { Pipe, PipeTransform } from '@angular/core';
import { ChatMessage } from '../../models/chatmessage';


@Pipe({
  name: 'matchfilter',
  pure: false
})
export class MatchfilterPipe implements PipeTransform {

  transform(chatmessages: ChatMessage[], matchTypeSearch: string, mapSearch: string, skillSearch: string): any {
    if(chatmessages && chatmessages.length) {
      return chatmessages.filter(msg => {
        if(matchTypeSearch && msg.matchtype.toLowerCase().indexOf(matchTypeSearch.toLowerCase()) === -1) {
          return false;
        }
        if(mapSearch && msg.content.toLowerCase().indexOf(mapSearch.toLowerCase()) === -1) {
          return false;
        }
        if(skillSearch && msg.content.toLowerCase().indexOf(skillSearch.toLowerCase()) === -1) {
          return false;
        }
        return true;
      })
    }
    else {
      return chatmessages;
    }
  }

}
