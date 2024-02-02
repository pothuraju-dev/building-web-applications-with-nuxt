// dynamicComponentComposable.js
import { createVNode, render } from 'vue'

export default function useDynamicComponent(containerRef: unknown, Component:unknown, props: unknown) {
  const dynamicComponent = shallowRef(null)

  const addComponent = () => {
    // Create a vnode for the dynamic component
    const vnode = createVNode(dynamicComponent.value, props)

    // Mount the vnode to the container
    const container = document.createElement('div')
    render(vnode, container)
    containerRef.value?.appendChild(container)

    // Store the created component in the specified variable
    containerRef.value = container
  }
  dynamicComponent.value = Component

  return {
    addComponent,
  }
}
