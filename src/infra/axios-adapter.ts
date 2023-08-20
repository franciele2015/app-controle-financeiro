import axios from "axios";
import { IHttpClient } from "./http-client";
import { receitas } from "./receitas";

export class AxiosAdapter implements IHttpClient {
  http: any;
  constructor() {
    this.http = axios.create({
      baseURL: "http://localhost:3000",
    });
  }
  async get(url: string, config?: any): Promise<any> {    
    return this.http.get(url, config);
  }
  post(url: string, data: any, config?: any): Promise<any> {
    return this.http.post(url, data, config);
  }
  put(url: string, data: any, config?: any): Promise<any> {
    return this.http.put(url, data, config);
  }
}
