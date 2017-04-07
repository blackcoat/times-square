import {Dashboard} from '../dashboard/dashboard.model';

export class DashboardLoader {
  constructor() {

  }

  load() {
    // Load dashboards from data source.
    // For now, return some sample entries
    return Array.from(Array(2), (_, i) => new Dashboard);
  }
}
