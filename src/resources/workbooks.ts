// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { CursorPagination, type CursorPaginationParams, PagePromise } from '../core/pagination';
import { type Uploadable } from '../core/uploads';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { multipartFormRequestOptions } from '../internal/uploads';
import { path } from '../internal/utils/path';

export class Workbooks extends APIResource {
  /**
   * List the workbooks linked to an account.
   *
   * This endpoint returns a paginated list of workbooks.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const workbookListResponse of client.workbooks.list()) {
   *   // ...
   * }
   * ```
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
   * Run calculations in a workbook and retrieve cell objects.
   *
   * @example
   * ```ts
   * const response = await client.workbooks.calc('id', {
   *   read: ['A1'],
   * });
   * ```
   */
  calc(id: string, body: WorkbookCalcParams, options?: RequestOptions): APIPromise<WorkbookCalcResponse> {
    return this._client.post(path`/v1/workbooks/${id}/calc`, { body, ...options });
  }

  /**
   * Export a workbook as an .xlsx file. Cells can be updated before the workbook is
   * exported.
   *
   * @example
   * ```ts
   * const response = await client.workbooks.export('id');
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
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
   *
   * @example
   * ```ts
   * const response = await client.workbooks.query('id', {
   *   read: ['A1', 'Sheet2!B3', '=SUM(A1:A4)'],
   * });
   * ```
   */
  query(id: string, body: WorkbookQueryParams, options?: RequestOptions): APIPromise<WorkbookQueryResponse> {
    return this._client.post(path`/v1/workbooks/${id}/query`, { body, ...options });
  }

  /**
   * Render a chart using workbook data
   *
   * @example
   * ```ts
   * const response = await client.workbooks.renderChart('id', {
   *   chart: {},
   * });
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
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
   *
   * @example
   * ```ts
   * const response = await client.workbooks.upload({
   *   file: fs.createReadStream('path/to/file'),
   * });
   * ```
   */
  upload(body: WorkbookUploadParams, options?: RequestOptions): APIPromise<WorkbookUploadResponse> {
    return this._client.post(
      '/v1/workbooks',
      multipartFormRequestOptions({ body, ...options }, this._client),
    );
  }

  /**
   * Run calculations in a workbook and retrieve cell values.
   *
   * @example
   * ```ts
   * const response = await client.workbooks.values('id', {
   *   read: ['A1'],
   * });
   * ```
   */
  values(
    id: string,
    body: WorkbookValuesParams,
    options?: RequestOptions,
  ): APIPromise<WorkbookValuesResponse> {
    return this._client.post(path`/v1/workbooks/${id}/values`, { body, ...options });
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
 * Response type returned by the for /calc query endpoint.
 */
export type WorkbookCalcResponse = Record<
  string,
  WorkbookCalcResponse.ReadValue | Array<WorkbookCalcResponse.UnionMember1>
>;

export namespace WorkbookCalcResponse {
  export interface ReadValue {
    /**
     * Formatted cell value
     */
    formatted: string;

    /**
     * Cell position in the spreadsheet, using 0-indexed x/y coordinates. Origin [0, 0]
     * is at the top-left
     */
    offset: Array<unknown>;

    /**
     * Type of the cell value
     */
    type: 'blank' | 'boolean' | 'number' | 'string' | 'date' | 'error';

    /**
     * Cell value
     */
    value: number | string | boolean | null;

    error?: string | null;
  }

  export interface UnionMember1 {
    /**
     * Formatted cell value
     */
    formatted: string;

    /**
     * Cell position in the spreadsheet, using 0-indexed x/y coordinates. Origin [0, 0]
     * is at the top-left
     */
    offset: Array<unknown>;

    /**
     * Type of the cell value
     */
    type: 'blank' | 'boolean' | 'number' | 'string' | 'date' | 'error';

    /**
     * Cell value
     */
    value: number | string | boolean | null;

    error?: string | null;
  }
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
  read: Array<WorkbookQueryResponse.Read>;

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
     * Original value of the cell before applying the new value
     */
    originalValue: number | string | boolean | null;

    /**
     * A1-style reference for the cell that was updated
     */
    target: string;

    /**
     * New value of the cell
     */
    value: number | string | boolean | null;
  }

  /**
   * A two-dimensional table of cells retrieved from a spreadsheet.
   */
  export interface Read {
    data: Array<Array<Read.ValueCell | Read.ErrorCell | Read.EmptyCell>>;

    /**
     * A1-style reference for the cell or cells that were updated
     */
    source: string;

    type: 'dataTable';
  }

  export namespace Read {
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
       * Relative A1-based cell reference. This property only appears when there's a real
       * cell behind the value
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
       * Relative A1-based cell reference. This property only appears when there's a real
       * cell behind the value
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

      /**
       * Relative A1-based cell reference. This property only appears when there's a real
       * cell behind the value
       */
      r?: string | null;
    }
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

/**
 * Response type returned by the for /values query endpoint.
 */
export type WorkbookValuesResponse = Record<
  string,
  number | string | boolean | Array<number | string | boolean | null> | null
>;

export interface WorkbookListParams extends CursorPaginationParams {}

export interface WorkbookCalcParams {
  read: Array<string>;

  apply?: Record<string, number | string | boolean | null> | null;
}

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
     * Reference for the cell to write to
     */
    target: string | Apply.ReferenceObject;

    /**
     * Value to write to the target cell
     */
    value: number | string | boolean | null;
  }

  export namespace Apply {
    /**
     * A reference to a range of spreadsheet cells.
     */
    export interface ReferenceObject {
      /**
       * Unprefixed A1-style range, id, or name
       */
      cells: string;

      /**
       * Name of the sheet to reference
       */
      sheet: string | null;
    }
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
    controlCell: string | GoalSeek.ReferenceObject;

    /**
     * Reference for the cell that contains the formula you want to resolve
     */
    targetCell: string | GoalSeek.ReferenceObject;

    /**
     * The value you want the formula to return
     */
    targetValue: number;
  }

  export namespace GoalSeek {
    /**
     * A reference to a range of spreadsheet cells.
     */
    export interface ReferenceObject {
      /**
       * Unprefixed A1-style range, id, or name
       */
      cells: string;

      /**
       * Name of the sheet to reference
       */
      sheet: string | null;
    }

    /**
     * A reference to a range of spreadsheet cells.
     */
    export interface ReferenceObject {
      /**
       * Unprefixed A1-style range, id, or name
       */
      cells: string;

      /**
       * Name of the sheet to reference
       */
      sheet: string | null;
    }
  }
}

export interface WorkbookQueryParams {
  /**
   * Cell references to read from the workbook and return to the client
   */
  read: Array<string | WorkbookQueryParams.ReferenceObject>;

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
   * Defines settings for configuring query results.
   */
  options?: WorkbookQueryParams.Options | null;
}

export namespace WorkbookQueryParams {
  /**
   * A reference to a range of spreadsheet cells.
   */
  export interface ReferenceObject {
    /**
     * Unprefixed A1-style range, id, or name
     */
    cells: string;

    /**
     * Name of the sheet to reference
     */
    sheet: string | null;
  }

  /**
   * Specifies a temporary change to a workbook cell, including the `target` cell
   * reference and the `value` to apply. The API has no state, and so any changes
   * made are cleared after each request.
   */
  export interface Apply {
    /**
     * Reference for the cell to write to
     */
    target: string | Apply.ReferenceObject;

    /**
     * Value to write to the target cell
     */
    value: number | string | boolean | null;
  }

  export namespace Apply {
    /**
     * A reference to a range of spreadsheet cells.
     */
    export interface ReferenceObject {
      /**
       * Unprefixed A1-style range, id, or name
       */
      cells: string;

      /**
       * Name of the sheet to reference
       */
      sheet: string | null;
    }
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
    controlCell: string | GoalSeek.ReferenceObject;

    /**
     * Reference for the cell that contains the formula you want to resolve
     */
    targetCell: string | GoalSeek.ReferenceObject;

    /**
     * The value you want the formula to return
     */
    targetValue: number;
  }

  export namespace GoalSeek {
    /**
     * A reference to a range of spreadsheet cells.
     */
    export interface ReferenceObject {
      /**
       * Unprefixed A1-style range, id, or name
       */
      cells: string;

      /**
       * Name of the sheet to reference
       */
      sheet: string | null;
    }

    /**
     * A reference to a range of spreadsheet cells.
     */
    export interface ReferenceObject {
      /**
       * Unprefixed A1-style range, id, or name
       */
      cells: string;

      /**
       * Name of the sheet to reference
       */
      sheet: string | null;
    }
  }

  /**
   * Defines settings for configuring query results.
   */
  export interface Options {
    /**
     * Determines if data is outputted as rows or columns
     */
    axis?: 'rows' | 'columns' | null;
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
     * How an axis representing dimensional categories is presented.
     */
    axisDim?: Chart.AxisDim | null;

    /**
     * How an axis representing value magnitudes is presented.
     */
    axisValue?: Chart.AxisValue | null;

    /**
     * Enum representing the supported strategies for handling blank or missing data
     * points.
     */
    blanks?: 'gap' | 'zero' | 'span' | null;

    /**
     * An Excel array expression that returns a 1-dimensional list of HTML color
     * strings
     */
    chartColors?: string | null;

    /**
     * Vary colors by point rather than series.
     */
    colorByPoint?: string | null;

    /**
     * Chart data range, prefixed with an equals sign
     */
    data?: string | null;

    /**
     * Chart data range, prefixed with an equals sign, used for lines in a combo chart
     */
    dataLines?: string | null;

    /**
     * Enum representing the supported read orientations for data directions.
     */
    dir?: '' | 'col' | 'row' | null;

    /**
     * Cell reference to use as the chart's footnote text. Can also be plain text.
     */
    footnote?: string | null;

    /**
     * Supported image types for rendering charts from workbook data.
     */
    format?: 'png' | 'svg' | null;

    /**
     * Enum representing the supported interpolation types for data visualization or
     * curve fitting.
     */
    interpolate?: 'linear' | 'step' | 'step-after' | 'step-before' | 'monotone' | 'basis' | null;

    /**
     * Range of cells to use as the chart's x-axis labels, prefixed with an equals sign
     */
    labels?: string | null;

    /**
     * Range of cells to use as the chart's legend labels, prefixed with an equals sign
     */
    legend?: string | null;

    /**
     * Range of cells to use as the chart's line labels in the legend, prefixed with an
     * equals sign
     */
    legendLines?: string | null;

    /**
     * Whether to display a chart legend
     */
    legendVisible?: 'false' | 'true' | null;

    /**
     * Number format pattern used for formatting labels on the chart.
     */
    numberFormat?: string | null;

    /**
     * The number of which series the data should be sorted by (e.g. 1 for the first
     * series).
     */
    sortBy?: number | null;

    /**
     * The sorting direction when the sortBy property is set.
     */
    sortOrder?: '' | 'ascending' | 'descending' | null;

    /**
     * Whether to display series stacked or grouped
     */
    stacked?: 'false' | 'true' | null;

    /**
     * Cell reference to use as the chart's subtitle. Can also be plain text.
     */
    subtitle?: string | null;

    /**
     * Cell reference to use as the chart's title. Can also be plain text.
     */
    title?: string | null;

    /**
     * Types of charts that can be rendered using workbook data.
     */
    type?: 'area' | 'bar' | 'column' | 'combo' | 'line' | 'pie' | 'scatterplot' | 'waterfall' | null;

    /**
     * Options for labelling individual data values on a chart. If "none" (the default)
     * then no data labels are shown. If "selective", data labels are shown when they
     * fit without overlap. If "all", all values are labelled.
     */
    values?: 'none' | 'selective' | 'all' | null;
  }

  export namespace Chart {
    /**
     * How an axis representing dimensional categories is presented.
     */
    export interface AxisDim {
      /**
       * Number format pattern used for formatting the axis labels.
       */
      numberFormat?: string | null;

      /**
       * If true, invert the scale of the axis. If false, keep the order untouched.
       */
      reverse?: 'false' | 'true' | null;

      /**
       * Cell reference to use as the axis title. Can also be plain text.
       */
      title?: string | null;
    }

    /**
     * How an axis representing value magnitudes is presented.
     */
    export interface AxisValue {
      /**
       * If true, any graphics outside the min or max boundaries of the axes are
       * truncated.
       */
      clip?: 'false' | 'true' | null;

      /**
       * A maximum value for the axis.
       */
      max?: number | null;

      /**
       * A minimum value for the axis.
       */
      min?: number | null;

      /**
       * Number format pattern used for formatting the axis labels.
       */
      numberFormat?: string | null;

      /**
       * Draw the axis in ascending or descending order.
       */
      reverse?: 'false' | 'true' | null;

      /**
       * Cell reference to use as the axis title. Can also be plain text.
       */
      title?: string | null;

      /**
       * Types of scales that can be used by an axis.
       */
      type?: 'linear' | 'log' | null;
    }
  }

  /**
   * Specifies a temporary change to a workbook cell, including the `target` cell
   * reference and the `value` to apply. The API has no state, and so any changes
   * made are cleared after each request.
   */
  export interface Apply {
    /**
     * Reference for the cell to write to
     */
    target: string | Apply.ReferenceObject;

    /**
     * Value to write to the target cell
     */
    value: number | string | boolean | null;
  }

  export namespace Apply {
    /**
     * A reference to a range of spreadsheet cells.
     */
    export interface ReferenceObject {
      /**
       * Unprefixed A1-style range, id, or name
       */
      cells: string;

      /**
       * Name of the sheet to reference
       */
      sheet: string | null;
    }
  }
}

export interface WorkbookUploadParams {
  /**
   * Excel (.xlsx) file
   */
  file: Uploadable;
}

export interface WorkbookValuesParams {
  read: Array<string>;

  apply?: Record<string, number | string | boolean | null> | null;
}

export declare namespace Workbooks {
  export {
    type WorkbookListResponse as WorkbookListResponse,
    type WorkbookCalcResponse as WorkbookCalcResponse,
    type WorkbookQueryResponse as WorkbookQueryResponse,
    type WorkbookUploadResponse as WorkbookUploadResponse,
    type WorkbookValuesResponse as WorkbookValuesResponse,
    type WorkbookListResponsesCursorPagination as WorkbookListResponsesCursorPagination,
    type WorkbookListParams as WorkbookListParams,
    type WorkbookCalcParams as WorkbookCalcParams,
    type WorkbookExportParams as WorkbookExportParams,
    type WorkbookQueryParams as WorkbookQueryParams,
    type WorkbookRenderChartParams as WorkbookRenderChartParams,
    type WorkbookUploadParams as WorkbookUploadParams,
    type WorkbookValuesParams as WorkbookValuesParams,
  };
}
