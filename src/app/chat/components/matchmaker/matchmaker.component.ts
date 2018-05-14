import { Component, OnInit } from '@angular/core';
import { } from "";
import { ChatService } from '../../providers/chat/chat.service';
@Component({
  selector: 'app-matchmaker',
  templateUrl: './matchmaker.component.html',
  styleUrls: ['./matchmaker.component.css']
})
export class MatchmakerComponent implements OnInit {

  private isBtnSelected : boolean = false;
  private showMatchContainer: boolean = false;
  private showMatchContainerClass: any = 'fas fa-caret-down float-right';
  private validationMessage: string = '';

  private matchTypeList = [
    {name: "5vs5", selected: false},
    {name: "2vs2", selected: false},
    {name: "3vs3", selected: false},
    {name: "1vs1", selected: false}
  ];
  private mapList = [
    {name:"Dust 2", selected:false},
    {name:"Nuke", selected:false},
    {name:"Mirage", selected:false},
    {name:"Inferno", selected:false},
    {name:"Cobblestone", selected:false},
    {name:"Overpass", selected:false},
    {name:"Cache", selected:false},
    {name:"Train", selected:false}
  ]
  private skillList = [

    [
      {imageUrl:"../../../../assets/images/ranks/silver1.png", name:"Silver 1", selected: false},
      {imageUrl:"../../../../assets/images/ranks/silver2.png", name:"Silver 2", selected: false},
      {imageUrl:"../../../../assets/images/ranks/silver3.png", name:"Silver 3", selected: false},
      {imageUrl:"../../../../assets/images/ranks/silver4.png", name:"Silver 4", selected: false},
      {imageUrl:"../../../../assets/images/ranks/silverelite.png", name:"Silver Elite", selected: false},
    ],
    [
      {imageUrl:"../../../../assets/images/ranks/goldnova1.png", name:"Goldnova 1", selected: false},
      {imageUrl:"../../../../assets/images/ranks/goldnova2.png", name:"Goldnova 2", selected: false},
      {imageUrl:"../../../../assets/images/ranks/goldnova3.png", name:"Goldnova 3", selected: false},
      {imageUrl:"../../../../assets/images/ranks/goldnovamaster.png", name:"Goldnova Master", selected: false}
    ],
    [
      {imageUrl:"../../../../assets/images/ranks/masterguardian.png", name:"Master Guardian 1", selected: false},
      {imageUrl:"../../../../assets/images/ranks/masterguardian2.png", name:"Master Guardian 2", selected: false},
      {imageUrl:"../../../../assets/images/ranks/masterguardianelite.png", name:"Master Guardian Elite", selected: false},
    ],
    [
      {imageUrl:"../../../../assets/images/ranks/DistinguishedMasterGuardian.png", name:"Distinguished Master Guardian", selected: false},
      {imageUrl:"../../../../assets/images/ranks/LegendaryEagle.png", name:"Legendary Eagle", selected: false},
      {imageUrl:"../../../../assets/images/ranks/LegendaryEagleMaster.png", name:"Legendary Eagle Master", selected: false},
      {imageUrl:"../../../../assets/images/ranks/SupremeMasterFirstClass.png", name:"Supreme Master First Class", selected: false},
      {imageUrl:"../../../../assets/images/ranks/TheGlobalElite.png", name:"The Global Elite", selected: false}
    ]
  ]

  //Selected values
  private selectedMatchType = "";
  private selectedMaps = [];
  private selectedRank = '';

  constructor(private chatService: ChatService) { }

  ngOnInit() {
  }

  toggleMatch() {
    this.showMatchContainer = !this.showMatchContainer;
    //change icon
    if (this.showMatchContainer) {
      this.showMatchContainerClass = 'fas fa-caret-up float-right';
    } else {
      this.showMatchContainerClass = 'fas fa-caret-down float-right';
    }
  }

  addMatchType(matchType: any) {
    this.matchTypeList.forEach((item) => {
      item.selected = false;
    })
    if(matchType.selected) {
      this.selectedMatchType = '';
      matchType.selected = false;
    }else {
      matchType.selected = true;
      this.selectedMatchType = matchType.name;
    }
    
  }

  addMap(map : any) {
    if (map.name) {
      //is map in list
      let mapInList = this.selectedMaps.includes(map.name);
      if (this.selectedMaps.length <= 1) {

        //check if map is in array
        if(mapInList){
          //gets the index
          let itemIndex = this.selectedMaps.indexOf(map.name);
          map.selected = false;
          this.selectedMaps.splice(itemIndex, 1);
        }else{
          map.selected = true;
          this.selectedMaps.push(map.name);
        }
      }
      else {
        if(mapInList) {
          //remove it
          //gets the index
          let itemIndex = this.selectedMaps.indexOf(map.name);
          map.selected = false;
          this.selectedMaps.splice(itemIndex, 1);
        }
      }
    }
  }

  addRank(rank: any) {
    this.skillList.forEach((arr) => {
      arr.forEach((item) => {
        item.selected = false;
      })
    })
    if(rank.selected) {
      this.selectedRank = '';
      rank.selected = false;
    }else {
      this.selectedRank = rank.name;
      rank.selected = true;
    }
  }

  findMatch() {
    //Get validation field
    let maps = this.selectedMaps;
    let matchType = this.selectedMatchType;
    let rank = this.selectedRank;
    if(maps.length > 0 && matchType !== '' && rank !== '') {

      let data = {
        maps: maps,
        matchType: matchType,
        rank: rank
      }

      this.chatService.sendMessage(data)
      .then(() => {
        //Reset arrays
        this.skillList.forEach((arr) => {
          arr.forEach((item) => {
            item.selected = false;
          })
        });
        this.matchTypeList.forEach((item) => {
          item.selected = false;
        });
        //Reset all fields
        this.selectedMaps = [];
        this.selectedMatchType = '';
        this.selectedRank = '';
        this.toggleMatch();
      });
    }else {
      this.validationMessage = 'Please fullfill the search match form!';
    }
  }


}
