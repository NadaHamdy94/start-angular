import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Output() portfolioLink=new EventEmitter<string>();
  @Output() aboutLink=new EventEmitter<string>();
  @Output() contactLink=new EventEmitter<string>();
  @Output() linkClicked=new EventEmitter<boolean>();
  setTrueIfLinkClicked()
  {
    this.linkClicked.emit(true);
  }
  constructor() { }
  ngOnInit(): void {
  }
}
