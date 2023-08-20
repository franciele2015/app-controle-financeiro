import { IHttpClient } from "./http-client";
import { despesas } from "./despesas";

export class MockDespesaHttpAdapter implements IHttpClient {
  async get(url: string, config?: any): Promise<any> {
    console.log(url);
    console.log(config);
    return despesas;
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
