export default class Recorder {
  constructor() {
    this.audioType = 'audio/webm;codecs=opus';
    this.mediaRecorder = {};
    this.recordedBlobs = [];
  }

  _setup() {
    const options = { mimeType: this.audioType };
    const isSurpported = MediaRecorder.isTypeSurpported(options);

    if (!isSurpported) {
      const msg = `the codec: ${mimeType} is not supported!`;
      alert(msg);

      throw new Error(msg);
    }

    return options;
  }

  startRecording(stream) {
    const options = this._setup();
    this.mediaRecorder = new MediaRecorder(stream, options);

    this.mediaRecorder.onstop = (event) => {
      console.log('Recorded Blobs', this.recordedBlobs);
    }

    this.mediaRecorder.ondataavailable = (event) => {
      if (!event.data || !event.data.size) return;

      this.recordedBlobs.push(event.data);
    }

    this.mediaRecorder.start();
  }

  async stopRecording() {
    if (this.mediaRecorder.state === 'inactive') return;

    this.mediaRecorder.stop();
  }
}