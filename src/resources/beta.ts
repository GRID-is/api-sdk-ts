// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Beta extends APIResource {
  /**
   * Retrieve labels automatically detected for cells and ranges in the workbook.
   */
  getWorkbookLabels(id: string, options?: RequestOptions): APIPromise<BetaGetWorkbookLabelsResponse> {
    return this._client.get(path`/v1/workbooks/${id}/labels`, options);
  }

  /**
   * Retrieve labels automatically detected for cells and ranges in the workbook.
   */
  getWorkbookParameters(id: string, options?: RequestOptions): APIPromise<BetaGetWorkbookParametersResponse> {
    return this._client.get(path`/v1/workbooks/${id}/parameters`, options);
  }

  /**
   * Search data labels across all spreadsheets uploaded to an account
   */
  searchLabels(body: BetaSearchLabelsParams, options?: RequestOptions): APIPromise<BetaSearchLabelsResponse> {
    return this._client.post('/v1/workbooks/search/labels', { body, ...options });
  }
}

export interface BetaGetWorkbookLabelsResponse {
  /**
   * The date/time the labels were detected and stored
   */
  created: string;

  /**
   * The labels associated with the workbook
   */
  labels: Array<BetaGetWorkbookLabelsResponse.Label>;

  /**
   * The id of the workbook the labels belong to
   */
  workbook_id: string;

  /**
   * The version of the workbook the labels belong to
   */
  workbook_version: number;
}

export namespace BetaGetWorkbookLabelsResponse {
  export interface Label {
    /**
     * The cell address/reference which the label applies to
     */
    at: string;

    /**
     * The cell address/reference which the label applies to
     */
    for: string;

    /**
     * The label string
     */
    text: string;

    /**
     * The type of the label, almost always text, not to be confused with cell type
     */
    type?: string | null;
  }
}

export interface BetaGetWorkbookParametersResponse {
  /**
   * The date/time the parameters were detected and stored
   */
  created: string;

  /**
   * The parameters associated with the workbook
   */
  parameters: Array<BetaGetWorkbookParametersResponse.Parameter>;

  /**
   * The id of the workbook the labels belong to
   */
  workbook_id: string;

  /**
   * The version of the workbook the labels belong to
   */
  workbook_version: number;
}

export namespace BetaGetWorkbookParametersResponse {
  export interface Parameter {
    /**
     * The labels associated with the parameter
     */
    labels: Array<Parameter.Label>;

    /**
     * The cell address/reference containing the parameter
     */
    ref: string;

    /**
     * The type of value found in the parameter cell
     */
    type: 'blank' | 'date' | 'number' | 'string' | 'boolean' | 'error';

    /**
     * The value in the parameter cell, type is determined by the type field
     */
    value?: string | number | boolean | null;
  }

  export namespace Parameter {
    export interface Label {
      /**
       * The cell address/reference which the label applies to
       */
      at: string;

      /**
       * The label string
       */
      text: string;
    }
  }
}

/**
 * The results of a spreadsheet data label search.
 */
export interface BetaSearchLabelsResponse {
  results: Array<BetaSearchLabelsResponse.Result>;
}

export namespace BetaSearchLabelsResponse {
  /**
   * Contains a workbook that includes data labels that match the search query.
   */
  export interface Result {
    /**
     * UUID for the user that uploaded the workbook. This will always be the UUID of
     * the account linked to the API key used in the request.
     */
    creator_id: string;

    /**
     * Generated description summarising the contents of the workbook
     */
    description: string;

    /**
     * Original filename of the workbook
     */
    filename: string;

    /**
     * Most recent version number of the workbook
     */
    latest_version: number;

    /**
     * Absolute URL for a thumbnail of the workbook's first sheet
     */
    thumbnail_url: string;

    /**
     * UUID for the workbook
     */
    workbook_id: string;

    labels?: Array<Result.Label>;

    /**
     * Relevance ranking of the workbook in relation to the search results (higher is
     * better)
     */
    score?: number | null;
  }

  export namespace Result {
    /**
     * A label search result. Includes the location, text content, value, and score.
     */
    export interface Label {
      /**
       * Cell reference or range that contains the labelled data
       */
      for: string;

      /**
       * Text content of the label
       */
      text: string;

      /**
       * The labelled data value(s). If a range of data is labelled, this will be a
       * stringified JSON array
       */
      value: string;

      /**
       * Relevance ranking of the workbook in relation to the search results (higher is
       * better)
       */
      score?: number | null;
    }
  }
}

export interface BetaSearchLabelsParams {
  query: string;

  /**
   * Maximum number of labels to return per workbook
   */
  max_labels?: number | null;

  /**
   * Maximum number of workbooks to return results for
   */
  max_results?: number | null;
}

export declare namespace Beta {
  export {
    type BetaGetWorkbookLabelsResponse as BetaGetWorkbookLabelsResponse,
    type BetaGetWorkbookParametersResponse as BetaGetWorkbookParametersResponse,
    type BetaSearchLabelsResponse as BetaSearchLabelsResponse,
    type BetaSearchLabelsParams as BetaSearchLabelsParams,
  };
}
