import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

import piniaInstance from './modules/pinia.js'
app.use(piniaInstance)

import router from './modules/router.js'
app.use(router)

import {
  BsMessage,
  BsCard,
  BsFileUpload,
  BsProgress,
  BsInputBase,
  BsInputText,
  BsInputReadonly,
  BsSelect,
  BsInputTextArea,
  BsInputNumber,
  BsInputSwitch,
  BsInputRadio,
  BsDropdown,
  BsModal,
  BsModalConfirm,
  BsInputTextAreaFormat,
  BsMenuBar,
  BsFooter,
  IconHome,
  IconTools,
  IconGraphUpArrow,
  IconCloudUpArrow,
  IconUpArrow,
  IconCpu,
  IconWifi,
  IconEye,
  IconEyeSlash,
  IconCheckCircle,
  IconXCircle,
  IconExclamationTriangle,
  IconInfoCircle
} from '@mp-se/espframework-ui-components'

// Register Bootstrap components
app.component('BsMessage', BsMessage)
app.component('BsCard', BsCard)
app.component('BsFileUpload', BsFileUpload)
app.component('BsProgress', BsProgress)
app.component('BsInputBase', BsInputBase)
app.component('BsInputText', BsInputText)
app.component('BsInputReadonly', BsInputReadonly)
app.component('BsSelect', BsSelect)
app.component('BsInputTextArea', BsInputTextArea)
app.component('BsInputNumber', BsInputNumber)
app.component('BsInputSwitch', BsInputSwitch)
app.component('BsInputRadio', BsInputRadio)
app.component('BsDropdown', BsDropdown)
app.component('BsModal', BsModal)
app.component('BsModalConfirm', BsModalConfirm)
app.component('BsInputTextAreaFormat', BsInputTextAreaFormat)
app.component('BsMenuBar', BsMenuBar)
app.component('BsFooter', BsFooter)

// Register Icon components
app.component('IconHome', IconHome)
app.component('IconTools', IconTools)
app.component('IconGraphUpArrow', IconGraphUpArrow)
app.component('IconCloudUpArrow', IconCloudUpArrow)
app.component('IconUpArrow', IconUpArrow)
app.component('IconCpu', IconCpu)
app.component('IconWifi', IconWifi)
app.component('IconEye', IconEye)
app.component('IconEyeSlash', IconEyeSlash)
app.component('IconCheckCircle', IconCheckCircle)
app.component('IconXCircle', IconXCircle)
app.component('IconExclamationTriangle', IconExclamationTriangle)
app.component('IconInfoCircle', IconInfoCircle)

// Local components
import BsModalSelect from '@/components/BsModalSelect.vue'
import AdvancedFilesFragment from '@/fragments/AdvancedFilesFragment.vue'
import EnableCorsFragment from '@/fragments/EnableCorsFragment.vue'
import ListFilesFragment from '@/fragments/ListFilesFragment.vue'
import VoltageFragment from '@/fragments/VoltageFragment.vue'

app.component('BsModalSelect', BsModalSelect)
app.component('AdvancedFilesFragment', AdvancedFilesFragment)
app.component('EnableCorsFragment', EnableCorsFragment)
app.component('ListFilesFragment', ListFilesFragment)
app.component('VoltageFragment', VoltageFragment)

import 'bootstrap/dist/css/bootstrap.css'

app.mount('#app')

//import '@popperjs/core/dist/umd/popper.min.js'
import 'bootstrap/dist/js/bootstrap.bundle.js'
//import 'chartjs/chart.js'
