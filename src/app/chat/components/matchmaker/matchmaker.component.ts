import { Component, OnInit } from '@angular/core';
import { } from "";
@Component({
  selector: 'app-matchmaker',
  templateUrl: './matchmaker.component.html',
  styleUrls: ['./matchmaker.component.css']
})
export class MatchmakerComponent implements OnInit {


  private showMatchContainer: boolean = false;
  private showMatchContainerClass: any = 'fas fa-caret-down float-right';

  private matchTypeList = ["5vs5", "2vs2", "3vs3", "1vs1"];
  private mapList = ["Dust 2", "Nuke", "Mirage", "Inferno", "Cobblestone", "Overpass", "Cache", "Train"];
  private skillList = [

    [
      {imageUrl:"../../../../assets/images/ranks/silver1.png", name:"Silver 1"},
      {imageUrl:"../../../../assets/images/ranks/silver2.png", name:"Silver 2"},
      {imageUrl:"../../../../assets/images/ranks/silver3.png", name:"Silver 3"},
      {imageUrl:"../../../../assets/images/ranks/silver4.png", name:"Silver 4"},
      {imageUrl:"../../../../assets/images/ranks/silverelite.png", name:"Silver Elite"},
    ],
    [
      {imageUrl:"../../../../assets/images/ranks/goldnova1.png", name:"Goldnova 1"},
      {imageUrl:"../../../../assets/images/ranks/goldnova2.png", name:"Goldnova 2"},
      {imageUrl:"../../../../assets/images/ranks/goldnova3.png", name:"Goldnova 3"},
      {imageUrl:"../../../../assets/images/ranks/goldnovamaster.png", name:"Goldnova Master"}
    ],
    [
      {imageUrl:"../../../../assets/images/ranks/masterguardian.png", name:"Master Guardian 1"},
      {imageUrl:"../../../../assets/images/ranks/masterguardian2.png", name:"Master Guardian 2"},
      {imageUrl:"../../../../assets/images/ranks/masterguardianelite.png", name:"Master Guardian Elite"},
    ],
    [
      {imageUrl:"../../../../assets/images/ranks/DistinguishedMasterGuardian.png", name:"Distinguished Master Guardian"},
      {imageUrl:"../../../../assets/images/ranks/LegendaryEagle.png", name:"Legendary Eagle"},
      {imageUrl:"../../../../assets/images/ranks/LegendaryEagleMaster.png", name:"Legendary Eagle Master"},
      {imageUrl:"../../../../assets/images/ranks/SupremeMasterFirstClass.png", name:"Supreme Master First Class"},
      {imageUrl:"../../../../assets/images/ranks/TheGlobalElite.png", name:"The Global Elite"}
    ]
  ]

  //Selected values
  private selectedMatchType = "";
  private selectedMaps = [];
  private selectedRank = '';

  constructor() { }

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

  addMatchType(matchType: string) {
    this.selectedMatchType = matchType;
  }

  addMap(mapname: string) {
    if (mapname) {
      if (this.selectedMaps.length <= 2) {

        //check if map is in array
        if(this.selectedMaps.includes(mapname)){
          //gets the index
          let itemIndex = this.selectedMaps.indexOf(mapname);
          this.selectedMaps.splice(itemIndex, 1);
        }else{
          this.selectedMaps.push(mapname);
        }

      }
    }
  }

  addRank(rankname: string) {
    this.selectedRank = rankname;
  }

  findMatch() {

  }


}
