import { createMachine, guards } from "@zag-js/core"
import { clickIfLink } from "@zag-js/dom-event"
import { nextTick, raf } from "@zag-js/dom-query"
import { trackElementRect } from "@zag-js/element-rect"
import { getFocusables } from "@zag-js/tabbable"
import { compact, isEqual } from "@zag-js/utils"
import { dom } from "./tabs.dom"
import type { MachineContext, MachineState, UserDefinedContext } from "./tabs.types"

const { not } = guards

export function machine(userContext: UserDefinedContext) {
  const ctx = compact(userContext)
  return createMachine<MachineContext, MachineState>(
    {
      initial: "idle",

      context: {
        dir: "ltr",
        orientation: "horizontal",
        activationMode: "automatic",
        value: null,
        indicatorRect: { left: "0px", top: "0px", width: "0px", height: "0px" },
        loopFocus: true,
        ...ctx,
        focusedValue: null,
        canIndicatorTransition: false,
        isIndicatorRendered: false,
      },

      entry: ["checkRenderedElements", "syncIndicatorRect", "setContentTabIndex"],

      exit: ["cleanupObserver"],

      watch: {
        value: ["enableIndicatorTransition", "syncIndicatorRect", "setContentTabIndex", "clickIfLink"],
        dir: ["syncIndicatorRect"],
        orientation: ["syncIndicatorRect"],
      },

      on: {
        SET_VALUE: {
          actions: "setValue",
        },
        CLEAR_VALUE: {
          actions: "clearValue",
        },
        SET_INDICATOR_RECT: {
          actions: "setIndicatorRect",
        },
      },

      states: {
        idle: {
          on: {
            TAB_FOCUS: {
              target: "focused",
              actions: "setFocusedValue",
            },
            TAB_CLICK: {
              target: "focused",
              actions: ["setFocusedValue", "setValue"],
            },
          },
        },
        focused: {
          on: {
            TAB_CLICK: {
              target: "focused",
              actions: ["setFocusedValue", "setValue"],
            },
            ARROW_PREV: [
              {
                guard: "selectOnFocus",
                actions: ["focusPrevTab", "selectFocusedTab"],
              },
              {
                actions: "focusPrevTab",
              },
            ],
            ARROW_NEXT: [
              {
                guard: "selectOnFocus",
                actions: ["focusNextTab", "selectFocusedTab"],
              },
              {
                actions: "focusNextTab",
              },
            ],
            HOME: [
              {
                guard: "selectOnFocus",
                actions: ["focusFirstTab", "selectFocusedTab"],
              },
              {
                actions: "focusFirstTab",
              },
            ],
            END: [
              {
                guard: "selectOnFocus",
                actions: ["focusLastTab", "selectFocusedTab"],
              },
              {
                actions: "focusLastTab",
              },
            ],
            ENTER: {
              guard: not("selectOnFocus"),
              actions: "selectFocusedTab",
            },
            TAB_FOCUS: {
              actions: ["setFocusedValue"],
            },
            TAB_BLUR: {
              target: "idle",
              actions: "clearFocusedValue",
            },
          },
        },
      },
    },
    {
      guards: {
        selectOnFocus: (ctx) => ctx.activationMode === "automatic",
      },

      actions: {
        selectFocusedTab(ctx) {
          raf(() => {
            set.value(ctx, ctx.focusedValue)
          })
        },
        setFocusedValue(ctx, evt) {
          set.focusedValue(ctx, evt.value)
        },
        clearFocusedValue(ctx) {
          set.focusedValue(ctx, null)
        },
        setValue(ctx, evt) {
          set.value(ctx, evt.value)
        },
        clearValue(ctx) {
          set.value(ctx, null)
        },
        focusFirstTab(ctx) {
          raf(() => dom.getFirstEl(ctx)?.focus())
        },
        focusLastTab(ctx) {
          raf(() => dom.getLastEl(ctx)?.focus())
        },
        focusNextTab(ctx) {
          if (!ctx.focusedValue) return
          const next = dom.getNextEl(ctx, ctx.focusedValue)
          raf(() => next?.focus())
        },
        focusPrevTab(ctx) {
          if (!ctx.focusedValue) return
          const prev = dom.getPrevEl(ctx, ctx.focusedValue)
          raf(() => prev?.focus())
        },
        checkRenderedElements(ctx) {
          ctx.isIndicatorRendered = !!dom.getIndicatorEl(ctx)
        },
        // if tab panel contains focusable elements, remove the tabindex attribute
        setContentTabIndex(ctx) {
          raf(() => {
            const panel = dom.getActiveContentEl(ctx)
            if (!panel) return
            const focusables = getFocusables(panel)
            if (focusables.length > 0) {
              panel.removeAttribute("tabindex")
            } else {
              panel.setAttribute("tabindex", "0")
            }
          })
        },
        cleanupObserver(ctx) {
          ctx.indicatorCleanup?.()
        },
        enableIndicatorTransition(ctx) {
          ctx.canIndicatorTransition = true
        },
        setIndicatorRect(ctx, evt) {
          const value = evt.id ?? ctx.value
          if (!ctx.isIndicatorRendered || !value) return

          const tabEl = dom.getTriggerEl(ctx, value)
          if (!tabEl) return

          ctx.indicatorRect = dom.getRectById(ctx, value)
          nextTick(() => {
            ctx.canIndicatorTransition = false
          })
        },
        syncIndicatorRect(ctx) {
          ctx.indicatorCleanup?.()

          const value = ctx.value
          if (!ctx.isIndicatorRendered || !value) return

          const tabEl = dom.getActiveTabEl(ctx)
          if (!tabEl) return

          ctx.indicatorCleanup = trackElementRect(tabEl, {
            getRect(el) {
              return dom.getOffsetRect(el)
            },
            onChange(rect) {
              ctx.indicatorRect = dom.resolveRect(rect)
              nextTick(() => {
                ctx.canIndicatorTransition = false
              })
            },
          })
        },
        clickIfLink(ctx) {
          clickIfLink(dom.getActiveTabEl(ctx))
        },
      },
    },
  )
}

const invoke = {
  change: (ctx: MachineContext) => {
    if (ctx.value == null) return
    ctx.onValueChange?.({ value: ctx.value })
  },
  focusChange: (ctx: MachineContext) => {
    if (ctx.focusedValue == null) return
    ctx.onFocusChange?.({ focusedValue: ctx.focusedValue })
  },
}

const set = {
  value: (ctx: MachineContext, value: string | null) => {
    if (isEqual(value, ctx.value)) return
    ctx.value = value
    invoke.change(ctx)
  },
  focusedValue: (ctx: MachineContext, value: string | null) => {
    if (isEqual(value, ctx.focusedValue)) return
    ctx.focusedValue = value
    invoke.focusChange(ctx)
  },
}
