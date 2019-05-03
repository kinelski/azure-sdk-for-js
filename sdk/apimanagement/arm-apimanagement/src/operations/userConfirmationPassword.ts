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
import * as Mappers from "../models/userConfirmationPasswordMappers";
import * as Parameters from "../models/parameters";
import { ApiManagementClientContext } from "../apiManagementClientContext";

/** Class representing a UserConfirmationPassword. */
export class UserConfirmationPassword {
  private readonly client: ApiManagementClientContext;

  /**
   * Create a UserConfirmationPassword.
   * @param {ApiManagementClientContext} client Reference to the service client.
   */
  constructor(client: ApiManagementClientContext) {
    this.client = client;
  }

  /**
   * Sends confirmation
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param userId User identifier. Must be unique in the current API Management service instance.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  send(resourceGroupName: string, serviceName: string, userId: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param userId User identifier. Must be unique in the current API Management service instance.
   * @param callback The callback
   */
  send(resourceGroupName: string, serviceName: string, userId: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param userId User identifier. Must be unique in the current API Management service instance.
   * @param options The optional parameters
   * @param callback The callback
   */
  send(resourceGroupName: string, serviceName: string, userId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  send(resourceGroupName: string, serviceName: string, userId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        userId,
        options
      },
      sendOperationSpec,
      callback);
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const sendOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/users/{userId}/confirmations/password/send",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.userId,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};
