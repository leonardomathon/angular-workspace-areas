import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  public onClickCallback = () => {
    console.log("On click callback function");
  }
}
