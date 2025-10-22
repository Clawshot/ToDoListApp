
const my_button = document.getElementById('submit_button');
my_button.addEventListener('click', function() {
  (add_text());
});

const remove_button = document.getElementById('remove_button')
remove_button.addEventListener('click', function() {
    (delete_item());
});

function add_text(){
    //placeholder
    const task = document.getElementById('taskInput');
    const text = task.value;

    if (text.trim() !== '') {          // make sure it's not empty
      const li = document.createElement('li');  // create new list item
        li.textContent = text;
      document.getElementById('task_list').prepend(li); // add it to the list
      input.value = '';                // clear the input
    }}

function delete_item(){
    document.getElementById(task_list).removeChild(li)
}
