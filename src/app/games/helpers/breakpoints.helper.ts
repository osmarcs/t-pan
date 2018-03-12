export class BreakpointsHelper {
  public device;
  constructor() {
    const userAgent = navigator.userAgent;
    if (userAgent.match(/Android|BlackBerry|iPhone|iPod|Opera Mini|IEMobile/i)) {
      this.device = 'mobile';
    } else if (userAgent.match(/iPad/i)) {
      this.device = 'tablet';
    } else {
      this.device = 'desktop';
    }
  }
}

