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
import * as Mappers from "../models/casesAggregationsMappers";
import * as Parameters from "../models/parameters";
import { SecurityInsightsContext } from "../securityInsightsContext";

/** Class representing a CasesAggregations. */
export class CasesAggregations {
  private readonly client: SecurityInsightsContext;

  /**
   * Create a CasesAggregations.
   * @param {SecurityInsightsContext} client Reference to the service client.
   */
  constructor(client: SecurityInsightsContext) {
    this.client = client;
  }

  /**
   * Get aggregative result for the given resources under the defined workspace
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param operationalInsightsResourceProvider The namespace of workspaces resource provider-
   * Microsoft.OperationalInsights.
   * @param workspaceName The name of the workspace.
   * @param aggregationsName The aggregation name. Supports - Cases
   * @param [options] The optional parameters
   * @returns Promise<Models.CasesAggregationsGetResponse>
   */
  get(resourceGroupName: string, operationalInsightsResourceProvider: string, workspaceName: string, aggregationsName: string, options?: msRest.RequestOptionsBase): Promise<Models.CasesAggregationsGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param operationalInsightsResourceProvider The namespace of workspaces resource provider-
   * Microsoft.OperationalInsights.
   * @param workspaceName The name of the workspace.
   * @param aggregationsName The aggregation name. Supports - Cases
   * @param callback The callback
   */
  get(resourceGroupName: string, operationalInsightsResourceProvider: string, workspaceName: string, aggregationsName: string, callback: msRest.ServiceCallback<Models.Aggregations>): void;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param operationalInsightsResourceProvider The namespace of workspaces resource provider-
   * Microsoft.OperationalInsights.
   * @param workspaceName The name of the workspace.
   * @param aggregationsName The aggregation name. Supports - Cases
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, operationalInsightsResourceProvider: string, workspaceName: string, aggregationsName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Aggregations>): void;
  get(resourceGroupName: string, operationalInsightsResourceProvider: string, workspaceName: string, aggregationsName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Aggregations>, callback?: msRest.ServiceCallback<Models.Aggregations>): Promise<Models.CasesAggregationsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        operationalInsightsResourceProvider,
        workspaceName,
        aggregationsName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.CasesAggregationsGetResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{operationalInsightsResourceProvider}/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/aggregations/{aggregationsName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.operationalInsightsResourceProvider,
    Parameters.workspaceName,
    Parameters.aggregationsName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Aggregations
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
