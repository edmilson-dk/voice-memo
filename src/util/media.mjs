export default class Media {

  async getAudio() {
    return navigator.getUserMedia({
      audio: true,
    });
  }
}
