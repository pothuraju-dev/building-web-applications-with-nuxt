<template>
  <div>
    <GistCore :gist-div="gistData" />
  </div>
</template>
<script setup lang="ts">
var gistURL = 'https://gist.github.com/'
var data = ref()

const props = defineProps<{ id: string; file: string }>()
const gistData = ref('loading...')

const getGistData = async () => {
  if (props.file?.length > 0) {
    data.value.file = props.file
  }

  try {
    const response = await window.$fetch(gistURL + props.id + '.json', {
      data: data.value,
      dataType: 'jsonp',
      timeout: 20000,
    })
    gistData.value = response.div
  } catch (error) {
    console.error('error', error)
  }
}

onMounted(async () => {
  await getGistData()
})
</script>
<style scoped>
@import url('https://github.githubassets.com/assets/gist-embed-4ac6018bcc05457cde2f66d2e7299d11.css');
</style>
