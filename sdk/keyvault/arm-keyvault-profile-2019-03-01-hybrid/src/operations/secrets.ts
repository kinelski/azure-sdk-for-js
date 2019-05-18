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
import * as Mappers from "../models/secretsMappers";
import * as Parameters from "../models/parameters";
import { KeyVaultManagementClientContext } from "../keyVaultManagementClientContext";

/** Class representing a Secrets. */
export class Secrets {
  private readonly client: KeyVaultManagementClientContext;

  /**
   * Create a Secrets.
   * @param {KeyVaultManagementClientContext} client Reference to the service client.
   */
  constructor(client: KeyVaultManagementClientContext) {
    this.client = client;
  }

  /**
   * Create or update a secret in a key vault in the specified subscription.  NOTE: This API is
   * intended for internal use in ARM deployments. Users should use the data-plane REST service for
   * interaction with vault secrets.
   * @param resourceGroupName The name of the Resource Group to which the vault belongs.
   * @param vaultName Name of the vault
   * @param secretName Name of the secret
   * @param parameters Parameters to create or update the secret
   * @param [options] The optional parameters
   * @returns Promise<Models.SecretsCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, vaultName: string, secretName: string, parameters: Models.SecretCreateOrUpdateParameters, options?: msRest.RequestOptionsBase): Promise<Models.SecretsCreateOrUpdateResponse>;
  /**
   * @param resourceGroupName The name of the Resource Group to which the vault belongs.
   * @param vaultName Name of the vault
   * @param secretName Name of the secret
   * @param parameters Parameters to create or update the secret
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, vaultName: string, secretName: string, parameters: Models.SecretCreateOrUpdateParameters, callback: msRest.ServiceCallback<Models.Secret>): void;
  /**
   * @param resourceGroupName The name of the Resource Group to which the vault belongs.
   * @param vaultName Name of the vault
   * @param secretName Name of the secret
   * @param parameters Parameters to create or update the secret
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, vaultName: string, secretName: string, parameters: Models.SecretCreateOrUpdateParameters, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Secret>): void;
  createOrUpdate(resourceGroupName: string, vaultName: string, secretName: string, parameters: Models.SecretCreateOrUpdateParameters, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Secret>, callback?: msRest.ServiceCallback<Models.Secret>): Promise<Models.SecretsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        vaultName,
        secretName,
        parameters,
        options
      },
      createOrUpdateOperationSpec,
      callback) as Promise<Models.SecretsCreateOrUpdateResponse>;
  }

  /**
   * Update a secret in the specified subscription.  NOTE: This API is intended for internal use in
   * ARM deployments.  Users should use the data-plane REST service for interaction with vault
   * secrets.
   * @param resourceGroupName The name of the Resource Group to which the vault belongs.
   * @param vaultName Name of the vault
   * @param secretName Name of the secret
   * @param parameters Parameters to patch the secret
   * @param [options] The optional parameters
   * @returns Promise<Models.SecretsUpdateResponse>
   */
  update(resourceGroupName: string, vaultName: string, secretName: string, parameters: Models.SecretPatchParameters, options?: msRest.RequestOptionsBase): Promise<Models.SecretsUpdateResponse>;
  /**
   * @param resourceGroupName The name of the Resource Group to which the vault belongs.
   * @param vaultName Name of the vault
   * @param secretName Name of the secret
   * @param parameters Parameters to patch the secret
   * @param callback The callback
   */
  update(resourceGroupName: string, vaultName: string, secretName: string, parameters: Models.SecretPatchParameters, callback: msRest.ServiceCallback<Models.Secret>): void;
  /**
   * @param resourceGroupName The name of the Resource Group to which the vault belongs.
   * @param vaultName Name of the vault
   * @param secretName Name of the secret
   * @param parameters Parameters to patch the secret
   * @param options The optional parameters
   * @param callback The callback
   */
  update(resourceGroupName: string, vaultName: string, secretName: string, parameters: Models.SecretPatchParameters, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Secret>): void;
  update(resourceGroupName: string, vaultName: string, secretName: string, parameters: Models.SecretPatchParameters, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Secret>, callback?: msRest.ServiceCallback<Models.Secret>): Promise<Models.SecretsUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        vaultName,
        secretName,
        parameters,
        options
      },
      updateOperationSpec,
      callback) as Promise<Models.SecretsUpdateResponse>;
  }

  /**
   * Gets the specified secret.  NOTE: This API is intended for internal use in ARM deployments.
   * Users should use the data-plane REST service for interaction with vault secrets.
   * @param resourceGroupName The name of the Resource Group to which the vault belongs.
   * @param vaultName The name of the vault.
   * @param secretName The name of the secret.
   * @param [options] The optional parameters
   * @returns Promise<Models.SecretsGetResponse>
   */
  get(resourceGroupName: string, vaultName: string, secretName: string, options?: msRest.RequestOptionsBase): Promise<Models.SecretsGetResponse>;
  /**
   * @param resourceGroupName The name of the Resource Group to which the vault belongs.
   * @param vaultName The name of the vault.
   * @param secretName The name of the secret.
   * @param callback The callback
   */
  get(resourceGroupName: string, vaultName: string, secretName: string, callback: msRest.ServiceCallback<Models.Secret>): void;
  /**
   * @param resourceGroupName The name of the Resource Group to which the vault belongs.
   * @param vaultName The name of the vault.
   * @param secretName The name of the secret.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, vaultName: string, secretName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Secret>): void;
  get(resourceGroupName: string, vaultName: string, secretName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Secret>, callback?: msRest.ServiceCallback<Models.Secret>): Promise<Models.SecretsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        vaultName,
        secretName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.SecretsGetResponse>;
  }

  /**
   * The List operation gets information about the secrets in a vault.  NOTE: This API is intended
   * for internal use in ARM deployments. Users should use the data-plane REST service for
   * interaction with vault secrets.
   * @param resourceGroupName The name of the Resource Group to which the vault belongs.
   * @param vaultName The name of the vault.
   * @param [options] The optional parameters
   * @returns Promise<Models.SecretsListResponse>
   */
  list(resourceGroupName: string, vaultName: string, options?: Models.SecretsListOptionalParams): Promise<Models.SecretsListResponse>;
  /**
   * @param resourceGroupName The name of the Resource Group to which the vault belongs.
   * @param vaultName The name of the vault.
   * @param callback The callback
   */
  list(resourceGroupName: string, vaultName: string, callback: msRest.ServiceCallback<Models.SecretListResult>): void;
  /**
   * @param resourceGroupName The name of the Resource Group to which the vault belongs.
   * @param vaultName The name of the vault.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(resourceGroupName: string, vaultName: string, options: Models.SecretsListOptionalParams, callback: msRest.ServiceCallback<Models.SecretListResult>): void;
  list(resourceGroupName: string, vaultName: string, options?: Models.SecretsListOptionalParams | msRest.ServiceCallback<Models.SecretListResult>, callback?: msRest.ServiceCallback<Models.SecretListResult>): Promise<Models.SecretsListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        vaultName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.SecretsListResponse>;
  }

  /**
   * The List operation gets information about the secrets in a vault.  NOTE: This API is intended
   * for internal use in ARM deployments. Users should use the data-plane REST service for
   * interaction with vault secrets.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.SecretsListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.SecretsListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.SecretListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SecretListResult>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.SecretListResult>, callback?: msRest.ServiceCallback<Models.SecretListResult>): Promise<Models.SecretsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.SecretsListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const createOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/vaults/{vaultName}/secrets/{secretName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.vaultName0,
    Parameters.secretName0,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.SecretCreateOrUpdateParameters,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.Secret
    },
    201: {
      bodyMapper: Mappers.Secret
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const updateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/vaults/{vaultName}/secrets/{secretName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.vaultName0,
    Parameters.secretName0,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.SecretPatchParameters,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.Secret
    },
    201: {
      bodyMapper: Mappers.Secret
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/vaults/{vaultName}/secrets/{secretName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.vaultName1,
    Parameters.secretName1,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Secret
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/vaults/{vaultName}/secrets",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.vaultName1,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.top,
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.SecretListResult
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
      bodyMapper: Mappers.SecretListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
