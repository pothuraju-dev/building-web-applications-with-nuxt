import { shallowMount } from '@vue/test-utils'
import WeatherWindDirection from '~/components/weather/WindDirection.vue'

describe('WeatherWindDirection', () => {
  it('renders without crashing', (): void => {
    const wrapper = shallowMount(WeatherWindDirection, {
      props: {
        degress: 90,
      },
    })
    expect(wrapper).toBeTruthy()
  })
  it('renders the indicator with the correct wind direction', (): void => {
    const wrapper = shallowMount(WeatherWindDirection, {
      props: {
        degress: 90,
      },
    });
    const direction = wrapper.find("[data-testid=direction]");
    expect(direction.attributes("style")).toContain("rotate(90deg)");
    expect(direction.html()).toContain("⬇")
  })
  it("renders the correct wind direction for screen readers", (): void => {
    const wrapper = shallowMount(WeatherWindDirection, {
        props:{
            degress: 270
        }
    });
    const srOnly = wrapper.find("[data-testid=direction-sr]");
    expect(srOnly.classes()).toContain('sr-only');
    expect(srOnly.html()).toContain("Wind direction: 270 degress")
  })
})
