import { ref } from 'vue'
import { createPinia } from 'pinia'
import { useGlobalStore } from '@/modules/globalStore'
import { useStatusStore } from '@/modules/statusStore'
import { useConfigStore } from '@/modules/configStore'
import { logInfo } from '@mp-se/espframework-ui-components'

const piniaInstance = createPinia()

export default piniaInstance

const config = useConfigStore(piniaInstance)
const global = useGlobalStore(piniaInstance)
const status = useStatusStore(piniaInstance)

export { global, status, config }

const configCompare = ref(null)

const deepClone = (obj, visited = new WeakMap()) => {
  if (obj === null || typeof obj !== 'object') return obj
  if (visited.has(obj)) return obj // Circular reference, return as is or handle differently
  if (obj instanceof Array) {
    visited.set(obj, true)
    return obj.map((item) => deepClone(item, visited))
  }
  if (obj instanceof Object) {
    visited.set(obj, true)
    const cloned = {}
    for (const key in obj) {
      cloned[key] = deepClone(obj[key], visited)
    }
    return cloned
  }
  return obj
}

const deepEqual = (a, b) => {
  return JSON.stringify(a) === JSON.stringify(b)
}

const saveConfigState = () => {
  logInfo('pinia.saveConfigState()', 'Saving state')

  configCompare.value = deepClone(config.$state)

  logInfo('pinia.saveConfigState()', 'Saved state: ', configCompare.value)
  global.configChanged = false
}

const getConfigChanges = () => {
  var changes = {}

  if (configCompare.value === null) {
    logInfo('pinia.getConfigChanges()', 'configState not saved')
    return changes
  }

  for (var key in configCompare.value) {
    if (!deepEqual(configCompare.value[key], config.$state[key])) {
      changes[key] = config.$state[key]
    }
  }

  return changes
}

config.$subscribe(() => {
  if (!global.initialized) return

  var changes = getConfigChanges()
  logInfo('pinia.subscribe()', 'State change on configStore', changes)

  if (JSON.stringify(changes).length > 2) {
    global.configChanged = true
    logInfo('pinia.subscribe()', 'Changed properties:', changes)
  } else {
    global.configChanged = false
  }
})

export { saveConfigState, getConfigChanges }
