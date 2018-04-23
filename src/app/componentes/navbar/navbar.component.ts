import { Component, OnInit } from '@angular/core';
import {BsDropdownModule,BsDropdownToggleDirective,BsDropdownConfig,BsDropdownContainerComponent,BsDropdownDirective,BsDropdownMenuDirective,BsDropdownState} from 'angular-bootstrap-md/dropdown';
import {Router,RouterLink} from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    public router: Router,
  ) { }

  ngOnInit() {
  }

}
