import GenericEntity from './GenericEntity.component';

export default class VideoYouTube extends GenericEntity {
  constructor() {
    // validate config against VideoYouTubeSchema
  }
  get type() {
    return ['Video', 'VideoYouTube'];
  }
  get videoId() {}
  set videoId(_videoId) {}

  get data() {
    return {
      videoId: this.videoId,
    };
  }
}