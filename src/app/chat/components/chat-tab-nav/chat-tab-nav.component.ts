import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { NavTab } from '../../models/navtab';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-chat-tab-nav',
  templateUrl: './chat-tab-nav.component.html',
  styleUrls: ['./chat-tab-nav.component.css']
})
export class ChatTabNavComponent implements OnInit {


  navTabsListSubject: BehaviorSubject<NavTab[]> = new BehaviorSubject<NavTab[]>([
    {id:1, canRemove: false, name:"Findmatch"},
    {id:2, canRemove: true, name:"Test"}
  ]);
  navTabsList$: Observable<NavTab[]> = this.navTabsListSubject.asObservable();
  constructor() {

  }

  ngOnInit() {
  }

  addTab(tab: NavTab) {
    if(tab) {
      let tabs = this.navTabsListSubject.getValue();
      let newTab : NavTab = {
        canRemove:true,
        name: tab.name,
        id: tabs.length + 1
      };
      tabs.push(newTab);
      this.navTabsListSubject.next(tabs);
    }
  }

  removeTab(tab: NavTab) {
    if(tab.canRemove) {
      let tabs = this.navTabsListSubject.getValue();
      tabs.forEach((tab, index) => {
        if(tab.id === tab.id) {
          tabs.splice(index, 1);
        }
      });
      this.navTabsListSubject.next(tabs);
    }
  }

}
