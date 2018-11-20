;(function (){
	
	const template = `
		<footer class="footer">
				
				<span class="todo-count"><strong>0</strong> item left</span>
				<!-- Remove this if you don't implement routing -->
				<ul class="filters">
					<li>
						<a :class="{selected:filterText===''}" href="#/">All</a>
					</li>
					<li>
						<a :class="{selected:filterText==='active'}" href="#/active">Active</a>
					</li>
					<li>
						<a :class="{selected:filterText==='completed'}" href="#/completed">Completed</a>
					</li>
				</ul>
				<!-- Hidden if no completed items are left ↓ -->
				<button class="clear-completed">Clear completed</button>
		</footer>
		`
	window.todoFooter = {
		template,
		props:['filterText']
	}
	
})()
