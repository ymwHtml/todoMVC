;(function (){
const template= `
		<section class="main">					
				<input id="toggle-all" class="toggle-all" type="checkbox">
				<label for="toggle-all">Mark all as complete</label>
				<ul class="todo-list">
					<!-- These are here just to show the structure of the list items -->
					
					<li v-for="item in filterTodos">
						<div class="view">
							<input class="toggle" type="checkbox" v-model="item.completed">
							<label>{{item.title}}</label>
							<button class="destroy"></button>
						</div>
						<input class="edit" value="Create a TodoMVC template">
					</li>
				
					
				</ul>
			</section>
		`
	window.todoList = {
		template,
		props:['todos','filterText'],
		data(){
			return{}
		},
		//子组件就会把父组件在标签中声明的 todos 拿到
		
		//父组件只需把数据传递给子组件
		//至于子组件如何使用，父组件不用出管
		computed:{
			filterTodos(){
				switch(this.filterText){
					case'active':
						return this.todos.filter(item => !item.completed)
					break
					
					case'completed':
						return this.todos.filter(item => item.completed)
					break
					
					default:
						return this.todos
					break
				}			
			}
		}
	}	
})()