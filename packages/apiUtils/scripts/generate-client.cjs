if (process.argv.length !== 4) {
  // eslint-disable-next-line no-console
  console.log('Use: node generate-client.js ../path/to/OutputFile.ts @moralisweb3/name-of-library');
  return;
}

function capitalizeFirst(value) {
  return value.charAt(0).toUpperCase() + value.substring(1);
}

const outputFilePath = process.argv[2];
const outputClassName = outputFilePath.split('/').pop().split('.')[0];
const sourcePackageName = process.argv[3];

/* eslint-disable @typescript-eslint/no-var-requires */
const sourcePackage = require(sourcePackageName);
const fs = require('fs');
const { determineOperationType } = require('@moralisweb3/common-core');

const uniqueGroupNames = new Set(sourcePackage.operations.map((o) => o.groupName));
const sourcePackageImports = new Set();
const apiUtilsPackageImports = new Set();
const corePackageImports = new Set();
let bodyOutput = ``;

for (const groupName of uniqueGroupNames) {
  bodyOutput += `
  public readonly ${groupName} = {
`;

  for (const operation of sourcePackage.operations.filter((o) => o.groupName === groupName)) {
    const operationVarName = `${operation.name}Operation`;
    const requestClassName = `${capitalizeFirst(operation.name)}Request`;
    const responseClassName = `${capitalizeFirst(operation.name)}ResponseAdapter`;

    const omitRequest = !operation?.urlPathParamNames && !operation.urlSearchParamNames && !operation.bodyParamNames;

    let resolverClassName;
    let returnType;
    switch (determineOperationType(operation)) {
      case 'nonNullable':
        resolverClassName = 'OperationResolver';
        returnType = responseClassName;
        break;
      case 'nullable':
        resolverClassName = 'NullableOperationResolver';
        returnType = `${responseClassName} | null`;
        break;
      case 'paginated':
        resolverClassName = 'PaginatedOperationResolver';
        returnType = responseClassName;
        break;
    }

    sourcePackageImports.add(operationVarName);
    if (!omitRequest) {
      sourcePackageImports.add(requestClassName);
    }
    sourcePackageImports.add(responseClassName);
    apiUtilsPackageImports.add(resolverClassName);

    bodyOutput += `   ${operation.name}: (${
      omitRequest ? '' : `request: ${requestClassName}`
    }): Promise<${returnType}> => {
      return new ${resolverClassName}(${operationVarName}, this.baseUrl, this.core).fetch(${
      omitRequest ? '{}' : 'request'
    });
    },
`;
  }

  bodyOutput += `
  };
`;
}

const output = `
// CAUTION: This file is automatically generated. Do not edit it manually!
import { ${[...sourcePackageImports].join(', ')} } from '${sourcePackageName}';
import { ${[...apiUtilsPackageImports].join(', ')} } from '@moralisweb3/api-utils';
import { ApiModule, ${[...corePackageImports].join(', ')} } from '@moralisweb3/common-core';
export abstract class ${outputClassName} extends ApiModule {
  ${bodyOutput}
}
`;

fs.writeFileSync(outputFilePath, output);
