import Api from '~/api/api';

export default defineNuxtPlugin(() => {
  return {
    provide: { api: new Api() }
  }
})