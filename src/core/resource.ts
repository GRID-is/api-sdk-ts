// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Grid } from '../client';

export abstract class APIResource {
  protected _client: Grid;

  constructor(client: Grid) {
    this._client = client;
  }
}
