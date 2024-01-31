import { vi } from 'vitest'
import { mount, shallowMount, flushPromises } from '@vue/test-utils'
import ReportVue from '~/components/weather/Report.vue'

describe('ReportVue', () => {
  it('should render the component without crashing', (): void => {
    global.fetch = vi.fn() as any
    const wrapper = shallowMount<ReportVue>(ReportVue, {
      props: {
        coords: {
          latitude: 0,
          longitude: 0,
        },
      },
    })
    expect(wrapper).toBeTruthy()
  })
  it('display loading message when data is undefined', (): void => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(),
      })
    ) as any
    const wrapper = shallowMount(ReportVue, {
      props: {
        coords: {
          latitude: 0,
          longitude: 0,
        },
      },
    })
    expect(wrapper.text()).toContain('Loading...')
  })
  it('displays weather data when data is defined', async () => {
    const mockData = {
      current:{condition:{text:"Andhra Pradesh"}}
    }
    global.fetch = vi.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockData),
      })
    ) as any
    const wrapper = mount(ReportVue, {
      props: {
        coords: {
          latitude: 0,
          longitude: 0,
        },
      },
    })
    await flushPromises()
    expect(wrapper.text()).toContain(mockData.current.condition.text)
    // expect(wrapper.text()).toContain(mockData.current.temp_c)
    // expect(wrapper.text()).toContain(mockData.location.name)
    // expect(wrapper.text()).toContain(mockData.location.region)
    // expect(wrapper.text()).toContain(mockData.current.wind_kph)
    // expect(wrapper.text()).toContain(mockData.current.wind_degree)
  })
  it('displays formats the datetime to a locale format', async () => {
    const mockDateTime = new Date(2000, 12, 31, 11, 45, 0, 0)
    vi.setSystemTime(mockDateTime)
    const mockData = {
      location: {
        localtime: new Date(),
      },
      current: {
        condition: {},
      },
    }
    global.fetch = vi.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockData),
      })
    ) as any
    const wrapper = mount(ReportVue, {
      props: {
        coords: {
          latitude: 0,
          longitude: 0,
        },
      },
    })
    await flushPromises()
    const localtime = wrapper.find('[data-testid=localtime]')
    expect(localtime.text()).toEqual('February 1, 2024 at 2:28 AM')
    vi.useRealTimers()
  })
})
