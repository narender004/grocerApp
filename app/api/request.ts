/**
 * API Request
 * @format
 */

import axios, { AxiosInstance, AxiosError } from 'axios';

import * as Config from '@app/config';
import { getFallbackData } from './fallback-data';

class Api {
  http: AxiosInstance;
  authToken: string | null = null;

  constructor() {
    this.http = axios.create({
      baseURL: `${Config.BASE_URL}`,
      timeout: Config.API_TIMEOUT,
    });

    this.interceptRequests();
    this.interceptResponse();
  }

  interceptRequests() {
    /**
     * axios request interceptors for debugging
     * and alter request data
     */
    this.http.interceptors.request.use(
      (reqConfig) => {
        if (this.authToken) {
          reqConfig.headers.Authorization = `Bearer ${this.authToken}`;
        }
        console.log(`[Http.Request: ${reqConfig.url}]`, reqConfig);
        return reqConfig;
      },
      (error) => {
        return Promise.reject(error);
      },
    );
  }

  interceptResponse() {
    /**
     * Customize axios success and error
     * data to easily handle them in app
     */
    this.http.interceptors.response.use(
      (response) => {
        console.log(`[Http.Response: ${response.config.url}]`, response);
        return response.data;
      },
      (error: AxiosError) => {
        if (!Config.IS_PROD) {
          const fallbackData = getFallbackData(error.config.url);
          return fallbackData ?? Promise.reject(this.handleApiError(error));
        }

        return Promise.reject(this.handleApiError(error));
      },
    );
  }

  // Handling error
  handleApiError = (error: AxiosError) => {
    try {
      console.log('[Http.Error]', error);

      if (error.response) {
        /*
         Able to connect with server, but something
         went wrong and api returned reason for that
       */
        return {
          message: error.response.data,
        };
      } else {
        // Not able to connect with server
        return { message: error.message };
      }
    } catch {
      // Can't figure out source of error
      return { message: 'unknown error occurred' };
    }
  };

  setToken(token: string | null) {
    this.authToken = token;
  }

  getToken() {
    this.authToken;
  }
}

const api = new Api();

const request = api.http;

export { api, request };
