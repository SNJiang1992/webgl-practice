export class TimeLine {
  /**
   *
   * @param {*} option
   */
  constructor(
    option = {
      loop: true, // 是否循环
      duration: 3000, //最小周期时间
    },
  ) {
    this.option = option;
    this.play = false;
    this.progress = 0;
    this.pausePosition = 0;
    this.objects = [];
  }
  start() {
    this.startTime = new Date().valueOf();
    this.play = true;
  }
  update() {
    if (this.play) {
      this.progress =
        this.pausePosition +
        ((new Date().valueOf() - this.startTime) % this.option.duration) / this.option.duration;
    }
    this.objects.forEach((item) => {
      item.update(this.progress);
    });
  }
  pause() {
    this.play = false;
    this.pausePosition = this.progress;
  }
  stop() {
    this.play = false;
    this.progress = 0;
  }
  addObject(obj) {
    this.objects.push(obj);
  }
}
