/* eslint-disable */

import * as sdk from "hypertune";

export const queryCode = `query FullQuery{root{test exampleFlag}}`;

export const query: sdk.Query<sdk.ObjectValueWithVariables> = {"variableDefinitions":{},"fragmentDefinitions":{},"fieldQuery":{"Query":{"type":"InlineFragment","objectTypeName":"Query","selection":{"root":{"fieldArguments":{"__isPartialObject__":true},"fieldQuery":{"Root":{"type":"InlineFragment","objectTypeName":"Root","selection":{"test":{"fieldArguments":{},"fieldQuery":null},"exampleFlag":{"fieldArguments":{},"fieldQuery":null}}}}}}}}};

export const initData = {"commitId":19151,"hash":"8583753002240367","reducedExpression":{"id":"4cmrVZ7gmP7cQUXSyil6V","logs":{},"type":"ObjectExpression","fields":{"root":{"id":"p75oIfghy517QKWcPUlB1","body":{"id":"efsCvfq0oaArjAx_CQ3qF","logs":{},"type":"ObjectExpression","fields":{"test":{"id":"wO0nzrm_i_KfVsVQIj17U","type":"BooleanExpression","value":true,"valueType":{"type":"BooleanValueType"},"logs":{"evaluations":{"c8EbrBZoww0glEA3r4hHi":1,"RgEsXrAmtQk_o2GIaPDZy":1,"pk_cazPsQ5RDDacfC-tqJ":1}}},"exampleFlag":{"id":"OZeMibLHPWNDYNouilyYc","logs":{"evaluations":{"cN-TSxQ1UHTEpnZwd1RQt":1}},"type":"SwitchExpression","cases":[{"id":"R8WNfrIeMP1KEE2n8Vzr1","when":{"a":{"id":"ojxwSLfDcmPnvyYtFo9O6","logs":{},"type":"GetFieldExpression","object":{"id":"bBc68NqffeX5GysazApXb","logs":{},"type":"VariableExpression","valueType":{"type":"ObjectValueType","objectTypeName":"Query_root_args"},"variableId":"d7xvtNWcJynsxjcV8aLk2"},"fieldPath":"context > environment","valueType":{"type":"EnumValueType","enumTypeName":"Environment"}},"b":{"id":"_agWRFFyNgE74nXFxGZGV","logs":{},"type":"ListExpression","items":[{"id":"bamtJ7m4H7_kNREfGZKr0","logs":{},"type":"EnumExpression","value":"development","valueType":{"type":"EnumValueType","enumTypeName":"Environment"}}],"valueType":{"type":"ListValueType","itemValueType":{"type":"EnumValueType","enumTypeName":"Environment"}}},"id":"LZYXRB3kISNGY-8PYup4V","logs":{},"type":"ComparisonExpression","operator":"in","valueType":{"type":"BooleanValueType"}},"then":{"id":"Pl25nSTgnUY9fSVjnBIuB","logs":{},"type":"BooleanExpression","value":true,"valueType":{"type":"BooleanValueType"}}},{"id":"HkQ82oreQczxOHefkdge9","when":{"a":{"id":"PHyjXvYQV9wP7qmiDI2RM","logs":{},"type":"GetFieldExpression","object":{"id":"3d1KXn8ANVEdSuhosepi6","logs":{},"type":"VariableExpression","valueType":{"type":"ObjectValueType","objectTypeName":"Query_root_args"},"variableId":"d7xvtNWcJynsxjcV8aLk2"},"fieldPath":"context > user > id","valueType":{"type":"StringValueType"}},"b":{"id":"gWY2nDOyhA26fEovEBtEa","logs":{},"type":"ListExpression","items":[{"id":"QK38Y-ikgiXExMzN5E8F8","logs":{},"type":"StringExpression","value":"user_123","valueType":{"type":"StringValueType"}},{"id":"AMSyKePv7cmXt5x4zmfYH","logs":{},"type":"StringExpression","value":"user_456","valueType":{"type":"StringValueType"}}],"valueType":{"type":"ListValueType","itemValueType":{"type":"StringValueType"}}},"id":"g94EpMhZD0nUsXixuo1G_","logs":{},"type":"ComparisonExpression","operator":"in","valueType":{"type":"BooleanValueType"}},"then":{"id":"Oye-AL1JIj54LnoIAF5E4","logs":{},"type":"BooleanExpression","value":true,"valueType":{"type":"BooleanValueType"}}}],"control":{"id":"Y5psBexZCFa3NORYB9D6l","logs":{},"type":"BooleanExpression","value":true,"valueType":{"type":"BooleanValueType"}},"default":{"id":"DqJRaz55Xs3AjXDQMv5Gj","logs":{},"type":"BooleanExpression","value":false,"valueType":{"type":"BooleanValueType"}},"valueType":{"type":"BooleanValueType"}}},"valueType":{"type":"ObjectValueType","objectTypeName":"Root"},"objectTypeName":"Root"},"logs":{},"type":"FunctionExpression","valueType":{"type":"FunctionValueType","returnValueType":{"type":"ObjectValueType","objectTypeName":"Root"},"parameterValueTypes":[{"type":"ObjectValueType","objectTypeName":"Query_root_args"}]},"parameters":[{"id":"d7xvtNWcJynsxjcV8aLk2","name":"rootArgs"}]}},"metadata":{"permissions":{"user":{},"group":{"team":{"write":"allow"}}}},"valueType":{"type":"ObjectValueType","objectTypeName":"Query"},"objectTypeName":"Query"},"splits":{},"commitConfig":{"splitConfig":{}}}
  
/**
 * @deprecated use '@vercel/flags/providers/hypertune' package instead.
 */
export const vercelFlagDefinitions = {"test":{"options":[{"label":"Off","value":false},{"label":"On","value":true}],"origin":"https://app.hypertune.com/projects/4088/main/draft/logic?selected_field_path=root%3Etest"},"exampleFlag":{"options":[{"label":"Off","value":false},{"label":"On","value":true}],"origin":"https://app.hypertune.com/projects/4088/main/draft/logic?selected_field_path=root%3EexampleFlag"}};

export type FlagValues = {
  "test": boolean;
  "exampleFlag": boolean;
}

export type FlagPaths = keyof FlagValues & string;

export const flagFallbacks: FlagValues = {
  "test": false,
  "exampleFlag": false,
}

export function decodeFlagValues<TFlagPaths extends keyof FlagValues & string>(
  encodedValues: string,
  flagPaths: TFlagPaths[]
): Pick<FlagValues, TFlagPaths> {
  return sdk.decodeFlagValues({ flagPaths, encodedValues })
}

export type Rec = {

}

export type Rec3 = {
  id: string;
  name: string;
  email: string;
}

export const EnvironmentEnumValues = [
  "development",
  "production",
  "test"
] as const;
export type Environment = typeof EnvironmentEnumValues[number];

/**
 * This `Context` input type is used for the `context` argument on your root field.
 * It contains details of the current `user` and `environment`.
 * 
 * You can define other custom input types with fields that are primitives, enums 
 * or other input types.
 */
export type Rec2 = {
  user: Rec3;
  environment: Environment;
}

export type RootArgs = {
  context: Rec2;
}

export type Root = {
  test: boolean;
  exampleFlag: boolean;
}

const rootFallback = {test:false,exampleFlag:false};

export class RootNode extends sdk.Node {
  override typeName = "Root" as const;

  getRootArgs(): RootArgs {
    const { step } = this.props;
    return (step?.type === 'GetFieldStep' ? step.fieldArguments : {}) as RootArgs;
  }

  get({ fallback = rootFallback as Root}: { fallback?: Root } = {}): Root {
    const getQuery = null;
    return this.getValue({ query: getQuery, fallback }) as Root;
  }

  /**
   * [Open in Hypertune UI]({@link https://app.hypertune.com/projects/4088/main/draft/logic?selected_field_path=root%3Etest})
   */
  test({ args = {}, fallback }: { args?: Rec; fallback: boolean; }): boolean {
    const props0 = this.getFieldNodeProps("test", { fieldArguments: args });
    const expression0 = props0.expression;

    if (
      expression0 &&
      expression0.type === "BooleanExpression"
    ) {
      const node = new sdk.BooleanNode(props0);
      return node.get({ fallback });
    }

    const node = new sdk.BooleanNode(props0);
    node._logUnexpectedTypeError();
    return node.get({ fallback });
  }

  /**
   * [Open in Hypertune UI]({@link https://app.hypertune.com/projects/4088/main/draft/logic?selected_field_path=root%3EexampleFlag})
   */
  exampleFlag({ args = {}, fallback }: { args?: Rec; fallback: boolean; }): boolean {
    const props0 = this.getFieldNodeProps("exampleFlag", { fieldArguments: args });
    const expression0 = props0.expression;

    if (
      expression0 &&
      expression0.type === "BooleanExpression"
    ) {
      const node = new sdk.BooleanNode(props0);
      return node.get({ fallback });
    }

    const node = new sdk.BooleanNode(props0);
    node._logUnexpectedTypeError();
    return node.get({ fallback });
  }
}

/**
 * This is your project schema expressed in GraphQL.
 * 
 * Define `Boolean` fields for feature flags, custom `enum` fields for flags with 
 * more than two states, `Int` fields for numeric flags like timeouts and limits, 
 * `String` fields to manage in-app copy, `Void` fields for analytics events, and 
 * fields with custom object and list types for more complex app configuration, 
 * e.g. to use Hypertune as a CMS.
 * 
 * Once you've changed your schema, set your flag logic in the Logic view.
 */
export type Source = {
  /**
   * You can add arguments to any field in your schema, which you can then use when
   * setting its logic, including the logic of any nested fields. Your root field 
   * already has a `context` argument. Since all flags are nested under the root 
   * field, this context will be available to all of them.
   */
  root: Root;
}

const sourceFallback = {root:{test:false,exampleFlag:false}};

export type Rec5 = {
  args: RootArgs;
}

export type Rec4 = {
  root: Rec5;
}

/**
 * This is your project schema expressed in GraphQL.
 * 
 * Define `Boolean` fields for feature flags, custom `enum` fields for flags with 
 * more than two states, `Int` fields for numeric flags like timeouts and limits, 
 * `String` fields to manage in-app copy, `Void` fields for analytics events, and 
 * fields with custom object and list types for more complex app configuration, 
 * e.g. to use Hypertune as a CMS.
 * 
 * Once you've changed your schema, set your flag logic in the Logic view.
 */
export class SourceNode extends sdk.Node {
  override typeName = "Query" as const;

  get({ args, fallback = sourceFallback as Source}: { args: Rec4; fallback?: Source }): Source {
    const getQuery = sdk.mergeFieldQueryAndArgs(
      query.fragmentDefinitions,
      sdk.getFieldQueryForPath(query.fragmentDefinitions, query.fieldQuery, []), 
      args,
    );
    return this.getValue({ query: getQuery, fallback }) as Source;
  }

  /**
   * You can add arguments to any field in your schema, which you can then use when
   * setting its logic, including the logic of any nested fields. Your root field 
   * already has a `context` argument. Since all flags are nested under the root 
   * field, this context will be available to all of them.
   */
  root({ args }: { args: RootArgs; }): RootNode {
    const props0 = this.getFieldNodeProps("root", { fieldArguments: args });
    const expression0 = props0.expression;

    if (
      expression0 &&
      expression0.type === "ObjectExpression" &&
      expression0.objectTypeName === "Root"
    ) {
      return new RootNode(props0);
    }

    const node = new RootNode(props0);
    node._logUnexpectedTypeError();
    return node;
  }
}

export type VariableValues = Rec;
export type DehydratedState = sdk.DehydratedState<Source, VariableValues>
export type CreateSourceOptions = { 
  token: string; 
  variableValues?: VariableValues;
  override?: sdk.DeepPartial<Source> | null;
} & sdk.CreateOptions

export function createSource({
  token,
  variableValues = {},
  override,
  ...options
}: CreateSourceOptions): SourceNode {
  return sdk.create({
    NodeConstructor: SourceNode,
    token,
    query,
    queryCode,
    variableValues,
    override,
    options: {initData: initData as unknown as sdk.InitData, ...options },
  });
}

export const emptySource = new SourceNode({
  context: null,
  logger: null,
  parent: null,
  step: null,
  expression: null,
});

export function createSourceForServerOnly({
  token,
  variableValues = {},
  override,
  ...options
}: CreateSourceOptions): SourceNode {
  return typeof window === "undefined"
    ? createSource({ token, variableValues, override, ...options })
    : emptySource;
}

/**
 * @deprecated use createSource instead.
 */
export const initHypertune = createSource
/**
 * @deprecated use SourceNode instead.
 */
export type QueryNode = SourceNode;
/**
 * @deprecated use Source instead.
 */
export type Query = Source;
