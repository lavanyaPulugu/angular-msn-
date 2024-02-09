import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }
  home(){
    this.router.navigate(['home'])
  }

  team(){
    this.router.navigate(['team']);
  }
about(){
  this.router.navigate(['about us']);
}
contact(){
  this.router.navigate(['contact us']);
}
}
