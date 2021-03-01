export default class View {
  constructor() {
    this.btnStartElement = document.getElementById('btnStart');
    this.btnStopElement = document.getElementById('btnStop');
    this.audioElement = document.getElementById('audio');
  }

  onRecordClick(command) {
    return () => {
      command();
      this.toggleAudioVisible({ visible: false });
    }
  }

  onStopRecordingClick(command) {
    return () => {
      command();
    }
  }

  configureStartRecordingButton(command) {
    this.btnStartElement.addEventListener('click', this.onRecordClick(command));
  }

  configureStopRecordingButton(command) {
    this.btnStopElement.addEventListener('click', this.onStopRecordingClick(command));
  }

  toggleAudioVisible({ visible }) {
    const classList = this.audioElement.classList;
    visible 
      ? classList.remove('hidden')
      : classList.add('hidden');
  }

  playAudio(url) {
    const audio = this.audioElement;

    audio.src = url;
    audio.muted = false;
    this.toggleAudioVisible({ visible: true });
    audio.addEventListener('loadedmetadata', _ => audio.play());
  }
}
