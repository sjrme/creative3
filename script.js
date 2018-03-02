var vuealg = new Vue({
  el: '#vuealg',
  data: {
    notes: [],
    noteTitle: '',
    noteToAdd: '',

  },
  methods: {
    addNote: function() {
      if (!(this.number in this.notes))
	       Vue.set(vuealg.notes, this.number, new Array);

       this.notes[this.number].push({title:this.noteTitle, text:this.noteToAdd, });
       this.noteTitle = '';
       this.noteToAdd = '';
    },
    remove: function(note) {
      var index = this.notes.indexOf(note);
     this.notes.splice(index, 1);
    }
  },
});

var vuebio = new Vue( {
  el: '#vuebio',
  data: {
    notes: [],
    noteTitle: '',
    noteToAdd: '',

  },
  methods: {
    addNote: function() {
      if (!(this.number in this.notes))
         Vue.set(vuealg.notes, this.number, new Array);

       this.notes[this.number].push({title:this.noteTitle, text:this.noteToAdd, });
       this.noteTitle = '';
       this.noteToAdd = '';
    },
    remove: function(note) {
      var index = this.notes.indexOf(note);
     this.notes.splice(index, 1);
    }
  },
});

var vuesec = new Vue( {
  el: '#vuesec',
  data: {
    notes: [],
    noteTitle: '',
    noteToAdd: '',

  },
  methods: {
    addNote: function() {
      if (!(this.number in this.notes))
         Vue.set(vuealg.notes, this.number, new Array);

       this.notes[this.number].push({title:this.noteTitle, text:this.noteToAdd, });
       this.noteTitle = '';
       this.noteToAdd = '';
    },
    remove: function(note) {
      var index = this.notes.indexOf(note);
     this.notes.splice(index, 1);
    }
  },
});

var vueml = new Vue( {
  el: '#vueml',
  data: {
    notes: [],
    noteTitle: '',
    noteToAdd: '',

  },
  methods: {
    addNote: function() {
      if (!(this.number in this.notes))
         Vue.set(vuealg.notes, this.number, new Array);

       this.notes[this.number].push({title:this.noteTitle, text:this.noteToAdd, });
       this.noteTitle = '';
       this.noteToAdd = '';
    },
    remove: function(note) {
      var index = this.notes.indexOf(note);
     this.notes.splice(index, 1);
    }
  },
});

var vuewp = new Vue( {
  el: '#vuewp',
  data: {
    notes: [],
    noteTitle: '',
    noteToAdd: '',

  },
  methods: {
    addNote: function() {
      if (!(this.number in this.notes))
         Vue.set(vuealg.notes, this.number, new Array);

       this.notes[this.number].push({title:this.noteTitle, text:this.noteToAdd, });
       this.noteTitle = '';
       this.noteToAdd = '';
    },
    remove: function(note) {
      var index = this.notes.indexOf(note);
     this.notes.splice(index, 1);
    }
  },
});
