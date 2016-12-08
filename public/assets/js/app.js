angular.module('todo', ['oitozero.ngSweetAlert', "dndLists"])
    .controller('todoCtrl', ['SweetAlert', function (SweetAlert) {
        this.message = "message";
        this.newListName = "";
        this.newTodo = "";
        this.lists = [];

        this.addList = function () {
            if (this.newListName.length > 0) {
                this.lists.push({
                    name: this.newListName,
                    addCardOpen: false,
                    cards: []
                });
                this.newListName = "";
                SweetAlert.swal("Good Job", "You created a new list", "success");
            } else {
                SweetAlert.swal("Error", "You must enter a list name", "error");
            }

        };

        this.deleteList = function (listIndex) {
            SweetAlert.swal({
                    title: "Are you sure?",
                    text: "Do you want this list deleted?",
                    type: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#DD6B55",
                    confirmButtonText: "Yes, delete it!",
                    closeOnConfirm: false
                },
                function () {
                    this.lists.splice(listIndex, 1);
                    console.log(listIndex);
                    SweetAlert.swal("Your list has been deleted!");

                }.bind(this));

        }
        this.newCard = {
            isDone: 0,
            name: '',
            description: '',
            dueDate: '',
            toDoItems: []
        }
        this.hideAddCardDiv = false;

        this.addCard = function (listIndex) {
            var copy = Object.assign({}, this.newCard);
            this.lists[listIndex]['cards'].push(copy);
            this.lists[listIndex].addCardOpen = false;
        };

        this.deleteCard = function (listIndex, cardIndex) {
            SweetAlert.swal({
                    title: "Are you sure?",
                    text: "Do you want this card deleted?",
                    type: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#DD6B55",
                    confirmButtonText: "Yes, delete it!",
                    closeOnConfirm: false
                },
                function () {
                    this.lists[listIndex]['cards'].splice(cardIndex, 1);
                    SweetAlert.swal("Your card has been deleted!");

                }.bind(this));

        }
        this.addItem = function () {
            console.log(this.newToDo);
            this.newCard.toDoItems.push({
                name: this.newToDo,
                isChecked: false
            });
            this.newToDo = '';
        }


    }]);
