import { describe, it, expect } from "vitest";
import {shallowMount } from '@vue/test-utils';
import localWeatherVue from "~/pages/get-started/local-weather.vue";

describe('localWeatherVue', ():void => { 
    it("renders the WeatherGetLocation component", ():void =>{
        const wrapper = shallowMount<localWeatherVue>(localWeatherVue);
        expect(wrapper.findComponent(localWeatherVue).exists()).toBe(true)
    })
 })