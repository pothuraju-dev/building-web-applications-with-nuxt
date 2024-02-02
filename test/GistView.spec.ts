import { describe, it, expect } from 'vitest'
import { mount, shallowMount } from '@vue/test-utils'
import GistView from '~/components/gist/View.vue'

// Mocking the $fetch function for testing purposes
window.$fetch = async (url, options) => {
  // Simulating a successful response
  return { div: '<div>Mocked Gist Data</div>' }
}

describe('GistView', (): void => {
  it('renders loading text initially', () => {
    const wrapper = mount(GistView, {
      props: {
        id: '1a4624a254b0c97c57ef11605a1585b7',
        file: '',
      },
    })

    expect(wrapper.text()).toContain('loading...')
  })

  it('fetches Gist data and renders it correctly', async () => {
    const wrapper = shallowMount(GistView, {
      props: {
        id: '1a4624a254b0c97c57ef11605a1585b7',
        file: '',
      },
    })

    // Simulate asynchronous behavior using Vue.nextTick()
    await wrapper.vm.$nextTick()

    // Verify that the loading text is not present
    expect(wrapper.text()).not.toContain('loading...')

    // Verify that the Gist data is rendered
    expect(wrapper.html()).toContain('<div data-v-277ad20b="">')
  })
})
