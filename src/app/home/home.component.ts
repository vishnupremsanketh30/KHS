import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isShownM = true;
  isShownV = true;
  constructor() { }

  ngOnInit() {
    if (window.screen.width <= 500) { // 768px portrait
      this.isShownM = false;
      this.isShownV = false;
    }
  }
  images = ['https://nbjfga.sn.files.1drv.com/y4mQfEVcWbdIBSjAtdNwxQfLUe1i7hqkNPslEhMtOBXww7rY-8MtWvwO3MR5mcZ9QduUQcxrdtR50vu05wTVlaLlqceU6r9W7A7UReTqNuuAWzzUsSVRROFudiA02SHAKwfsCZUimUYGXFh7klUsrHeJlYhh8JHzo8873V9kOm8zJ0IGZT_0caTxXE84ARB_CxroZe4pWZA0ZXOfFO0ZpIf4w?width=820&height=462&cropmode=none'];

  toggleShowM() {
    this.isShownM = ! this.isShownM;
    }

    toggleShowV() {
      this.isShownV = ! this.isShownV;
      }

}
