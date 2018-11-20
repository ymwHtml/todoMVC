;(function (){	
const template=`
	<div id="app">
		<section class="todoapp">
			<todo-header 
			v-on:ymw="addTodos"
			:todos="todos"></todo-header>
			<!--
				1.在父组件中通过子组件标签,声明属性(v-bind)的方式传递数据
					注意:只有v-bind才可以传递动态的数据
				2.在子组件中声明 props 接收父组件传递给自己的数据
				3.然后就可以在子组件中获得数据,进行组件想做的操作(只能使用,不要修改)
			-->
			<todo-list 
			:filterText="filterText"
			:todos="todos"></todo-list>
			<todo-footer :filterText="filterText"></todo-footer>
		</section>
		<app-footer></app-footer>	
	</div>
`
const todos=[
	{
		id:1,
		title:'吃饭',
		completed:true
	},
	{
		id:2,
		title:'睡觉',
		completed:true
	},
	{
		id:3,
		title:'LOL',
		completed:false
	}
]

window.App = {
		template,
		components:{
			//todoHeader:window.todoHeader
			todoHeader,
			todoList,
			todoFooter,
			appFooter
		},
		data(){
			return {
			    todos,
			    filterText:''
			}
		},
		//组件的生命周期钩子				
		beforeCreate(){
			console.log('beforeCreate=》',this.filterText)
		},
		created(){
			console.log('created=》',this.filterText)
			//在这个钩子里可以拿到filterText
			const _this=this
			//这里备份this，否则拿到的是window对象
			//window.onhashchange=function(){
			//	console.log(_this.filterText)
			//}
			window.onhashchange=()=>{
				//这里使用箭头函数就是为了拿到实例的this
				//这里箭头函数就绑定了window.onhashchange父级的this
				let hash=window.location.hash.substr('2')	
				this.filterText=hash
			}
			
		},
		beforeMount(){
			console.log('beforeMount')
		},
		mounted(){
			console.log('mounted')
		},
		beforeUpdate(){
			console.log('beforeUpdate')
		},
		updated(){
			console.log('updated')
		},
		activated(){
			console.log('activated')
		},
		deactivated(){
			console.log('deactivated')
		},
		beforeDestroy(){
			console.log('beforeDestroy')
		},
		destroyed(){
			console.log('destroyed')
		},
		errorCaptured(){
			console.log('errorCaptured')
		},
				
		
		//1.在父组件中定义一个方法（纯业务的）
		//2.在子组件内部调用父组件的方法
		//	2.1在子组件中发布一个自定义事件，告诉父组件，我（当前子组件）可以去添加任务了
		//3.在父组件上使用子组件的标签上订阅的子组件内部定义的事件（@click..）
		methods:{
			addTodos(titleText){
				//需求：要添加一个todo任务，所以titleText是子组件传递过来的要添加的文本
				console.log(titleText)
				console.log('父组件的addTodos方法被调用了')
				titleText = titleText.trim()
				if(!titleText.length){
					return
				}
				const todos = this.todos
				
				todos.push({
					id:todos[todos.length-1].id+1,
					title:titleText,
					completed:false
				})
			}
		}
}

//这里写一个监听hash路由改变的时候触发的事件
//用于看用户点了哪一个过滤项
//这个时候这里的代码应该写到生命周期的钩子函数中，类似于我们学习的指令的钩子

})()
