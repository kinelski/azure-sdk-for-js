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
import * as Mappers from "../models/serviceMappers";
import * as Parameters from "../models/parameters";
import { ServiceFabricMeshManagementClientContext } from "../serviceFabricMeshManagementClientContext";

/** Class representing a Service. */
export class Service {
  private readonly client: ServiceFabricMeshManagementClientContext;

  /**
   * Create a Service.
   * @param {ServiceFabricMeshManagementClientContext} client Reference to the service client.
   */
  constructor(client: ServiceFabricMeshManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets the information about the service resource with the given name. The information include the
   * description and other properties of the service.
   * @summary Gets the service resource with the given name.
   * @param resourceGroupName Azure resource group name
   * @param applicationResourceName The identity of the application.
   * @param serviceResourceName The identity of the service.
   * @param [options] The optional parameters
   * @returns Promise<Models.ServiceGetResponse>
   */
  get(resourceGroupName: string, applicationResourceName: string, serviceResourceName: string, options?: msRest.RequestOptionsBase): Promise<Models.ServiceGetResponse>;
  /**
   * @param resourceGroupName Azure resource group name
   * @param applicationResourceName The identity of the application.
   * @param serviceResourceName The identity of the service.
   * @param callback The callback
   */
  get(resourceGroupName: string, applicationResourceName: string, serviceResourceName: string, callback: msRest.ServiceCallback<Models.ServiceResourceDescription>): void;
  /**
   * @param resourceGroupName Azure resource group name
   * @param applicationResourceName The identity of the application.
   * @param serviceResourceName The identity of the service.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, applicationResourceName: string, serviceResourceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ServiceResourceDescription>): void;
  get(resourceGroupName: string, applicationResourceName: string, serviceResourceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ServiceResourceDescription>, callback?: msRest.ServiceCallback<Models.ServiceResourceDescription>): Promise<Models.ServiceGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        applicationResourceName,
        serviceResourceName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.ServiceGetResponse>;
  }

  /**
   * Gets the information about all services of an application resource. The information include the
   * description and other properties of the Service.
   * @summary Lists all the service resources.
   * @param resourceGroupName Azure resource group name
   * @param applicationResourceName The identity of the application.
   * @param [options] The optional parameters
   * @returns Promise<Models.ServiceListResponse>
   */
  list(resourceGroupName: string, applicationResourceName: string, options?: msRest.RequestOptionsBase): Promise<Models.ServiceListResponse>;
  /**
   * @param resourceGroupName Azure resource group name
   * @param applicationResourceName The identity of the application.
   * @param callback The callback
   */
  list(resourceGroupName: string, applicationResourceName: string, callback: msRest.ServiceCallback<Models.ServiceResourceDescriptionList>): void;
  /**
   * @param resourceGroupName Azure resource group name
   * @param applicationResourceName The identity of the application.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(resourceGroupName: string, applicationResourceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ServiceResourceDescriptionList>): void;
  list(resourceGroupName: string, applicationResourceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ServiceResourceDescriptionList>, callback?: msRest.ServiceCallback<Models.ServiceResourceDescriptionList>): Promise<Models.ServiceListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        applicationResourceName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.ServiceListResponse>;
  }

  /**
   * Gets the information about all services of an application resource. The information include the
   * description and other properties of the Service.
   * @summary Lists all the service resources.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ServiceListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.ServiceListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ServiceResourceDescriptionList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ServiceResourceDescriptionList>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ServiceResourceDescriptionList>, callback?: msRest.ServiceCallback<Models.ServiceResourceDescriptionList>): Promise<Models.ServiceListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.ServiceListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabricMesh/applications/{applicationResourceName}/services/{serviceResourceName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.applicationResourceName,
    Parameters.serviceResourceName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ServiceResourceDescription
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabricMesh/applications/{applicationResourceName}/services",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.applicationResourceName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ServiceResourceDescriptionList
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const listNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ServiceResourceDescriptionList
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};