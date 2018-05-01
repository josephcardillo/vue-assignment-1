new Vue ({
  el: '#exercise',
  data: {
    name: 'Joseph',
    age: '33',
    image: 'https://milkandpencils.files.wordpress.com/2018/04/img_8905.jpg?w=805'
  },
  methods: {
    multAgeByThree: function(age) {
      return this.age * 3;
    },
    randomFloat: function() {
      return Math.random();
    }
  }
});
