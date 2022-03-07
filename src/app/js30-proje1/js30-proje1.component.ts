import { Component, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-js30-proje1',
  templateUrl: './js30-proje1.component.html',
  styleUrls: ['./js30-proje1.component.scss'],
})
export class Js30Proje1Component implements OnInit {
  @ViewChild('buton1') buton1: any;
  @ViewChild('buton2') buton2: any;
  @ViewChild('buton3') buton3: any;
  @ViewChild('buton4') buton4: any;
  @ViewChild('buton5') buton5: any;
  @ViewChild('buton6') buton6: any;
  @ViewChild('buton7') buton7: any;
  @ViewChild('buton8') buton8: any;
  @ViewChild('buton9') buton9: any;
  @ViewChild('section') section: any;

  @HostListener('document:keydown', ['$event'])
  onKeyDown(ev: KeyboardEvent) {
    //console.log(ev.key);
    switch (ev.key) {
      case 'a':
        this.playWithKeyboard('../../assets/JS30-1.Proje/sounds/clap.wav');
        this.buton1.nativeElement.classList.add('effect');
        break;
      case 's':
        this.playWithKeyboard('../../assets/JS30-1.Proje/sounds/hihat.wav');
        this.buton2.nativeElement.classList.add('effect');
        break;
      case 'd':
        this.playWithKeyboard('../../assets/JS30-1.Proje/sounds/kick.wav');
        this.buton3.nativeElement.classList.add('effect');
        break;
      case 'f':
        this.playWithKeyboard('../../assets/JS30-1.Proje/sounds/openhat.wav');
        this.buton4.nativeElement.classList.add('effect');
        break;
      case 'g':
        this.playWithKeyboard('../../assets/JS30-1.Proje/sounds/boom.wav');
        this.buton5.nativeElement.classList.add('effect');
        break;
      case 'h':
        this.playWithKeyboard('../../assets/JS30-1.Proje/sounds/ride.wav');
        this.buton6.nativeElement.classList.add('effect');
        break;
      case 'j':
        this.playWithKeyboard('../../assets/JS30-1.Proje/sounds/snare.wav');
        this.buton7.nativeElement.classList.add('effect');
        break;
      case 'k':
        this.playWithKeyboard('../../assets/JS30-1.Proje/sounds/tom.wav');
        this.buton8.nativeElement.classList.add('effect');
        break;
      case 'l':
        this.playWithKeyboard('../../assets/JS30-1.Proje/sounds/tink.wav');
        this.buton9.nativeElement.classList.add('effect');
        break;
    }
  }
  @HostListener('document:keyup', ['$event'])
  onKeyUp(ev: KeyboardEvent) {
    this.section.nativeElement.childNodes.forEach((button) => {
      button.classList.remove('effect');
    });
  }
  constructor() {}

  ngOnInit(): void {}

  play(button: HTMLElement) {
    let audio = new Audio();
    audio.src = button.getAttribute('src');
    audio.load();
    audio.play();
  }
  playWithKeyboard(src: string) {
    let audio = new Audio();
    audio.src = src;
    audio.load();
    audio.play();
  }
}
