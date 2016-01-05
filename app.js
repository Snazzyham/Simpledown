new Vue({
  el: '#editor',
  data: {
    input: '# hello
      random text
      please readAsText
      thanks'
  },
  filters: {
    marked: marked
  }
});
