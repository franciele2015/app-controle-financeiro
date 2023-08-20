import { IHttpClient } from "../../../infra/http-client";
import { MockDespesaHttpAdapter } from "../../../infra/mock-despesa-http-adapter";

class GetDespesasService {
    constructor(private readonly httpClient: IHttpClient) {}

    async execute() {
        const response = await this.httpClient.get("/despesas");
        return response;
    }
}

const httpClient: IHttpClient = new MockDespesaHttpAdapter();
export default new GetDespesasService(httpClient);