import $ from 'jquery';
import 'slick-carousel';


export class App {
  constructor() {
  }

  attached() {
    $('.slides').slick({
      autoplay: true,
      autoplaySpeed: 2000
    });
  }
}
