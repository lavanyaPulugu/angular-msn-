import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

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
