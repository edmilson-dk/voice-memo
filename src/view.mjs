export default class View {
  constructor() {
    this.btnStartElement = document.getElementById('btnStart');
    this.btnStopElement = document.getElementById('btnStop');
    this.audioElement = document.getElementById('audio');
  }

  onRecordClick(command) {
    return () => {
      command();
    }
  }

  configureStartRecordingButton(command) {
    this.btnStartElement.addEventListener('click', this.onRecordClick(command));
  }
}
