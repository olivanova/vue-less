let interval;
let defaultColor;

const mouseover = (e) => {
  clearInterval(interval);
  e.target.style.color = 'yellow'
}

const mouseout = (e) => {
  console.log(e.target)
  e.target.style.color = defaultColor;
  changeColor(e.target)
}

const changeColor = (el) => {
  console.log('elem:', el)
  let flag = true
  interval = setInterval( () => {
    el.style.color = flag ? '#fff' : defaultColor;
    flag = !flag
  }, 1000)
}

export default {
  mounted(el, binding) {
    defaultColor = binding.value
    el.style[binding.arg] = defaultColor

    if(binding.modifiers.blink) {
      changeColor(el)
    }

    if(binding.modifiers.hover) {
      el.addEventListener('mouseover', mouseover);
      el.addEventListener('mouseout', mouseout);
    }
  },

  updated(el, binding) {
    console.log(el)
    console.log(binding)

    el.style[binding.arg] = binding.value
  },

  unmounted() {
    console.log('unmounted')
    clearInterval(interval);
  }
}