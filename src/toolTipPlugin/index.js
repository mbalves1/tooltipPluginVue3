import { defineAsyncComponent } from "vue";

export function toolTipPlugin(app, options) {
  app.component(
    "TooltipPlugin",
    defineAsyncComponent(() => import("./TooltipPlugin.vue")))
  console.log(options);
}
