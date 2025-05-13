// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Grid, { toFile } from '@grid-is/api';

const client = new Grid({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource workbooks', () => {
  // skipped: tests are disabled for the time being
  test.skip('list', async () => {
    const responsePromise = client.workbooks.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.workbooks.list({ cursor: 'cursor', limit: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Grid.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('query: only required params', async () => {
    const responsePromise = client.workbooks.query('id', { read: ['A1', 'Sheet2!B3', '=SUM(A1:A4)'] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('query: required and optional params', async () => {
    const response = await client.workbooks.query('id', {
      read: ['A1', 'Sheet2!B3', '=SUM(A1:A4)'],
      apply: [{ target: 'A2', value: 1234 }],
      goalSeek: { controlCell: 'Sheet1!A1:B2', targetCell: 'Sheet1!A1:B2', targetValue: 0 },
      options: { axis: 'rows' },
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('renderChart: required and optional params', async () => {
    const response = await client.workbooks.renderChart('id', {
      chart: {
        axisDim: { numberFormat: '#,##0.0', reverse: 'false', title: '=C4' },
        axisValue: {
          clip: 'false',
          max: 0,
          min: 0,
          numberFormat: '#,##0.0',
          reverse: 'false',
          title: '=C4',
          type: 'linear',
        },
        blanks: 'gap',
        chartColors: '={"#C40";"#03F"}',
        colorByPoint: 'colorByPoint',
        data: '=C2:C142',
        dataLines: '=C2:C142',
        dir: 'row',
        footnote: '=H13',
        format: 'png',
        interpolate: 'linear',
        labels: '=B2:B142',
        legend: '=D2:D142',
        legendLines: '=E2:E142',
        legendVisible: 'false',
        numberFormat: '#,##0.0',
        sortBy: 0,
        sortOrder: '',
        stacked: 'false',
        subtitle: '=B4',
        title: '=A1',
        type: 'area',
        values: 'none',
      },
      apply: [{ target: 'A2', value: 1234 }],
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('upload: only required params', async () => {
    const responsePromise = client.workbooks.upload({
      file: await toFile(Buffer.from('# my file contents'), 'README.md'),
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('upload: required and optional params', async () => {
    const response = await client.workbooks.upload({
      file: await toFile(Buffer.from('# my file contents'), 'README.md'),
    });
  });
});
