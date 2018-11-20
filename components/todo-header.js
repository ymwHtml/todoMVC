;(function (){
const template= `
		<header class="header">
			<h1>todos</h1>
			<input @keydown.enter="handlekeydown" class="new-todo" placeholder="What needs to be done?" autofocus>
		</header>
		`
window.todoHeader = {
		template,
		//组件接收到的数据，就可以像访问data中的数据一样来访问props中的数据
		props:['todos'],
		methods:{
			handlekeydown(e){
				//0.获取文本框值
				//1.非空校验
				//2.添加到任务todos中
				const target = e.target
				const value = target.value.trim()
				
				if(!value.length){
					return 
				}
				//******数据已经准备好了，告诉父组件，去使用吧****
				//子组件不关心父组件的业务，父组件拿到数据爱干嘛就干嘛
				//因为不关心因为，所以重用的几率就加大了
				//谁来用我，我就把数据给谁
				this.$emit('ymw',value)
				
				target.value=''
				//《人月神话》《没有银弹》
				
				//在子组件中确实可以操作父组件传递过来的数据，但是不建议这么做
				//注意：如果要操作，只能操作引用类型的数据，数组是引用类型
				//	   但是也只可以修改，不能赋值，虽然可以修改，但是也不建议使用
				//	   因为这样就违背了Vue的通信原则：单向数据流
				//	   父组件的修改可以影响到孩子
				//	  但是在组件嵌套的过程中，子组件修改父组件数据的话会影响到这个数据流，使得整个数据应用场景出现问题
				//引用类型也不能在子组件中重新赋值
				//普通数据类型也不允许重新赋值
				//所以，我们就可以把数据传给父组件，让父组件自己去操作，而不是我们在子组件直接就操作了			
	
//				const todos = this.todos
//				
//				todos.push({
//					id:todos[todos.length-1].id+1,
//					title:value,
//					completed:false
//				})
			}
		}
	}
	
})()
