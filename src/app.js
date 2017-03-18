import $ from 'jquery';
import 'slick-carousel';


export class App {
  constructor() {
    this.message = 'Hello World!';
  }

  attached() {
    $('.slides').slick({
      autoplay: true,
      autoplaySpeed: 2000
    });
  }
}
