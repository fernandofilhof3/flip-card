import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-flip-card',
  templateUrl: './flip-card.component.html',
  styleUrls: ['./flip-card.component.scss']
})
export class FlipCardComponent implements OnInit {
  @Input('cover-url') public coverUrl: string;
  @Input('avatar-url') public avatarUrl: string;
  @Input() public title: string;
  @Input() public subtitle: string;

  constructor() { }

  ngOnInit() {
  }

}
