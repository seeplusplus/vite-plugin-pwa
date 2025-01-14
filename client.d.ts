declare module 'virtual:pwa-register' {
  export interface RegisterSWOptions {
    immediate?: boolean
    onNeedRefresh?: () => void
    onOfflineReady?: () => void
    /**
     * Called only if `onRegisteredSW` is not provided.
     *
     * @deprecated Use `onRegisteredSW` instead.
     * @param registration The service worker registration if available.
     */
    onRegistered?: (registration: ServiceWorkerRegistration | undefined) => void
    /**
     * Called once the service worker is registered (requires version `0.12.8+`).
     *
     * @param swScriptUrl The service worker script url.
     * @param registration The service worker registration if available.
     */
    onRegisteredSW?: (swScriptUrl: string, registration: ServiceWorkerRegistration | undefined) => void
    onRegisterError?: (error: any) => void
  }

  /**
   * Registers the service worker returning a callback to reload the current page when an update is found.
   *
   * @param options the options to register the service worker.
   * @return (reloadPage?: boolean) => Promise<void> From version 0.13.2+ `reloadPage` param is not used anymore.
   */
  export function registerSW(options?: RegisterSWOptions): (reloadPage?: boolean) => Promise<void>
}

declare module 'virtual:pwa-register/vue' {
  // eslint-disable-next-line @typescript-eslint/prefer-ts-expect-error
  // @ts-ignore ignore when vue is not installed
  import type { Ref } from 'vue'

  export interface RegisterSWOptions {
    immediate?: boolean
    onNeedRefresh?: () => void
    onOfflineReady?: () => void
    /**
     * Called only if `onRegisteredSW` is not provided.
     *
     * @deprecated Use `onRegisteredSW` instead.
     * @param registration The service worker registration if available.
     */
    onRegistered?: (registration: ServiceWorkerRegistration | undefined) => void
    /**
     * Called once the service worker is registered (requires version `0.12.8+`).
     *
     * @param swScriptUrl The service worker script url.
     * @param registration The service worker registration if available.
     */
    onRegisteredSW?: (swScriptUrl: string, registration: ServiceWorkerRegistration | undefined) => void
    onRegisterError?: (error: any) => void
  }

  export function useRegisterSW(options?: RegisterSWOptions): {
    needRefresh: Ref<boolean>
    offlineReady: Ref<boolean>
    /**
     * Reloads the current window to allow the service worker take the control.
     *
     * @param reloadPage From version 0.13.2+ this param is not used anymore.
     */
    updateServiceWorker: (reloadPage?: boolean) => Promise<void>
  }
}

declare module 'virtual:pwa-register/svelte' {
  // eslint-disable-next-line @typescript-eslint/prefer-ts-expect-error
  // @ts-ignore ignore when svelte is not installed
  import type { Writable } from 'svelte/store'

  export interface RegisterSWOptions {
    immediate?: boolean
    onNeedRefresh?: () => void
    onOfflineReady?: () => void
    /**
     * Called only if `onRegisteredSW` is not provided.
     *
     * @deprecated Use `onRegisteredSW` instead.
     * @param registration The service worker registration if available.
     */
    onRegistered?: (registration: ServiceWorkerRegistration | undefined) => void
    /**
     * Called once the service worker is registered (requires version `0.12.8+`).
     *
     * @param swScriptUrl The service worker script url.
     * @param registration The service worker registration if available.
     */
    onRegisteredSW?: (swScriptUrl: string, registration: ServiceWorkerRegistration | undefined) => void
    onRegisterError?: (error: any) => void
  }

  export function useRegisterSW(options?: RegisterSWOptions): {
    needRefresh: Writable<boolean>
    offlineReady: Writable<boolean>
    /**
     * Reloads the current window to allow the service worker take the control.
     *
     * @param reloadPage From version 0.13.2+ this param is not used anymore.
     */
    updateServiceWorker: (reloadPage?: boolean) => Promise<void>
  }
}

declare module 'virtual:pwa-register/react' {
  // eslint-disable-next-line @typescript-eslint/prefer-ts-expect-error
  // @ts-ignore ignore when react is not installed
  import type { Dispatch, SetStateAction } from 'react'

  export interface RegisterSWOptions {
    immediate?: boolean
    onNeedRefresh?: () => void
    onOfflineReady?: () => void
    /**
     * Called only if `onRegisteredSW` is not provided.
     *
     * @deprecated Use `onRegisteredSW` instead.
     * @param registration The service worker registration if available.
     */
    onRegistered?: (registration: ServiceWorkerRegistration | undefined) => void
    /**
     * Called once the service worker is registered (requires version `0.12.8+`).
     *
     * @param swScriptUrl The service worker script url.
     * @param registration The service worker registration if available.
     */
    onRegisteredSW?: (swScriptUrl: string, registration: ServiceWorkerRegistration | undefined) => void
    onRegisterError?: (error: any) => void
  }

  export function useRegisterSW(options?: RegisterSWOptions): {
    needRefresh: [boolean, Dispatch<SetStateAction<boolean>>]
    offlineReady: [boolean, Dispatch<SetStateAction<boolean>>]
    /**
     * Reloads the current window to allow the service worker take the control.
     *
     * @param reloadPage From version 0.13.2+ this param is not used anymore.
     */
    updateServiceWorker: (reloadPage?: boolean) => Promise<void>
  }
}

declare module 'virtual:pwa-register/solid' {
  // eslint-disable-next-line @typescript-eslint/prefer-ts-expect-error
  // @ts-ignore ignore when solid-js is not installed
  import type { Accessor, Setter } from 'solid-js'

  export interface RegisterSWOptions {
    immediate?: boolean
    onNeedRefresh?: () => void
    onOfflineReady?: () => void
    /**
     * Called only if `onRegisteredSW` is not provided.
     *
     * @deprecated Use `onRegisteredSW` instead.
     * @param registration The service worker registration if available.
     */
    onRegistered?: (registration: ServiceWorkerRegistration | undefined) => void
    /**
     * Called once the service worker is registered (requires version `0.12.8+`).
     *
     * @param swScriptUrl The service worker script url.
     * @param registration The service worker registration if available.
     */
    onRegisteredSW?: (swScriptUrl: string, registration: ServiceWorkerRegistration | undefined) => void
    onRegisterError?: (error: any) => void
  }

  export function useRegisterSW(options?: RegisterSWOptions): {
    needRefresh: [Accessor<boolean>, Setter<boolean>]
    offlineReady: [Accessor<boolean>, Setter<boolean>]
    /**
     * Reloads the current window to allow the service worker take the control.
     *
     * @param reloadPage From version 0.13.2+ this param is not used anymore.
     */
    updateServiceWorker: (reloadPage?: boolean) => Promise<void>
  }
}

declare module 'virtual:pwa-register/preact' {
  // eslint-disable-next-line @typescript-eslint/prefer-ts-expect-error
  // @ts-ignore ignore when preact/hooks is not installed
  import type { StateUpdater } from 'preact/hooks'

  export interface RegisterSWOptions {
    immediate?: boolean
    onNeedRefresh?: () => void
    onOfflineReady?: () => void
    /**
     * Called only if `onRegisteredSW` is not provided.
     *
     * @deprecated Use `onRegisteredSW` instead.
     * @param registration The service worker registration if available.
     */
    onRegistered?: (registration: ServiceWorkerRegistration | undefined) => void
    /**
     * Called once the service worker is registered (requires version `0.12.8+`).
     *
     * @param swScriptUrl The service worker script url.
     * @param registration The service worker registration if available.
     */
    onRegisteredSW?: (swScriptUrl: string, registration: ServiceWorkerRegistration | undefined) => void
    onRegisterError?: (error: any) => void
  }

  export function useRegisterSW(options?: RegisterSWOptions): {
    needRefresh: [boolean, StateUpdater<boolean>]
    offlineReady: [boolean, StateUpdater<boolean>]
    /**
     * Reloads the current window to allow the service worker take the control.
     *
     * @param reloadPage From version 0.13.2+ this param is not used anymore.
     */
    updateServiceWorker: (reloadPage?: boolean) => Promise<void>
  }
}
