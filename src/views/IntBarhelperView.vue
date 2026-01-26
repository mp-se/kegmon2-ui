<template>
  <div class="container">
    <p></p>
    <p class="h3">Integration - Barhelper</p>
    <hr />

    <form @submit.prevent="save" class="needs-validation" novalidate>
      <div class="row">
        <div class="col-md-12">
          <BsInputText
            v-model="config.barhelper_apikey"
            type="password"
            maxlength="120"
            label="API Key"
            :disabled="global.disabled"
          />
        </div>
        <div class="col-md-12" v-for="(monitor, index) in config.barhelper_monitors" :key="index">
          <BsInputText
            v-model="config.barhelper_monitors[index]"
            maxlength="30"
            :label="`Monitor tap ${index + 1}`"
            :disabled="global.disabled"
          />
        </div>
      </div>
      <div class="row gy-2">
        <div class="col-md-12">
          <hr />
        </div>
        <div class="col-md-12">
          <button
            type="submit"
            class="btn btn-primary w-2"
            :disabled="global.disabled || !global.configChanged"
          >
            <span
              class="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
              :hidden="!global.disabled"
            ></span>
            &nbsp;Save
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup>
import { validateCurrentForm } from '@mp-se/espframework-ui-components'
import { global, config } from '@/modules/pinia'

const save = () => {
  if (!validateCurrentForm()) return

  config.saveAll()
}
</script>
