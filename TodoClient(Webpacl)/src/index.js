
import "./css/styles.css";


import templateRoot from './hbs/root.hbs';
import templateTodoList from './hbs/toDoList.hbs';

import ToDoApi from './js/ToDoApi';



let appEl = document.getElementById("app");
let mainEl;
appEl.innerHTML = templateRoot();
window.onload = () => {


	// use root template, apply to "app" div

	mainEl = document.getElementById("main");
	loadToDo();

};


let loadToDo = () => {


	ToDoApi.getTodoItems((data) => {
		console.log(data);
		mainEl.innerHTML = templateTodoList({ results: data });

		document.getElementById("addTask").addEventListener("click", () => {
			let taskDescEl = document.getElementById("addTaskDescription");
			let taskDesc = taskDescEl.value.trim();


			if (taskDesc != "") {
				ToDoApi.addTodoItem(taskDesc, (data) => {
					taskDescEl.value = "";
					loadToDo();
				});
			}
		});

		let checkBoxes = document.getElementsByClassName("isComplete");

		for (let i = 0; i < checkBoxes.length; i++) {
			checkBoxes[i].addEventListener("click", function () {
				let id = this.parentElement.dataset.tdid;
				let complete = (this.checked);

				ToDoApi.setTodoItemCompleteStatus(id, complete, (data) => { });
			});

		}
		let deleteButtons = document.getElementsByClassName("deleteItem");

		for (const btn of deleteButtons) {
			btn.addEventListener("click", function () {
			
				let id = this.parentElement.dataset.tdid;
				ToDoApi.deleteToDoItem(id, (data) => {
					loadToDo();
				});
			});
		};

	});
	//lab 3


};