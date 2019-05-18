/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/metricsMappers";
import * as Parameters from "../models/parameters";
import { MonitorManagementClientContext } from "../monitorManagementClientContext";

/** Class representing a Metrics. */
export class Metrics {
  private readonly client: MonitorManagementClientContext;

  /**
   * Create a Metrics.
   * @param {MonitorManagementClientContext} client Reference to the service client.
   */
  constructor(client: MonitorManagementClientContext) {
    this.client = client;
  }

  /**
   * **Lists the metric values for a resource**.
   * @param resourceUri The identifier of the resource.
   * @param [options] The optional parameters
   * @returns Promise<Models.MetricsListResponse>
   */
  list(resourceUri: string, options?: Models.MetricsListOptionalParams): Promise<Models.MetricsListResponse>;
  /**
   * @param resourceUri The identifier of the resource.
   * @param callback The callback
   */
  list(resourceUri: string, callback: msRest.ServiceCallback<Models.Response>): void;
  /**
   * @param resourceUri The identifier of the resource.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(resourceUri: string, options: Models.MetricsListOptionalParams, callback: msRest.ServiceCallback<Models.Response>): void;
  list(resourceUri: string, options?: Models.MetricsListOptionalParams | msRest.ServiceCallback<Models.Response>, callback?: msRest.ServiceCallback<Models.Response>): Promise<Models.MetricsListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceUri,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.MetricsListResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "{resourceUri}/providers/microsoft.insights/metrics",
  urlParameters: [
    Parameters.resourceUri
  ],
  queryParameters: [
    Parameters.timespan,
    Parameters.interval,
    Parameters.metricnames,
    Parameters.aggregation,
    Parameters.top,
    Parameters.orderby,
    Parameters.filter,
    Parameters.resultType,
    Parameters.apiVersion0,
    Parameters.metricnamespace
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Response
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};
