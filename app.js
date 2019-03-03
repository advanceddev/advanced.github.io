'use-strict'

Vue.component('action-button', {
  data: function () {
    return {
      toClipboard: 'https://advanceddev.github.io/advanced.github.io/advanced.css',
      copied: false
    }
  },
  methods: {
  	handleAction() {
  		this.copied = true
  		navigator.clipboard.writeText(this.toClipboard).then(function() {
  			alert('Copied to clipboard!')
		}, function(err) {
			console.error('Async: Could not copy text: ', err);
		});
  	}
  },
  template: '<button @click="handleAction" class="b1">Copy direct URL to clipboard!</button>'
})

Vue.component('github-button', {
  data: function () {
    return {
      url: 'https://github.com/advanceddev'
    }
  },
  methods: {
  	handleRedirect() {
  		location.href = this.url;
  	}
  },
  template: '<button @click="handleRedirect" class="b2 b-github">Our GitHub</button>'
})

var app = new Vue({
  el: '#app',
  data: function () {
  	return {
  		title: 'Advanced',
	    subtitle: 'Simple CSS UI framework',
	    link: 'https://advanceddev.github.io/advanced.github.io/advanced.css'
  	}
  }
})