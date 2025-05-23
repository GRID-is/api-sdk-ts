# Workbooks

Types:

- <code><a href="./src/resources/workbooks.ts">WorkbookListResponse</a></code>
- <code><a href="./src/resources/workbooks.ts">WorkbookCalcResponse</a></code>
- <code><a href="./src/resources/workbooks.ts">WorkbookQueryResponse</a></code>
- <code><a href="./src/resources/workbooks.ts">WorkbookUploadResponse</a></code>
- <code><a href="./src/resources/workbooks.ts">WorkbookValuesResponse</a></code>

Methods:

- <code title="get /v1/workbooks">client.workbooks.<a href="./src/resources/workbooks.ts">list</a>({ ...params }) -> WorkbookListResponsesCursorPagination</code>
- <code title="post /v1/workbooks/{id}/calc">client.workbooks.<a href="./src/resources/workbooks.ts">calc</a>(id, { ...params }) -> WorkbookCalcResponse</code>
- <code title="post /v1/workbooks/{id}/export">client.workbooks.<a href="./src/resources/workbooks.ts">export</a>(id, { ...params }) -> Response</code>
- <code title="post /v1/workbooks/{id}/query">client.workbooks.<a href="./src/resources/workbooks.ts">query</a>(id, { ...params }) -> WorkbookQueryResponse</code>
- <code title="post /v1/workbooks/{id}/chart">client.workbooks.<a href="./src/resources/workbooks.ts">renderChart</a>(id, { ...params }) -> Response</code>
- <code title="post /v1/workbooks">client.workbooks.<a href="./src/resources/workbooks.ts">upload</a>({ ...params }) -> WorkbookUploadResponse</code>
- <code title="post /v1/workbooks/{id}/values">client.workbooks.<a href="./src/resources/workbooks.ts">values</a>(id, { ...params }) -> WorkbookValuesResponse</code>

# Beta

Types:

- <code><a href="./src/resources/beta.ts">BetaGetWorkbookLabelsResponse</a></code>
- <code><a href="./src/resources/beta.ts">BetaGetWorkbookParametersResponse</a></code>
- <code><a href="./src/resources/beta.ts">BetaSearchLabelsResponse</a></code>

Methods:

- <code title="get /v1/workbooks/{id}/labels">client.beta.<a href="./src/resources/beta.ts">getWorkbookLabels</a>(id) -> BetaGetWorkbookLabelsResponse</code>
- <code title="get /v1/workbooks/{id}/parameters">client.beta.<a href="./src/resources/beta.ts">getWorkbookParameters</a>(id) -> BetaGetWorkbookParametersResponse</code>
- <code title="post /v1/workbooks/search/labels">client.beta.<a href="./src/resources/beta.ts">searchLabels</a>({ ...params }) -> BetaSearchLabelsResponse</code>
