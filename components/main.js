new Vue({
	el:"#app",
	
	//template:'<div>root component</div>',	
	//实例Vue的 template 所定义的内容，会把el选的入口节点'#app'给替换掉
	
	//template:'<app></app>',
	//在自己的实例中，使用自己的组件，
	
	template:'<App/>',
	//有时候为了简洁，我们的组件也可以使用单标签<App />
	//推荐把组件的首字母都大写
	
	components:{
		
		//app:{
		//	template:'<div>root component</div>'
		//}
		
		//局部注册,这些组件就是一个个对象，所以可以单独写，提取出来

		//app:app
		//app组件：app对象
		
//		EcamScript6写法就直接写一个就可以
			App
//			app:{
//		  template:`
//				<div>
//					<section class="todoapp">
//						<todo-header></todo-header>
//						<todo-list></todo-list>
//						<todo-footer></todo-footer>					
//					</section>
//					<app-footer></app-footer>	
//				</div>
//				`,
//		 components:{
//				todoHeader:window.todoHeader,
//				todoList:window.todoList,
//				todoFooter:window.todoFooter,
//				appFooter:window.appFooter
//				}
//		}
	}
})

	