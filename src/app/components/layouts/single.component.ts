import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  templateUrl: './single.component.html',
  standalone: true,
  imports: [RouterModule]
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class SingleLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
