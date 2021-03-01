import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  isSearchBarVisible : boolean;

  ngOnInit(): void {
    this.isSearchBarVisible = false;
  }

  showSearchBar = () : void => {
    this.isSearchBarVisible = true;
    console.log('Search triggered')
  }
}
