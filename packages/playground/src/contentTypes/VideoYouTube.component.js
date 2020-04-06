import GenericEntity from './GenericEntity.component';

export default class VideoYouTube extends GenericEntity {
  constructor(config) {
    // validate config against VideoYouTubeSchema
    super(config)
  }
  get type() {
    return ['Video', 'VideoYouTube'];
  }
  get videoId() {
    return this._config.data.videoId;
  }
  set videoId(_videoId) {
    this._config.data.videoId = _videoId;
  }

  get data() {
    return {
      videoId: this.videoId,
    };
  }
}