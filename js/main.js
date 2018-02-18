var app = new Vue({
  el: '#todoApp',
  data: {
    tasks: [{
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

      var inputTask = document.getElementById('newTaskText');

      if (inputTask.value == '') {
        alert('Заметка не может быть пустой!');
      } else {
        this.tasks.push({
          text: this.tasks.text,
          done: false
        });
      }
    },

    clearInput: function() {
      setTimeout(function(){
        document.getElementById('newTaskText').value = '';
      }, 1)
    },

    deleteTask: function(task) {
      this.tasks.splice(this.tasks.indexOf(task), 1)
    },

    replaceTask: function() {
      setTimeout(function(){
        
      }, 500)
    }
  }
})
