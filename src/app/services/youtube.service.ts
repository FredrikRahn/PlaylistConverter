import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { apikeys } from '../../resources/api-keys';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class YoutubeService {
  constructor(private http: HttpClient) {}
  params: PlaylistParams;

  readonly ROOT_URL = 'https://www.googleapis.com/youtube/v3';
  readonly key = apikeys.youtube;

  getPlaylistItems(params): Observable<any> {
    const request = this.buildPlaylistRequest(params);
    return this.http.get(request);
  }

  buildPlaylistRequest(params: PlaylistParams) {
    params = this.removeEmptyParams(params);
    let request = this.ROOT_URL + params.path + '?';
    request += 'playlistId=' + params.playlistId + '&';
    request += 'part=' + params.part + '&';
    request += 'maxResults=' + params.maxResults + '&';
    request += 'key=' + this.key;
    return request;
  }

  removeEmptyParams(params: PlaylistParams) {
    for (const p in params) {
      if (!params[p] || params[p] === 'undefined') {
        delete params[p];
      }
    }
    return params;
  }
}

export interface PlaylistParams {
  'path': String;
  'playlistId': String;
  'part': String;
  'maxResults': number;
}
