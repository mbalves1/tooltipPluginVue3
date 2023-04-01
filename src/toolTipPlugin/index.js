import { defineAsyncComponent } from "vue";
import { defu } from "defu";
export const tooltipOptionsInject = Symbol();

export function toolTipPlugin(app, options) {

  options = defu(options, {
    arrow: false,
    interactive: true,
    duration: 3000,
    ...options
  })

  app.provide(tooltipOptionsInject, options)
  app.component(
    "TooltipPlugin",
    defineAsyncComponent(() => import("./TooltipPlugin.vue")))
}
