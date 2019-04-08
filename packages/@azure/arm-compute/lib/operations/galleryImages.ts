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
import * as Mappers from "../models/galleryImagesMappers";
import * as Parameters from "../models/parameters";
import { ComputeManagementClientContext } from "../computeManagementClientContext";

/** Class representing a GalleryImages. */
export class GalleryImages {
  private readonly client: ComputeManagementClientContext;

  /**
   * Create a GalleryImages.
   * @param {ComputeManagementClientContext} client Reference to the service client.
   */
  constructor(client: ComputeManagementClientContext) {
    this.client = client;
  }

  /**
   * Create or update a gallery Image Definition.
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Image Gallery in which the Image Definition is to be
   * created.
   * @param galleryImageName The name of the gallery Image Definition to be created or updated. The
   * allowed characters are alphabets and numbers with dots, dashes, and periods allowed in the
   * middle. The maximum length is 80 characters.
   * @param galleryImage Parameters supplied to the create or update gallery image operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.GalleryImagesCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, galleryName: string, galleryImageName: string, galleryImage: Models.GalleryImage, options?: msRest.RequestOptionsBase): Promise<Models.GalleryImagesCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(resourceGroupName,galleryName,galleryImageName,galleryImage,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.GalleryImagesCreateOrUpdateResponse>;
  }

  /**
   * Retrieves information about a gallery Image Definition.
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Image Gallery from which the Image Definitions are to
   * be retrieved.
   * @param galleryImageName The name of the gallery Image Definition to be retrieved.
   * @param [options] The optional parameters
   * @returns Promise<Models.GalleryImagesGetResponse>
   */
  get(resourceGroupName: string, galleryName: string, galleryImageName: string, options?: msRest.RequestOptionsBase): Promise<Models.GalleryImagesGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Image Gallery from which the Image Definitions are to
   * be retrieved.
   * @param galleryImageName The name of the gallery Image Definition to be retrieved.
   * @param callback The callback
   */
  get(resourceGroupName: string, galleryName: string, galleryImageName: string, callback: msRest.ServiceCallback<Models.GalleryImage>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Image Gallery from which the Image Definitions are to
   * be retrieved.
   * @param galleryImageName The name of the gallery Image Definition to be retrieved.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, galleryName: string, galleryImageName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.GalleryImage>): void;
  get(resourceGroupName: string, galleryName: string, galleryImageName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.GalleryImage>, callback?: msRest.ServiceCallback<Models.GalleryImage>): Promise<Models.GalleryImagesGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        galleryName,
        galleryImageName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.GalleryImagesGetResponse>;
  }

  /**
   * Delete a gallery image.
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Image Gallery in which the Image Definition is to be
   * deleted.
   * @param galleryImageName The name of the gallery Image Definition to be deleted.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, galleryName: string, galleryImageName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName,galleryName,galleryImageName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * List gallery Image Definitions in a gallery.
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Image Gallery from which Image Definitions are to be
   * listed.
   * @param [options] The optional parameters
   * @returns Promise<Models.GalleryImagesListByGalleryResponse>
   */
  listByGallery(resourceGroupName: string, galleryName: string, options?: msRest.RequestOptionsBase): Promise<Models.GalleryImagesListByGalleryResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Image Gallery from which Image Definitions are to be
   * listed.
   * @param callback The callback
   */
  listByGallery(resourceGroupName: string, galleryName: string, callback: msRest.ServiceCallback<Models.GalleryImageList>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Image Gallery from which Image Definitions are to be
   * listed.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByGallery(resourceGroupName: string, galleryName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.GalleryImageList>): void;
  listByGallery(resourceGroupName: string, galleryName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.GalleryImageList>, callback?: msRest.ServiceCallback<Models.GalleryImageList>): Promise<Models.GalleryImagesListByGalleryResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        galleryName,
        options
      },
      listByGalleryOperationSpec,
      callback) as Promise<Models.GalleryImagesListByGalleryResponse>;
  }

  /**
   * Create or update a gallery Image Definition.
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Image Gallery in which the Image Definition is to be
   * created.
   * @param galleryImageName The name of the gallery Image Definition to be created or updated. The
   * allowed characters are alphabets and numbers with dots, dashes, and periods allowed in the
   * middle. The maximum length is 80 characters.
   * @param galleryImage Parameters supplied to the create or update gallery image operation.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdate(resourceGroupName: string, galleryName: string, galleryImageName: string, galleryImage: Models.GalleryImage, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        galleryName,
        galleryImageName,
        galleryImage,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * Delete a gallery image.
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Image Gallery in which the Image Definition is to be
   * deleted.
   * @param galleryImageName The name of the gallery Image Definition to be deleted.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, galleryName: string, galleryImageName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        galleryName,
        galleryImageName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * List gallery Image Definitions in a gallery.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.GalleryImagesListByGalleryNextResponse>
   */
  listByGalleryNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.GalleryImagesListByGalleryNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByGalleryNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.GalleryImageList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByGalleryNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.GalleryImageList>): void;
  listByGalleryNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.GalleryImageList>, callback?: msRest.ServiceCallback<Models.GalleryImageList>): Promise<Models.GalleryImagesListByGalleryNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByGalleryNextOperationSpec,
      callback) as Promise<Models.GalleryImagesListByGalleryNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}/images/{galleryImageName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.galleryName,
    Parameters.galleryImageName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.GalleryImage
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByGalleryOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}/images",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.galleryName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.GalleryImageList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}/images/{galleryImageName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.galleryName,
    Parameters.galleryImageName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "galleryImage",
    mapper: {
      ...Mappers.GalleryImage,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.GalleryImage
    },
    201: {
      bodyMapper: Mappers.GalleryImage
    },
    202: {
      bodyMapper: Mappers.GalleryImage
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}/images/{galleryImageName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.galleryName,
    Parameters.galleryImageName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByGalleryNextOperationSpec: msRest.OperationSpec = {
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
      bodyMapper: Mappers.GalleryImageList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
