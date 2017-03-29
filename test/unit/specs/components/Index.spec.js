import Vue from 'vue'
import Index from '@/components/Index'
import { store } from '../../../../src/store/bulbs'

const Mock = Vue.component("mapping", {
  template: "<div></div>"
})

describe('Index.vue', () => {

  it('should render correct contents', () => {
    const Constructor = Vue.extend(Index)
    const vm = new Constructor({store, components: {Mock}}).$mount()
    expect(vm.$el.querySelector('.header h1').textContent).to.equal('Bulbs')
    expect(vm.$el.querySelector('input.new-bulb').value).to.equal('')
  })

})
