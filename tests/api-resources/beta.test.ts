// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Grid from '@grid-is/api';

const client = new Grid({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource beta', () => {
  // Prism tests are disabled
  test.skip('getWorkbookLabels', async () => {
    const responsePromise = client.beta.getWorkbookLabels('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getWorkbookParameters', async () => {
    const responsePromise = client.beta.getWorkbookParameters('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('searchLabels: only required params', async () => {
    const responsePromise = client.beta.searchLabels({ query: 'profit' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('searchLabels: required and optional params', async () => {
    const response = await client.beta.searchLabels({
      query: 'profit',
      max_labels: 20,
      max_results: 10,
    });
  });
});
