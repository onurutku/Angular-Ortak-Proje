import { AfterViewInit, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-csswithjs',
  templateUrl: './csswithjs.component.html',
  styleUrls: ['./csswithjs.component.scss']
})
export class CsswithjsComponent implements OnInit, AfterViewInit {
  min: number = 0;
  max: number = 100;
  minBlur = 0;
  maxBlur = 8;
  // @ViewChild('spacing') spacingInput: any;
  spacing = '0';
  blur = "0";
  color="#000"
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  }

}
