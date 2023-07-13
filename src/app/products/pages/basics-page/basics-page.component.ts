import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {
  public nameLowerCase: string = 'fernando';
  public nameUpperCase: string = 'FERNANDO';
  public nameTitleCase: string = 'fErNANDo';

  public customDate: Date = new Date();
}
