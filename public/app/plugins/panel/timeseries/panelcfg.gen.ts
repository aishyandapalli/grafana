// Code generated - EDITING IS FUTILE. DO NOT EDIT.
//
// Generated by:
//     public/app/plugins/gen.go
// Using jennies:
//     TSTypesJenny
//     PluginTSTypesJenny
//
// Run 'make gen-cue' from repository root to regenerate.

import * as common from '@grafana/schema';

export interface Options extends common.OptionsWithTimezones {
  legend: common.VizLegendOptions;
  tooltip: TooltipOptions;
}

export interface TooltipOptions extends common.VizTooltipOptions {
  exemplarLabels?: Array<string>;
}

export const defaultTooltipOptions: Partial<TooltipOptions> = {
  exemplarLabels: [],
};

export interface FieldConfig extends common.GraphFieldConfig {}
