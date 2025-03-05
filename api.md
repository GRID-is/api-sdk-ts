# Workbooks

Types:

- <code><a href="./src/resources/workbooks.ts">WorkbookListResponse</a></code>
- <code><a href="./src/resources/workbooks.ts">WorkbookQueryResponse</a></code>
- <code><a href="./src/resources/workbooks.ts">WorkbookUploadResponse</a></code>

Methods:

- <code title="get /v1/workbooks">client.workbooks.<a href="./src/resources/workbooks.ts">list</a>({ ...params }) -> WorkbookListResponse</code>
- <code title="post /v1/workbooks/{id}/export">client.workbooks.<a href="./src/resources/workbooks.ts">export</a>(id, { ...params }) -> Response</code>
- <code title="post /v1/workbooks/{id}/query">client.workbooks.<a href="./src/resources/workbooks.ts">query</a>(id, { ...params }) -> WorkbookQueryResponse</code>
- <code title="post /v1/workbooks/{id}/chart">client.workbooks.<a href="./src/resources/workbooks.ts">renderChart</a>(id, { ...params }) -> Response</code>
- <code title="post /v1/workbooks">client.workbooks.<a href="./src/resources/workbooks.ts">upload</a>({ ...params }) -> WorkbookUploadResponse</code>
