import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_KEY, API_URL } from '../shared/apis/rawg-api';
import { GameResponse } from '../_models/game-response';
import { UrlBuilder } from './utils/url-builder';

interface UrlParams {
  [key: string]: any;

  metacritic: number[];
  page: number;
  page_size: number;
  platforms?: number;
  genres?: number;
  ordering?: string;
  search?: string;
  search_precise?: boolean;
}

const DEFAULT_URL_PARAMS: UrlParams = {
  metacritic: [70, 100],
  page: 1,
  page_size: 12,
};

const DEFAULT_URL = `${API_URL}games?key=${API_KEY}`;

@Injectable({
  providedIn: 'root',
})
export class BestGamesService extends UrlBuilder<UrlParams> {
  constructor(private http: HttpClient) {
    super(DEFAULT_URL, DEFAULT_URL_PARAMS);
  }

  fetchGames = (url?: string): Promise<GameResponse> => {
    let fetchUrl = url || this.url;
    return this.http.get<GameResponse>(fetchUrl).toPromise();
  };
}