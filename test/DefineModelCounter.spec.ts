import { describe, it, expect } from "vitest";
import { shallowMount } from '@vue/test-utils';
import DefineModelCounterVue from "~/components/DefineModelCounter.vue";

describe('DefineModelCounterVue', (): void => {
  it('increments the counter when Increase button is clicked', async () => {
    const wrapper = shallowMount(DefineModelCounterVue);

    await wrapper.find('.bg-green-600').trigger('click');

    expect(wrapper.vm.model).toBe(1);
  });

  it('decrements the counter when Decrease button is clicked', async () => {
    const wrapper = shallowMount(DefineModelCounterVue, { props: { modelValue: 7 } });

    await wrapper.find('.bg-red-600').trigger('click');

    expect(wrapper.vm.model).toBe(6);
  });

  it('does not allow counter to go below zero', async () => {
    const wrapper = shallowMount(DefineModelCounterVue, { props: { modelValue: 0 } });

    await wrapper.find('.bg-red-600').trigger('click');

    expect(wrapper.vm.model).toBe(0);
  });

  it('correctly displays the Increase button', () => {
    const wrapper = shallowMount(DefineModelCounterVue);

    const increaseButton = wrapper.find('.bg-green-600');

    expect(increaseButton.exists()).toBe(true);
    expect(increaseButton.text()).toContain('Increase');
  });

  it('correctly displays the Decrease button', () => {
    const wrapper = shallowMount(DefineModelCounterVue);

    const decreaseButton = wrapper.find('.bg-red-600');

    expect(decreaseButton.exists()).toBe(true);
    expect(decreaseButton.text()).toContain('Decrease');
  });
});
