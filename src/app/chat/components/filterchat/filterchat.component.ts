import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filterchat',
  templateUrl: './filterchat.component.html',
  styleUrls: ['./filterchat.component.css']
})
export class FilterchatComponent implements OnInit {

  @Output() searchResult = new EventEmitter<any>();

  matchTypeSearch = '';
  mapSearch = '';
  skillSearch = '';

  private matchTypeDropdown = [
    {name: ""},
    {name: "5vs5"},
    {name: "2vs2"},
    {name: "3vs3"},
    {name: "1vs1"}
  ];

  private mapsDropdown = [
    {name: ""},
    {name: "Dust2"},
    {name: "Nuke"},
    {name: "Cache"},
    {name: "Miragge"}
  ];

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

  constructor() { }

  ngOnInit() {
  }

  selectRank(skill) {
    this.skillSearch = '';
    this.skillList.forEach((arr) => {
      arr.forEach((item) => {
        item.selected = false;
      })
    })
    if(skill.selected) {
      this.skillSearch = '';
      skill.selected = false;
    }else {
      this.skillSearch = skill.name;
      skill.selected = true;
    }
    
  }

  clearFilters() {
    this.skillSearch = '';
    this.matchTypeSearch = '';
    this.mapSearch = '';
    this.skillList.forEach((arr) => {
      arr.forEach((item) => {
        item.selected = false;
      })
    })
  }

  ngOnChanges() {
    this.searchResult.emit(this.skillSearch);
    this.searchResult.emit(this.matchTypeSearch);
    this.searchResult.emit(this.mapSearch);
  }

}
