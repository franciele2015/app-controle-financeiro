import { IHttpClient } from "./http-client";
import { receitas } from "./receitas";

export class MockHttpAdapter implements IHttpClient {
  async get(url: string, config?: any): Promise<any> {
    console.log(url);
    console.log(config);
    return receitas;
  }
  async post(url: string, data: any, config?: any): Promise<any> {
    console.log(url);
    console.log(config);
    console.log(data);
    return "";
  }
  async put(url: string, data: any, config?: any): Promise<any> {
    console.log(url);
    console.log(config);
    console.log(data);
    return "";
  }
}
