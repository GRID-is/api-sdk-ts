// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import { CursorPagination, type CursorPaginationParams, PagePromise } from '../pagination';
import { type Uploadable } from '../uploads';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { multipartFormRequestOptions } from '../internal/uploads';
import { path } from '../internal/utils/path';

export class Workbooks extends APIResource {
  /**
   * List the workbooks linked to an account.
   *
   * This endpoint returns a paginated list of workbooks.
   */
  list(
    query: WorkbookListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<WorkbookListResponsesCursorPagination, WorkbookListResponse> {
    return this._client.getAPIList('/v1/workbooks', CursorPagination<WorkbookListResponse>, {
      query,
      ...options,
    });
  }

  /**
   * Export a workbook as an .xlsx file. Cells can be updated before the workbook is
   * exported.
   */
  export(id: string, body: WorkbookExportParams, options?: RequestOptions): APIPromise<Response> {
    return this._client.post(path`/v1/workbooks/${id}/export`, {
      body,
      ...options,
      headers: buildHeaders([
        { Accept: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' },
        options?.headers,
      ]),
      __binaryResponse: true,
    });
  }

  /**
   * Read cell data or apply temporary changes.
   *
   * Send a JSON object with a `read` key to read values from cells and formulas.
   * Optionally, use the `apply` key to update cells before reading.
   */
  query(id: string, body: WorkbookQueryParams, options?: RequestOptions): APIPromise<WorkbookQueryResponse> {
    return this._client.post(path`/v1/workbooks/${id}/query`, { body, ...options });
  }

  /**
   * Render a chart using workbook data
   */
  renderChart(id: string, body: WorkbookRenderChartParams, options?: RequestOptions): APIPromise<Response> {
    return this._client.post(path`/v1/workbooks/${id}/chart`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: 'image/png' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * Upload an Excel workbook file and make it available in the API.
   *
   * The workbook will be processed in the background. Once it's processed
   * successfully it will be available for querying and exporting.
   */
  upload(body: WorkbookUploadParams, options?: RequestOptions): APIPromise<WorkbookUploadResponse> {
    return this._client.post(
      '/v1/workbooks',
      multipartFormRequestOptions({ body, ...options }, this._client),
    );
  }
}

export type WorkbookListResponsesCursorPagination = CursorPagination<WorkbookListResponse>;

export interface WorkbookListResponse {
  /**
   * A workbook's unique identifier
   */
  id: string;

  /**
   * The date/time the workbook was created
   */
  created: string;

  /**
   * The defect that was found in the most recent version of the workbook, if any
   */
  defect:
    | ''
    | 'too_big'
    | 'converted_workbook_too_big'
    | 'unrecognized_format'
    | 'cannot_fetch_from_remote'
    | 'processing_timeout'
    | 'conversion_error';

  /**
   * The original filename of the uploaded workbook
   */
  filename: string;

  /**
   * The date/time the workbook was last modified
   */
  modified: string;

  /**
   * The current state of the most recent version of the workbook
   */
  state: 'processing' | 'ready' | 'error';

  /**
   * The most recent version of the workbook
   */
  version: number;

  /**
   * The latest version of the workbook that has a 'ready' state
   */
  latest_ready_version?: number | null;
}

/**
 * Contains the results of a workbook query, including `read` (queried cell data)
 * and `apply` (details of temporary changes applied). Note that the API has no
 * state and any changes made are cleared after each request.
 */
export interface WorkbookQueryResponse {
  /**
   * Confirmation of the changes that were applied to the spreadsheet. Note that the
   * API has no state and any changes made are cleared after each request
   */
  apply: Array<WorkbookQueryResponse.Apply> | null;

  /**
   * Details on the values that were read from the workbook cells
   */
  read: Array<
    | WorkbookQueryResponse.DataTable
    | WorkbookQueryResponse.DataList
    | WorkbookQueryResponse.DataCell
    | WorkbookQueryResponse.ValueTable
    | WorkbookQueryResponse.ValueList
    | WorkbookQueryResponse.Value
    | WorkbookQueryResponse.FormattedValueTable
    | WorkbookQueryResponse.FormattedValueList
    | WorkbookQueryResponse.FormattedValue
  >;

  /**
   * Results of a goal seek operation.
   */
  goalSeek?: WorkbookQueryResponse.GoalSeek | null;
}

export namespace WorkbookQueryResponse {
  /**
   * Details temporary changes made during a query, including the `target` cell, the
   * new `value`, and the `originalValue` before the change. Note that the API has no
   * state and any changes made are cleared after each request.
   */
  export interface Apply {
    /**
     * A1-style reference for the cell that was updated
     */
    target: string;

    /**
     * New value of the cell
     */
    value: number | string | boolean | null;

    /**
     * Original value of the cell before applying the new value
     */
    originalValue?: number | string | boolean | null;
  }

  /**
   * Read data format used when options are
   * `{ "structure": "table", "values": "full" }`.
   */
  export interface DataTable {
    data: Array<Array<DataTable.ValueCell | DataTable.ErrorCell | DataTable.EmptyCell>>;

    /**
     * A1-style reference for the cell or cells that were updated
     */
    source: string;

    type: 'dataTable';
  }

  export namespace DataTable {
    /**
     * Represents a single workbook cell, including its value (`v`), cell reference
     * (`r`), type (`t`), number format (`z`), and formatted text (`w`).
     */
    export interface ValueCell {
      /**
       * Data type of the cell value (e.g. boolean, number, text)
       */
      t: 'b' | 'n' | 'd' | 's';

      /**
       * Underlying cell value
       */
      v: number | string | boolean | null;

      /**
       * Relative A1-based cell reference
       */
      r?: string | null;

      /**
       * Formatted cell value
       */
      w?: string | null;

      /**
       * Number format associated with the cell
       */
      z?: string | null;
    }

    /**
     * Represents a workbook cell with an error. It includes the cell reference (`r`),
     * type (`t`, always `e`), value (`v`), and an optional error code (`e`). It
     * provides details for identifying and understanding errors in workbook data.
     */
    export interface ErrorCell {
      /**
       * Data type of the cell value (always 'e' for 'error')
       */
      t: 'e';

      /**
       * Underlying cell value
       */
      v: string;

      /**
       * Description of the error
       */
      e?: string | null;

      /**
       * Relative A1-based cell reference
       */
      r?: string | null;
    }

    /**
     * Cells that have no content but hold metadata like comments.
     */
    export interface EmptyCell {
      /**
       * Data type of the cell value (always 'z' for 'empty cell')
       */
      t: 'z';
    }
  }

  /**
   * Read data format used when options are
   * `{ "structure": "list", "values": "full" }`.
   */
  export interface DataList {
    data: Array<DataList.ValueCell | DataList.ErrorCell | DataList.EmptyCell>;

    /**
     * A1-style reference for the cell or cells that were updated
     */
    source: string;

    type: 'dataList';
  }

  export namespace DataList {
    /**
     * Represents a single workbook cell, including its value (`v`), cell reference
     * (`r`), type (`t`), number format (`z`), and formatted text (`w`).
     */
    export interface ValueCell {
      /**
       * Data type of the cell value (e.g. boolean, number, text)
       */
      t: 'b' | 'n' | 'd' | 's';

      /**
       * Underlying cell value
       */
      v: number | string | boolean | null;

      /**
       * Relative A1-based cell reference
       */
      r?: string | null;

      /**
       * Formatted cell value
       */
      w?: string | null;

      /**
       * Number format associated with the cell
       */
      z?: string | null;
    }

    /**
     * Represents a workbook cell with an error. It includes the cell reference (`r`),
     * type (`t`, always `e`), value (`v`), and an optional error code (`e`). It
     * provides details for identifying and understanding errors in workbook data.
     */
    export interface ErrorCell {
      /**
       * Data type of the cell value (always 'e' for 'error')
       */
      t: 'e';

      /**
       * Underlying cell value
       */
      v: string;

      /**
       * Description of the error
       */
      e?: string | null;

      /**
       * Relative A1-based cell reference
       */
      r?: string | null;
    }

    /**
     * Cells that have no content but hold metadata like comments.
     */
    export interface EmptyCell {
      /**
       * Data type of the cell value (always 'z' for 'empty cell')
       */
      t: 'z';
    }
  }

  /**
   * Read data format used when options are
   * `{ "structure": "single", "values": "full" }`.
   */
  export interface DataCell {
    /**
     * Represents a single workbook cell, including its value (`v`), cell reference
     * (`r`), type (`t`), number format (`z`), and formatted text (`w`).
     */
    data: DataCell.ValueCell | DataCell.ErrorCell | DataCell.EmptyCell;

    /**
     * A1-style reference for the cell or cells that were updated
     */
    source: string;

    type: 'cell';
  }

  export namespace DataCell {
    /**
     * Represents a single workbook cell, including its value (`v`), cell reference
     * (`r`), type (`t`), number format (`z`), and formatted text (`w`).
     */
    export interface ValueCell {
      /**
       * Data type of the cell value (e.g. boolean, number, text)
       */
      t: 'b' | 'n' | 'd' | 's';

      /**
       * Underlying cell value
       */
      v: number | string | boolean | null;

      /**
       * Relative A1-based cell reference
       */
      r?: string | null;

      /**
       * Formatted cell value
       */
      w?: string | null;

      /**
       * Number format associated with the cell
       */
      z?: string | null;
    }

    /**
     * Represents a workbook cell with an error. It includes the cell reference (`r`),
     * type (`t`, always `e`), value (`v`), and an optional error code (`e`). It
     * provides details for identifying and understanding errors in workbook data.
     */
    export interface ErrorCell {
      /**
       * Data type of the cell value (always 'e' for 'error')
       */
      t: 'e';

      /**
       * Underlying cell value
       */
      v: string;

      /**
       * Description of the error
       */
      e?: string | null;

      /**
       * Relative A1-based cell reference
       */
      r?: string | null;
    }

    /**
     * Cells that have no content but hold metadata like comments.
     */
    export interface EmptyCell {
      /**
       * Data type of the cell value (always 'z' for 'empty cell')
       */
      t: 'z';
    }
  }

  /**
   * Read data format used when options are
   * `{ "structure": "table", "values": "raw" }`.
   */
  export interface ValueTable {
    data: Array<Array<number | string | boolean | null>>;

    /**
     * A1-style reference for the cell or cells that were updated
     */
    source: string;

    type: 'valueTable';
  }

  /**
   * Read data format used when options are
   * `{ "structure": "list", "values": "raw" }`.
   */
  export interface ValueList {
    data: Array<number | string | boolean | null>;

    /**
     * A1-style reference for the cell or cells that were updated
     */
    source: string;

    type: 'valueList';
  }

  /**
   * Read data format used when options are
   * `{ "structure": "single", "values": "raw" }`.
   */
  export interface Value {
    data: number | string | boolean | null;

    /**
     * A1-style reference for the cell or cells that were updated
     */
    source: string;

    type: 'value';
  }

  /**
   * Read data format used when options are
   * `{ "structure": "table", "values": "formatted" }`.
   */
  export interface FormattedValueTable {
    data: Array<Array<string>>;

    /**
     * A1-style reference for the cell or cells that were updated
     */
    source: string;

    type: 'formattedValueTable';
  }

  /**
   * Read data format used when options are
   * `{ "structure": "list", "values": "formatted" }`.
   */
  export interface FormattedValueList {
    data: Array<string>;

    /**
     * A1-style reference for the cell or cells that were updated
     */
    source: string;

    type: 'formattedValueList';
  }

  /**
   * Read data format used when options are
   * `{ "structure": "single", "values": "formatted" }`.
   */
  export interface FormattedValue {
    data: string;

    /**
     * A1-style reference for the cell or cells that were updated
     */
    source: string;

    type: 'formattedValue';
  }

  /**
   * Results of a goal seek operation.
   */
  export interface GoalSeek {
    /**
     * Reference for the cell that contains the solution
     */
    controlCell: string;

    /**
     * Reference for the cell that contains the formula you wanted to resolve
     */
    targetCell: string;

    /**
     * The value you wanted the formula to return
     */
    targetValue: number;

    /**
     * The result of the formula
     */
    solution?: number;
  }
}

export interface WorkbookUploadResponse {
  /**
   * The id of the newly uploaded workbook
   */
  id: string;
}

export interface WorkbookListParams extends CursorPaginationParams {}

export interface WorkbookExportParams {
  /**
   * Cells to update before exporting
   */
  apply?: Array<WorkbookExportParams.Apply> | null;

  /**
   * Goal seek. Use this to calculate the required input value for a formula to
   * achieve a specified target result. This is particularly useful when the desired
   * outcome is known, but the corresponding input is not.
   */
  goalSeek?: WorkbookExportParams.GoalSeek | null;
}

export namespace WorkbookExportParams {
  /**
   * Specifies a temporary change to a workbook cell, including the `target` cell
   * reference and the `value` to apply. The API has no state, and so any changes
   * made are cleared after each request.
   */
  export interface Apply {
    /**
     * A1-style reference for the cell to write to
     */
    target: string;

    /**
     * Value to write to the target cell
     */
    value: number | string | boolean | null;
  }

  /**
   * Goal seek. Use this to calculate the required input value for a formula to
   * achieve a specified target result. This is particularly useful when the desired
   * outcome is known, but the corresponding input is not.
   */
  export interface GoalSeek {
    /**
     * Reference for the cell that will contain the solution
     */
    controlCell: string;

    /**
     * Reference for the cell that contains the formula you want to resolve
     */
    targetCell: string;

    /**
     * The value you want the formula to return
     */
    targetValue: number;
  }
}

export interface WorkbookQueryParams {
  /**
   * Cell references to read from the workbook and return to the client
   */
  read: Array<string>;

  /**
   * Cells to update before reading. Note that the API has no state and any changes
   * made are cleared after each request
   */
  apply?: Array<WorkbookQueryParams.Apply> | null;

  /**
   * Goal seek. Use this to calculate the required input value for a formula to
   * achieve a specified target result. This is particularly useful when the desired
   * outcome is known, but the corresponding input is not.
   */
  goalSeek?: WorkbookQueryParams.GoalSeek | null;

  /**
   * Defines settings for formatting and structuring query results.
   */
  options?: WorkbookQueryParams.Options | null;
}

export namespace WorkbookQueryParams {
  /**
   * Specifies a temporary change to a workbook cell, including the `target` cell
   * reference and the `value` to apply. The API has no state, and so any changes
   * made are cleared after each request.
   */
  export interface Apply {
    /**
     * A1-style reference for the cell to write to
     */
    target: string;

    /**
     * Value to write to the target cell
     */
    value: number | string | boolean | null;
  }

  /**
   * Goal seek. Use this to calculate the required input value for a formula to
   * achieve a specified target result. This is particularly useful when the desired
   * outcome is known, but the corresponding input is not.
   */
  export interface GoalSeek {
    /**
     * Reference for the cell that will contain the solution
     */
    controlCell: string;

    /**
     * Reference for the cell that contains the formula you want to resolve
     */
    targetCell: string;

    /**
     * The value you want the formula to return
     */
    targetValue: number;
  }

  /**
   * Defines settings for formatting and structuring query results.
   */
  export interface Options {
    /**
     * Determines if data is outputted as rows or columns
     */
    axis?: 'rows' | 'columns' | null;

    /**
     * When "originals" option is "on", include original values for cells you apply
     * values to
     */
    originals?: 'off' | 'on' | null;

    /**
     * When "refs" option is "on", include cell addresses (e.g. A1) in each cell object
     * as the "r" property
     */
    refs?: 'off' | 'on' | null;

    /**
     * Specifies if read values are returned as a single value, a list, or a 2D table
     */
    structure?: 'single' | 'list' | 'table' | null;

    /**
     * Defines if individual cell values are returned in full (JSON objects), raw (just
     * the value), or formatted (with number formatting applied)
     */
    values?: 'full' | 'raw' | 'formatted' | null;
  }
}

export interface WorkbookRenderChartParams {
  /**
   * Options for rendering a chart from workbook data. Specify the data range, chart
   * type, image output format, and title and axis labels.
   */
  chart: WorkbookRenderChartParams.Chart;

  /**
   * Cells to update before rendering the chart. Changes are discarded at the end of
   * the request
   */
  apply?: Array<WorkbookRenderChartParams.Apply> | null;
}

export namespace WorkbookRenderChartParams {
  /**
   * Options for rendering a chart from workbook data. Specify the data range, chart
   * type, image output format, and title and axis labels.
   */
  export interface Chart {
    /**
     * Chart data range, prefixed with an equals sign
     */
    data: string | null;

    /**
     * File format to use for the chart image
     */
    format?: 'png' | 'svg';

    /**
     * Range of cells to use as the chart's x-axis labels, prefixed with an equals sign
     */
    labels?: string | null;

    /**
     * Cell reference to use as the chart's title. Can also be plain text.
     */
    title?: string | null;

    /**
     * Type of chart to render
     */
    type?: 'line' | 'column';

    /**
     * How to label individual data values on the chart
     */
    values?: 'none' | 'selective' | 'all';
  }

  /**
   * Specifies a temporary change to a workbook cell, including the `target` cell
   * reference and the `value` to apply. The API has no state, and so any changes
   * made are cleared after each request.
   */
  export interface Apply {
    /**
     * A1-style reference for the cell to write to
     */
    target: string;

    /**
     * Value to write to the target cell
     */
    value: number | string | boolean | null;
  }
}

export interface WorkbookUploadParams {
  /**
   * Excel (.xlsx) file
   */
  file: Uploadable;
}

export declare namespace Workbooks {
  export {
    type WorkbookListResponse as WorkbookListResponse,
    type WorkbookQueryResponse as WorkbookQueryResponse,
    type WorkbookUploadResponse as WorkbookUploadResponse,
    type WorkbookListResponsesCursorPagination as WorkbookListResponsesCursorPagination,
    type WorkbookListParams as WorkbookListParams,
    type WorkbookExportParams as WorkbookExportParams,
    type WorkbookQueryParams as WorkbookQueryParams,
    type WorkbookRenderChartParams as WorkbookRenderChartParams,
    type WorkbookUploadParams as WorkbookUploadParams,
  };
}
