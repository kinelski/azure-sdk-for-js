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

export const acceptLanguage: msRest.OperationParameter = {
  parameterPath: "acceptLanguage",
  mapper: {
    serializedName: "accept-language",
    defaultValue: 'en-US',
    type: {
      name: "String"
    }
  }
};
export const apiVersion0: msRest.OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "api-version",
    defaultValue: '2019-03-01',
    type: {
      name: "String"
    }
  }
};
export const apiVersion1: msRest.OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "api-version",
    defaultValue: '2017-09-01',
    type: {
      name: "String"
    }
  }
};
export const apiVersion2: msRest.OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "api-version",
    defaultValue: '2018-09-30',
    type: {
      name: "String"
    }
  }
};
export const apiVersion3: msRest.OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "api-version",
    defaultValue: '2017-01-31',
    type: {
      name: "String"
    }
  }
};
export const availabilitySetName: msRest.OperationURLParameter = {
  parameterPath: "availabilitySetName",
  mapper: {
    required: true,
    serializedName: "availabilitySetName",
    type: {
      name: "String"
    }
  }
};
export const commandId: msRest.OperationURLParameter = {
  parameterPath: "commandId",
  mapper: {
    required: true,
    serializedName: "commandId",
    type: {
      name: "String"
    }
  }
};
export const containerServiceName: msRest.OperationURLParameter = {
  parameterPath: "containerServiceName",
  mapper: {
    required: true,
    serializedName: "containerServiceName",
    type: {
      name: "String"
    }
  }
};
export const diskName: msRest.OperationURLParameter = {
  parameterPath: "diskName",
  mapper: {
    required: true,
    serializedName: "diskName",
    type: {
      name: "String"
    }
  }
};
export const expand0: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "expand"
  ],
  mapper: {
    serializedName: "$expand",
    type: {
      name: "String"
    }
  }
};
export const expand1: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "expand"
  ],
  mapper: {
    serializedName: "$expand",
    type: {
      name: "Enum",
      allowedValues: [
        "instanceView"
      ]
    }
  }
};
export const filter: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "filter"
  ],
  mapper: {
    serializedName: "$filter",
    type: {
      name: "String"
    }
  }
};
export const galleryImageName: msRest.OperationURLParameter = {
  parameterPath: "galleryImageName",
  mapper: {
    required: true,
    serializedName: "galleryImageName",
    type: {
      name: "String"
    }
  }
};
export const galleryImageVersionName: msRest.OperationURLParameter = {
  parameterPath: "galleryImageVersionName",
  mapper: {
    required: true,
    serializedName: "galleryImageVersionName",
    type: {
      name: "String"
    }
  }
};
export const galleryName: msRest.OperationURLParameter = {
  parameterPath: "galleryName",
  mapper: {
    required: true,
    serializedName: "galleryName",
    type: {
      name: "String"
    }
  }
};
export const imageName: msRest.OperationURLParameter = {
  parameterPath: "imageName",
  mapper: {
    required: true,
    serializedName: "imageName",
    type: {
      name: "String"
    }
  }
};
export const instanceId: msRest.OperationURLParameter = {
  parameterPath: "instanceId",
  mapper: {
    required: true,
    serializedName: "instanceId",
    type: {
      name: "String"
    }
  }
};
export const location0: msRest.OperationURLParameter = {
  parameterPath: "location",
  mapper: {
    required: true,
    serializedName: "location",
    type: {
      name: "String"
    }
  }
};
export const location1: msRest.OperationURLParameter = {
  parameterPath: "location",
  mapper: {
    required: true,
    serializedName: "location",
    constraints: {
      Pattern: /^[-\w\._]+$/
    },
    type: {
      name: "String"
    }
  }
};
export const nextPageLink: msRest.OperationURLParameter = {
  parameterPath: "nextPageLink",
  mapper: {
    required: true,
    serializedName: "nextLink",
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};
export const offer: msRest.OperationURLParameter = {
  parameterPath: "offer",
  mapper: {
    required: true,
    serializedName: "offer",
    type: {
      name: "String"
    }
  }
};
export const orderby: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "orderby"
  ],
  mapper: {
    serializedName: "$orderby",
    type: {
      name: "String"
    }
  }
};
export const platformUpdateDomain: msRest.OperationQueryParameter = {
  parameterPath: "platformUpdateDomain",
  mapper: {
    required: true,
    serializedName: "platformUpdateDomain",
    type: {
      name: "Number"
    }
  }
};
export const publisherName: msRest.OperationURLParameter = {
  parameterPath: "publisherName",
  mapper: {
    required: true,
    serializedName: "publisherName",
    type: {
      name: "String"
    }
  }
};
export const resourceGroupName: msRest.OperationURLParameter = {
  parameterPath: "resourceGroupName",
  mapper: {
    required: true,
    serializedName: "resourceGroupName",
    type: {
      name: "String"
    }
  }
};
export const select: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "select"
  ],
  mapper: {
    serializedName: "$select",
    type: {
      name: "String"
    }
  }
};
export const skus: msRest.OperationURLParameter = {
  parameterPath: "skus",
  mapper: {
    required: true,
    serializedName: "skus",
    type: {
      name: "String"
    }
  }
};
export const snapshotName: msRest.OperationURLParameter = {
  parameterPath: "snapshotName",
  mapper: {
    required: true,
    serializedName: "snapshotName",
    type: {
      name: "String"
    }
  }
};
export const subscriptionId: msRest.OperationURLParameter = {
  parameterPath: "subscriptionId",
  mapper: {
    required: true,
    serializedName: "subscriptionId",
    type: {
      name: "String"
    }
  }
};
export const top: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "top"
  ],
  mapper: {
    serializedName: "$top",
    type: {
      name: "Number"
    }
  }
};
export const type: msRest.OperationURLParameter = {
  parameterPath: "type",
  mapper: {
    required: true,
    serializedName: "type",
    type: {
      name: "String"
    }
  }
};
export const version: msRest.OperationURLParameter = {
  parameterPath: "version",
  mapper: {
    required: true,
    serializedName: "version",
    type: {
      name: "String"
    }
  }
};
export const virtualMachineScaleSetName: msRest.OperationURLParameter = {
  parameterPath: "virtualMachineScaleSetName",
  mapper: {
    required: true,
    serializedName: "virtualMachineScaleSetName",
    type: {
      name: "String"
    }
  }
};
export const vmExtensionName: msRest.OperationURLParameter = {
  parameterPath: "vmExtensionName",
  mapper: {
    required: true,
    serializedName: "vmExtensionName",
    type: {
      name: "String"
    }
  }
};
export const vmName: msRest.OperationURLParameter = {
  parameterPath: "vmName",
  mapper: {
    required: true,
    serializedName: "vmName",
    type: {
      name: "String"
    }
  }
};
export const vmScaleSetName: msRest.OperationURLParameter = {
  parameterPath: "vmScaleSetName",
  mapper: {
    required: true,
    serializedName: "vmScaleSetName",
    type: {
      name: "String"
    }
  }
};
export const vmssExtensionName: msRest.OperationURLParameter = {
  parameterPath: "vmssExtensionName",
  mapper: {
    required: true,
    serializedName: "vmssExtensionName",
    type: {
      name: "String"
    }
  }
};
