import { defineAsyncComponent } from "vue";
import { defu } from "defu";
import { hideAll } from "tippy.js"

export const tooltipOptionsInject = Symbol();

export function toolTipPlugin(app, options) {

  options = defu(options, {
    arrow: false,
    interactive: true,
    duration: 3000,
    ...options
  })

  app.config.globalProperties.$hideAllTooltips = hideAll

  app.provide(tooltipOptionsInject, options)
  app.component(
    "TooltipPlugin",
    defineAsyncComponent(() => import("./TooltipPlugin.vue")))
}
