export default class Controller {
  constructor({ view }) {
    this.view = view;
  }

  static initialize(dependencies) {
    const instance = new Controller(dependencies);

    return instance._init();
  }

  _init() {
    this.viewconfigureStartRecordingButton(this.onStartRecording.bind(this));
  }

  async onStartRecording() {
    alert('iniciou gravação');
  }
} 
