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
import * as msRestAzure from "@azure/ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/apiManagementServiceMappers";
import * as Parameters from "../models/parameters";
import { ApiManagementClientContext } from "../apiManagementClientContext";

/** Class representing a ApiManagementService. */
export class ApiManagementService {
  private readonly client: ApiManagementClientContext;

  /**
   * Create a ApiManagementService.
   * @param {ApiManagementClientContext} client Reference to the service client.
   */
  constructor(client: ApiManagementClientContext) {
    this.client = client;
  }

  /**
   * Restores a backup of an API Management service created using the ApiManagementService_Backup
   * operation on the current service. This is a long running operation and could take several
   * minutes to complete.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param parameters Parameters supplied to the Restore API Management service from backup
   * operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ApiManagementServiceRestoreResponse>
   */
  restore(resourceGroupName: string, serviceName: string, parameters: Models.ApiManagementServiceBackupRestoreParameters, options?: msRest.RequestOptionsBase): Promise<Models.ApiManagementServiceRestoreResponse> {
    return this.beginRestore(resourceGroupName,serviceName,parameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.ApiManagementServiceRestoreResponse>;
  }

  /**
   * Creates a backup of the API Management service to the given Azure Storage Account. This is long
   * running operation and could take several minutes to complete.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param parameters Parameters supplied to the ApiManagementService_Backup operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ApiManagementServiceBackupResponse>
   */
  backup(resourceGroupName: string, serviceName: string, parameters: Models.ApiManagementServiceBackupRestoreParameters, options?: msRest.RequestOptionsBase): Promise<Models.ApiManagementServiceBackupResponse> {
    return this.beginBackup(resourceGroupName,serviceName,parameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.ApiManagementServiceBackupResponse>;
  }

  /**
   * Creates or updates an API Management service. This is long running operation and could take
   * several minutes to complete.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param parameters Parameters supplied to the CreateOrUpdate API Management service operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ApiManagementServiceCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, serviceName: string, parameters: Models.ApiManagementServiceResource, options?: msRest.RequestOptionsBase): Promise<Models.ApiManagementServiceCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(resourceGroupName,serviceName,parameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.ApiManagementServiceCreateOrUpdateResponse>;
  }

  /**
   * Updates an existing API Management service.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param parameters Parameters supplied to the CreateOrUpdate API Management service operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ApiManagementServiceUpdateResponse>
   */
  update(resourceGroupName: string, serviceName: string, parameters: Models.ApiManagementServiceUpdateParameters, options?: msRest.RequestOptionsBase): Promise<Models.ApiManagementServiceUpdateResponse> {
    return this.beginUpdate(resourceGroupName,serviceName,parameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.ApiManagementServiceUpdateResponse>;
  }

  /**
   * Gets an API Management service resource description.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param [options] The optional parameters
   * @returns Promise<Models.ApiManagementServiceGetResponse>
   */
  get(resourceGroupName: string, serviceName: string, options?: msRest.RequestOptionsBase): Promise<Models.ApiManagementServiceGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param callback The callback
   */
  get(resourceGroupName: string, serviceName: string, callback: msRest.ServiceCallback<Models.ApiManagementServiceResource>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, serviceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ApiManagementServiceResource>): void;
  get(resourceGroupName: string, serviceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ApiManagementServiceResource>, callback?: msRest.ServiceCallback<Models.ApiManagementServiceResource>): Promise<Models.ApiManagementServiceGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.ApiManagementServiceGetResponse>;
  }

  /**
   * Deletes an existing API Management service.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param [options] The optional parameters
   * @returns Promise<Models.ApiManagementServiceDeleteMethodResponse>
   */
  deleteMethod(resourceGroupName: string, serviceName: string, options?: msRest.RequestOptionsBase): Promise<Models.ApiManagementServiceDeleteMethodResponse> {
    return this.beginDeleteMethod(resourceGroupName,serviceName,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.ApiManagementServiceDeleteMethodResponse>;
  }

  /**
   * List all API Management services within a resource group.
   * @param resourceGroupName The name of the resource group.
   * @param [options] The optional parameters
   * @returns Promise<Models.ApiManagementServiceListByResourceGroupResponse>
   */
  listByResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.ApiManagementServiceListByResourceGroupResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, callback: msRest.ServiceCallback<Models.ApiManagementServiceListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ApiManagementServiceListResult>): void;
  listByResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ApiManagementServiceListResult>, callback?: msRest.ServiceCallback<Models.ApiManagementServiceListResult>): Promise<Models.ApiManagementServiceListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        options
      },
      listByResourceGroupOperationSpec,
      callback) as Promise<Models.ApiManagementServiceListByResourceGroupResponse>;
  }

  /**
   * Lists all API Management services within an Azure subscription.
   * @param [options] The optional parameters
   * @returns Promise<Models.ApiManagementServiceListResponse>
   */
  list(options?: msRest.RequestOptionsBase): Promise<Models.ApiManagementServiceListResponse>;
  /**
   * @param callback The callback
   */
  list(callback: msRest.ServiceCallback<Models.ApiManagementServiceListResult>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  list(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ApiManagementServiceListResult>): void;
  list(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ApiManagementServiceListResult>, callback?: msRest.ServiceCallback<Models.ApiManagementServiceListResult>): Promise<Models.ApiManagementServiceListResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listOperationSpec,
      callback) as Promise<Models.ApiManagementServiceListResponse>;
  }

  /**
   * Gets the Single-Sign-On token for the API Management Service which is valid for 5 Minutes.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param [options] The optional parameters
   * @returns Promise<Models.ApiManagementServiceGetSsoTokenResponse>
   */
  getSsoToken(resourceGroupName: string, serviceName: string, options?: msRest.RequestOptionsBase): Promise<Models.ApiManagementServiceGetSsoTokenResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param callback The callback
   */
  getSsoToken(resourceGroupName: string, serviceName: string, callback: msRest.ServiceCallback<Models.ApiManagementServiceGetSsoTokenResult>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param options The optional parameters
   * @param callback The callback
   */
  getSsoToken(resourceGroupName: string, serviceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ApiManagementServiceGetSsoTokenResult>): void;
  getSsoToken(resourceGroupName: string, serviceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ApiManagementServiceGetSsoTokenResult>, callback?: msRest.ServiceCallback<Models.ApiManagementServiceGetSsoTokenResult>): Promise<Models.ApiManagementServiceGetSsoTokenResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        options
      },
      getSsoTokenOperationSpec,
      callback) as Promise<Models.ApiManagementServiceGetSsoTokenResponse>;
  }

  /**
   * Checks availability and correctness of a name for an API Management service.
   * @param parameters Parameters supplied to the CheckNameAvailability operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ApiManagementServiceCheckNameAvailabilityResponse>
   */
  checkNameAvailability(parameters: Models.ApiManagementServiceCheckNameAvailabilityParameters, options?: msRest.RequestOptionsBase): Promise<Models.ApiManagementServiceCheckNameAvailabilityResponse>;
  /**
   * @param parameters Parameters supplied to the CheckNameAvailability operation.
   * @param callback The callback
   */
  checkNameAvailability(parameters: Models.ApiManagementServiceCheckNameAvailabilityParameters, callback: msRest.ServiceCallback<Models.ApiManagementServiceNameAvailabilityResult>): void;
  /**
   * @param parameters Parameters supplied to the CheckNameAvailability operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  checkNameAvailability(parameters: Models.ApiManagementServiceCheckNameAvailabilityParameters, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ApiManagementServiceNameAvailabilityResult>): void;
  checkNameAvailability(parameters: Models.ApiManagementServiceCheckNameAvailabilityParameters, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ApiManagementServiceNameAvailabilityResult>, callback?: msRest.ServiceCallback<Models.ApiManagementServiceNameAvailabilityResult>): Promise<Models.ApiManagementServiceCheckNameAvailabilityResponse> {
    return this.client.sendOperationRequest(
      {
        parameters,
        options
      },
      checkNameAvailabilityOperationSpec,
      callback) as Promise<Models.ApiManagementServiceCheckNameAvailabilityResponse>;
  }

  /**
   * Updates the Microsoft.ApiManagement resource running in the Virtual network to pick the updated
   * network settings.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param [options] The optional parameters
   * @returns Promise<Models.ApiManagementServiceApplyNetworkConfigurationUpdatesResponse>
   */
  applyNetworkConfigurationUpdates(resourceGroupName: string, serviceName: string, options?: Models.ApiManagementServiceApplyNetworkConfigurationUpdatesOptionalParams): Promise<Models.ApiManagementServiceApplyNetworkConfigurationUpdatesResponse> {
    return this.beginApplyNetworkConfigurationUpdates(resourceGroupName,serviceName,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.ApiManagementServiceApplyNetworkConfigurationUpdatesResponse>;
  }

  /**
   * Restores a backup of an API Management service created using the ApiManagementService_Backup
   * operation on the current service. This is a long running operation and could take several
   * minutes to complete.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param parameters Parameters supplied to the Restore API Management service from backup
   * operation.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginRestore(resourceGroupName: string, serviceName: string, parameters: Models.ApiManagementServiceBackupRestoreParameters, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        serviceName,
        parameters,
        options
      },
      beginRestoreOperationSpec,
      options);
  }

  /**
   * Creates a backup of the API Management service to the given Azure Storage Account. This is long
   * running operation and could take several minutes to complete.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param parameters Parameters supplied to the ApiManagementService_Backup operation.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginBackup(resourceGroupName: string, serviceName: string, parameters: Models.ApiManagementServiceBackupRestoreParameters, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        serviceName,
        parameters,
        options
      },
      beginBackupOperationSpec,
      options);
  }

  /**
   * Creates or updates an API Management service. This is long running operation and could take
   * several minutes to complete.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param parameters Parameters supplied to the CreateOrUpdate API Management service operation.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdate(resourceGroupName: string, serviceName: string, parameters: Models.ApiManagementServiceResource, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        serviceName,
        parameters,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * Updates an existing API Management service.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param parameters Parameters supplied to the CreateOrUpdate API Management service operation.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginUpdate(resourceGroupName: string, serviceName: string, parameters: Models.ApiManagementServiceUpdateParameters, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        serviceName,
        parameters,
        options
      },
      beginUpdateOperationSpec,
      options);
  }

  /**
   * Deletes an existing API Management service.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, serviceName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        serviceName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * Updates the Microsoft.ApiManagement resource running in the Virtual network to pick the updated
   * network settings.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginApplyNetworkConfigurationUpdates(resourceGroupName: string, serviceName: string, options?: Models.ApiManagementServiceBeginApplyNetworkConfigurationUpdatesOptionalParams): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        serviceName,
        options
      },
      beginApplyNetworkConfigurationUpdatesOperationSpec,
      options);
  }

  /**
   * List all API Management services within a resource group.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ApiManagementServiceListByResourceGroupNextResponse>
   */
  listByResourceGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.ApiManagementServiceListByResourceGroupNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByResourceGroupNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ApiManagementServiceListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroupNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ApiManagementServiceListResult>): void;
  listByResourceGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ApiManagementServiceListResult>, callback?: msRest.ServiceCallback<Models.ApiManagementServiceListResult>): Promise<Models.ApiManagementServiceListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByResourceGroupNextOperationSpec,
      callback) as Promise<Models.ApiManagementServiceListByResourceGroupNextResponse>;
  }

  /**
   * Lists all API Management services within an Azure subscription.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ApiManagementServiceListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.ApiManagementServiceListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ApiManagementServiceListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ApiManagementServiceListResult>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ApiManagementServiceListResult>, callback?: msRest.ServiceCallback<Models.ApiManagementServiceListResult>): Promise<Models.ApiManagementServiceListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.ApiManagementServiceListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ApiManagementServiceResource
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByResourceGroupOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ApiManagementServiceListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.ApiManagement/service",
  urlParameters: [
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ApiManagementServiceListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getSsoTokenOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/getssotoken",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ApiManagementServiceGetSsoTokenResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const checkNameAvailabilityOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.ApiManagement/checkNameAvailability",
  urlParameters: [
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.ApiManagementServiceCheckNameAvailabilityParameters,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.ApiManagementServiceNameAvailabilityResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginRestoreOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/restore",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.ApiManagementServiceBackupRestoreParameters,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.ApiManagementServiceResource
    },
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginBackupOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/backup",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.ApiManagementServiceBackupRestoreParameters,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.ApiManagementServiceResource
    },
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.ApiManagementServiceResource,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.ApiManagementServiceResource
    },
    201: {
      bodyMapper: Mappers.ApiManagementServiceResource
    },
    202: {
      bodyMapper: Mappers.ApiManagementServiceResource
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.ApiManagementServiceUpdateParameters,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.ApiManagementServiceResource
    },
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    202: {
      bodyMapper: Mappers.ApiManagementServiceResource
    },
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginApplyNetworkConfigurationUpdatesOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/applynetworkconfigurationupdates",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: [
      "options",
      "parameters"
    ],
    mapper: Mappers.ApiManagementServiceApplyNetworkConfigurationParameters
  },
  responses: {
    200: {
      bodyMapper: Mappers.ApiManagementServiceResource
    },
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByResourceGroupNextOperationSpec: msRest.OperationSpec = {
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
      bodyMapper: Mappers.ApiManagementServiceListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
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
      bodyMapper: Mappers.ApiManagementServiceListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
