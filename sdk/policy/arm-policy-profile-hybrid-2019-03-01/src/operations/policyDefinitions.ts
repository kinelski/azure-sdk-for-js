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
import * as Mappers from "../models/policyDefinitionsMappers";
import * as Parameters from "../models/parameters";
import { PolicyClientContext } from "../policyClientContext";

/** Class representing a PolicyDefinitions. */
export class PolicyDefinitions {
  private readonly client: PolicyClientContext;

  /**
   * Create a PolicyDefinitions.
   * @param {PolicyClientContext} client Reference to the service client.
   */
  constructor(client: PolicyClientContext) {
    this.client = client;
  }

  /**
   * Creates or updates a policy definition.
   * @param policyDefinitionName The name of the policy definition to create.
   * @param parameters The policy definition properties.
   * @param [options] The optional parameters
   * @returns Promise<Models.PolicyDefinitionsCreateOrUpdateResponse>
   */
  createOrUpdate(policyDefinitionName: string, parameters: Models.PolicyDefinition, options?: msRest.RequestOptionsBase): Promise<Models.PolicyDefinitionsCreateOrUpdateResponse>;
  /**
   * @param policyDefinitionName The name of the policy definition to create.
   * @param parameters The policy definition properties.
   * @param callback The callback
   */
  createOrUpdate(policyDefinitionName: string, parameters: Models.PolicyDefinition, callback: msRest.ServiceCallback<Models.PolicyDefinition>): void;
  /**
   * @param policyDefinitionName The name of the policy definition to create.
   * @param parameters The policy definition properties.
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrUpdate(policyDefinitionName: string, parameters: Models.PolicyDefinition, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PolicyDefinition>): void;
  createOrUpdate(policyDefinitionName: string, parameters: Models.PolicyDefinition, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.PolicyDefinition>, callback?: msRest.ServiceCallback<Models.PolicyDefinition>): Promise<Models.PolicyDefinitionsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        policyDefinitionName,
        parameters,
        options
      },
      createOrUpdateOperationSpec,
      callback) as Promise<Models.PolicyDefinitionsCreateOrUpdateResponse>;
  }

  /**
   * Deletes a policy definition.
   * @param policyDefinitionName The name of the policy definition to delete.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(policyDefinitionName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param policyDefinitionName The name of the policy definition to delete.
   * @param callback The callback
   */
  deleteMethod(policyDefinitionName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param policyDefinitionName The name of the policy definition to delete.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(policyDefinitionName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(policyDefinitionName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        policyDefinitionName,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * Gets the policy definition.
   * @param policyDefinitionName The name of the policy definition to get.
   * @param [options] The optional parameters
   * @returns Promise<Models.PolicyDefinitionsGetResponse>
   */
  get(policyDefinitionName: string, options?: msRest.RequestOptionsBase): Promise<Models.PolicyDefinitionsGetResponse>;
  /**
   * @param policyDefinitionName The name of the policy definition to get.
   * @param callback The callback
   */
  get(policyDefinitionName: string, callback: msRest.ServiceCallback<Models.PolicyDefinition>): void;
  /**
   * @param policyDefinitionName The name of the policy definition to get.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(policyDefinitionName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PolicyDefinition>): void;
  get(policyDefinitionName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.PolicyDefinition>, callback?: msRest.ServiceCallback<Models.PolicyDefinition>): Promise<Models.PolicyDefinitionsGetResponse> {
    return this.client.sendOperationRequest(
      {
        policyDefinitionName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.PolicyDefinitionsGetResponse>;
  }

  /**
   * Gets the built in policy definition.
   * @param policyDefinitionName The name of the built in policy definition to get.
   * @param [options] The optional parameters
   * @returns Promise<Models.PolicyDefinitionsGetBuiltInResponse>
   */
  getBuiltIn(policyDefinitionName: string, options?: msRest.RequestOptionsBase): Promise<Models.PolicyDefinitionsGetBuiltInResponse>;
  /**
   * @param policyDefinitionName The name of the built in policy definition to get.
   * @param callback The callback
   */
  getBuiltIn(policyDefinitionName: string, callback: msRest.ServiceCallback<Models.PolicyDefinition>): void;
  /**
   * @param policyDefinitionName The name of the built in policy definition to get.
   * @param options The optional parameters
   * @param callback The callback
   */
  getBuiltIn(policyDefinitionName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PolicyDefinition>): void;
  getBuiltIn(policyDefinitionName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.PolicyDefinition>, callback?: msRest.ServiceCallback<Models.PolicyDefinition>): Promise<Models.PolicyDefinitionsGetBuiltInResponse> {
    return this.client.sendOperationRequest(
      {
        policyDefinitionName,
        options
      },
      getBuiltInOperationSpec,
      callback) as Promise<Models.PolicyDefinitionsGetBuiltInResponse>;
  }

  /**
   * Creates or updates a policy definition at management group level.
   * @param policyDefinitionName The name of the policy definition to create.
   * @param parameters The policy definition properties.
   * @param managementGroupId The ID of the management group.
   * @param [options] The optional parameters
   * @returns Promise<Models.PolicyDefinitionsCreateOrUpdateAtManagementGroupResponse>
   */
  createOrUpdateAtManagementGroup(policyDefinitionName: string, parameters: Models.PolicyDefinition, managementGroupId: string, options?: msRest.RequestOptionsBase): Promise<Models.PolicyDefinitionsCreateOrUpdateAtManagementGroupResponse>;
  /**
   * @param policyDefinitionName The name of the policy definition to create.
   * @param parameters The policy definition properties.
   * @param managementGroupId The ID of the management group.
   * @param callback The callback
   */
  createOrUpdateAtManagementGroup(policyDefinitionName: string, parameters: Models.PolicyDefinition, managementGroupId: string, callback: msRest.ServiceCallback<Models.PolicyDefinition>): void;
  /**
   * @param policyDefinitionName The name of the policy definition to create.
   * @param parameters The policy definition properties.
   * @param managementGroupId The ID of the management group.
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrUpdateAtManagementGroup(policyDefinitionName: string, parameters: Models.PolicyDefinition, managementGroupId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PolicyDefinition>): void;
  createOrUpdateAtManagementGroup(policyDefinitionName: string, parameters: Models.PolicyDefinition, managementGroupId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.PolicyDefinition>, callback?: msRest.ServiceCallback<Models.PolicyDefinition>): Promise<Models.PolicyDefinitionsCreateOrUpdateAtManagementGroupResponse> {
    return this.client.sendOperationRequest(
      {
        policyDefinitionName,
        parameters,
        managementGroupId,
        options
      },
      createOrUpdateAtManagementGroupOperationSpec,
      callback) as Promise<Models.PolicyDefinitionsCreateOrUpdateAtManagementGroupResponse>;
  }

  /**
   * Deletes a policy definition at management group level.
   * @param policyDefinitionName The name of the policy definition to delete.
   * @param managementGroupId The ID of the management group.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteAtManagementGroup(policyDefinitionName: string, managementGroupId: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param policyDefinitionName The name of the policy definition to delete.
   * @param managementGroupId The ID of the management group.
   * @param callback The callback
   */
  deleteAtManagementGroup(policyDefinitionName: string, managementGroupId: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param policyDefinitionName The name of the policy definition to delete.
   * @param managementGroupId The ID of the management group.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteAtManagementGroup(policyDefinitionName: string, managementGroupId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteAtManagementGroup(policyDefinitionName: string, managementGroupId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        policyDefinitionName,
        managementGroupId,
        options
      },
      deleteAtManagementGroupOperationSpec,
      callback);
  }

  /**
   * Gets the policy definition at management group level.
   * @param policyDefinitionName The name of the policy definition to get.
   * @param managementGroupId The ID of the management group.
   * @param [options] The optional parameters
   * @returns Promise<Models.PolicyDefinitionsGetAtManagementGroupResponse>
   */
  getAtManagementGroup(policyDefinitionName: string, managementGroupId: string, options?: msRest.RequestOptionsBase): Promise<Models.PolicyDefinitionsGetAtManagementGroupResponse>;
  /**
   * @param policyDefinitionName The name of the policy definition to get.
   * @param managementGroupId The ID of the management group.
   * @param callback The callback
   */
  getAtManagementGroup(policyDefinitionName: string, managementGroupId: string, callback: msRest.ServiceCallback<Models.PolicyDefinition>): void;
  /**
   * @param policyDefinitionName The name of the policy definition to get.
   * @param managementGroupId The ID of the management group.
   * @param options The optional parameters
   * @param callback The callback
   */
  getAtManagementGroup(policyDefinitionName: string, managementGroupId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PolicyDefinition>): void;
  getAtManagementGroup(policyDefinitionName: string, managementGroupId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.PolicyDefinition>, callback?: msRest.ServiceCallback<Models.PolicyDefinition>): Promise<Models.PolicyDefinitionsGetAtManagementGroupResponse> {
    return this.client.sendOperationRequest(
      {
        policyDefinitionName,
        managementGroupId,
        options
      },
      getAtManagementGroupOperationSpec,
      callback) as Promise<Models.PolicyDefinitionsGetAtManagementGroupResponse>;
  }

  /**
   * Gets all the policy definitions for a subscription.
   * @param [options] The optional parameters
   * @returns Promise<Models.PolicyDefinitionsListResponse>
   */
  list(options?: msRest.RequestOptionsBase): Promise<Models.PolicyDefinitionsListResponse>;
  /**
   * @param callback The callback
   */
  list(callback: msRest.ServiceCallback<Models.PolicyDefinitionListResult>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  list(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PolicyDefinitionListResult>): void;
  list(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.PolicyDefinitionListResult>, callback?: msRest.ServiceCallback<Models.PolicyDefinitionListResult>): Promise<Models.PolicyDefinitionsListResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listOperationSpec,
      callback) as Promise<Models.PolicyDefinitionsListResponse>;
  }

  /**
   * Gets all the built in policy definitions.
   * @param [options] The optional parameters
   * @returns Promise<Models.PolicyDefinitionsListBuiltInResponse>
   */
  listBuiltIn(options?: msRest.RequestOptionsBase): Promise<Models.PolicyDefinitionsListBuiltInResponse>;
  /**
   * @param callback The callback
   */
  listBuiltIn(callback: msRest.ServiceCallback<Models.PolicyDefinitionListResult>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  listBuiltIn(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PolicyDefinitionListResult>): void;
  listBuiltIn(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.PolicyDefinitionListResult>, callback?: msRest.ServiceCallback<Models.PolicyDefinitionListResult>): Promise<Models.PolicyDefinitionsListBuiltInResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listBuiltInOperationSpec,
      callback) as Promise<Models.PolicyDefinitionsListBuiltInResponse>;
  }

  /**
   * Gets all the policy definitions for a subscription at management group level.
   * @param managementGroupId The ID of the management group.
   * @param [options] The optional parameters
   * @returns Promise<Models.PolicyDefinitionsListByManagementGroupResponse>
   */
  listByManagementGroup(managementGroupId: string, options?: msRest.RequestOptionsBase): Promise<Models.PolicyDefinitionsListByManagementGroupResponse>;
  /**
   * @param managementGroupId The ID of the management group.
   * @param callback The callback
   */
  listByManagementGroup(managementGroupId: string, callback: msRest.ServiceCallback<Models.PolicyDefinitionListResult>): void;
  /**
   * @param managementGroupId The ID of the management group.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByManagementGroup(managementGroupId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PolicyDefinitionListResult>): void;
  listByManagementGroup(managementGroupId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.PolicyDefinitionListResult>, callback?: msRest.ServiceCallback<Models.PolicyDefinitionListResult>): Promise<Models.PolicyDefinitionsListByManagementGroupResponse> {
    return this.client.sendOperationRequest(
      {
        managementGroupId,
        options
      },
      listByManagementGroupOperationSpec,
      callback) as Promise<Models.PolicyDefinitionsListByManagementGroupResponse>;
  }

  /**
   * Gets all the policy definitions for a subscription.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.PolicyDefinitionsListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.PolicyDefinitionsListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.PolicyDefinitionListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PolicyDefinitionListResult>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.PolicyDefinitionListResult>, callback?: msRest.ServiceCallback<Models.PolicyDefinitionListResult>): Promise<Models.PolicyDefinitionsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.PolicyDefinitionsListNextResponse>;
  }

  /**
   * Gets all the built in policy definitions.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.PolicyDefinitionsListBuiltInNextResponse>
   */
  listBuiltInNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.PolicyDefinitionsListBuiltInNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listBuiltInNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.PolicyDefinitionListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listBuiltInNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PolicyDefinitionListResult>): void;
  listBuiltInNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.PolicyDefinitionListResult>, callback?: msRest.ServiceCallback<Models.PolicyDefinitionListResult>): Promise<Models.PolicyDefinitionsListBuiltInNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listBuiltInNextOperationSpec,
      callback) as Promise<Models.PolicyDefinitionsListBuiltInNextResponse>;
  }

  /**
   * Gets all the policy definitions for a subscription at management group level.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.PolicyDefinitionsListByManagementGroupNextResponse>
   */
  listByManagementGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.PolicyDefinitionsListByManagementGroupNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByManagementGroupNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.PolicyDefinitionListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByManagementGroupNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PolicyDefinitionListResult>): void;
  listByManagementGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.PolicyDefinitionListResult>, callback?: msRest.ServiceCallback<Models.PolicyDefinitionListResult>): Promise<Models.PolicyDefinitionsListByManagementGroupNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByManagementGroupNextOperationSpec,
      callback) as Promise<Models.PolicyDefinitionsListByManagementGroupNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const createOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Authorization/policyDefinitions/{policyDefinitionName}",
  urlParameters: [
    Parameters.policyDefinitionName,
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
      ...Mappers.PolicyDefinition,
      required: true
    }
  },
  responses: {
    201: {
      bodyMapper: Mappers.PolicyDefinition
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Authorization/policyDefinitions/{policyDefinitionName}",
  urlParameters: [
    Parameters.policyDefinitionName,
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
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Authorization/policyDefinitions/{policyDefinitionName}",
  urlParameters: [
    Parameters.policyDefinitionName,
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
      bodyMapper: Mappers.PolicyDefinition
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getBuiltInOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "providers/Microsoft.Authorization/policyDefinitions/{policyDefinitionName}",
  urlParameters: [
    Parameters.policyDefinitionName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.PolicyDefinition
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const createOrUpdateAtManagementGroupOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "providers/Microsoft.Management/managementgroups/{managementGroupId}/providers/Microsoft.Authorization/policyDefinitions/{policyDefinitionName}",
  urlParameters: [
    Parameters.policyDefinitionName,
    Parameters.managementGroupId
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
      ...Mappers.PolicyDefinition,
      required: true
    }
  },
  responses: {
    201: {
      bodyMapper: Mappers.PolicyDefinition
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const deleteAtManagementGroupOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "providers/Microsoft.Management/managementgroups/{managementGroupId}/providers/Microsoft.Authorization/policyDefinitions/{policyDefinitionName}",
  urlParameters: [
    Parameters.policyDefinitionName,
    Parameters.managementGroupId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getAtManagementGroupOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "providers/Microsoft.Management/managementgroups/{managementGroupId}/providers/Microsoft.Authorization/policyDefinitions/{policyDefinitionName}",
  urlParameters: [
    Parameters.policyDefinitionName,
    Parameters.managementGroupId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.PolicyDefinition
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Authorization/policyDefinitions",
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
      bodyMapper: Mappers.PolicyDefinitionListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listBuiltInOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "providers/Microsoft.Authorization/policyDefinitions",
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.PolicyDefinitionListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByManagementGroupOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "providers/Microsoft.Management/managementgroups/{managementGroupId}/providers/Microsoft.Authorization/policyDefinitions",
  urlParameters: [
    Parameters.managementGroupId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.PolicyDefinitionListResult
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
      bodyMapper: Mappers.PolicyDefinitionListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listBuiltInNextOperationSpec: msRest.OperationSpec = {
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
      bodyMapper: Mappers.PolicyDefinitionListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByManagementGroupNextOperationSpec: msRest.OperationSpec = {
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
      bodyMapper: Mappers.PolicyDefinitionListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
