import $ from 'jquery';
import 'slick-carousel';
import {Dashboard}          from './dashboard/dashboard.model';
import {DashboardLoader}    from './services/dashboard-loader';
import {inject, LogManager} from 'aurelia-framework';

let logger = LogManager.getLogger('app');

@inject(DashboardLoader)
export class App {
  constructor(dashboardLoader) {
    this.dashboards = [].concat(dashboardLoader.load());
    logger.debug(this.dashboards);
  }

  attached() {
    $('.slides').slick({
      autoplay: true,
      autoplaySpeed: 2000
    });
  }
}
