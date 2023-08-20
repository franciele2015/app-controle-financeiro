import { IHttpClient } from "../../../infra/http-client";
import { MockHttpAdapter } from "../../../infra/mock-http-adapter";

class GetReceitasService {
    constructor(private readonly httpClient: IHttpClient) {}

    async execute() {
        const response = await this.httpClient.get("/receitas");
        return response;        
    }
}

const httpClient: IHttpClient = new MockHttpAdapter();
export default new GetReceitasService(httpClient);