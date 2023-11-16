import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() title: string;
  @Input() isClosable: boolean;
  @Input() isActive: boolean;
  @Input() onClickCallback: () => void;

  constructor() {  }

  public onClose = () => {
    // TODO: add closing logic
    console.log("Close button clicked")
  }
}
