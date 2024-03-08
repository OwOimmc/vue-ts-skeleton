import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import vh1 from '../core/vh1.vue'

describe('h1', () => {
  it('renders properly', () => {
    const wrapper = mount(vh1, { slots: { default: 'Home' } })
    expect(wrapper.text()).toContain('Home')
  })
})
