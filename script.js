const App = {
	data: () => ({
		input: '',
		backlog: [],
	}),

	methods: {
		click() {
			if (this.input.length === 0) return;

			this.backlog.push(this.input);
			this.input = '';
		}
	}
}

Vue.createApp(App).mount('#app');