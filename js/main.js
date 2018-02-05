var app = new Vue({
  el: '#todoApp',
  data: {
    tasks: [
      {
        text: 'Пойти домой',
        done: false
      },
      {
        text: 'Выпить кофию',
        done: false
      },
      {
        text: 'Лечь спать',
        done: false
      }
    ]
  },
  methods: {
    addTask: function() {
      this.tasks.push({
        text: this.tasks.text,
        done: false
      });
    },
    deleteTask: function(task) {
      this.tasks.splice(this.tasks.indexOf(task), 1)
    }
  }
})
