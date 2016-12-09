angular.module('todo', ['oitozero.ngSweetAlert', "dndLists", "firebase"])
    .controller('todoCtrl', ['SweetAlert', '$firebaseObject', '$timeout', function (SweetAlert, $firebaseObject, $timeout) {
        this.message = "message";
        this.newListName = "";
        this.newTodo = "";
        this.lists = [];
        this.fireBaseData;
        this.userRef;

        //wait for firebase to recognise logged in user
        $timeout(function () {
            var currentUser = firebase.auth().currentUser;
            //firebase keys cannot contain special characters
            var userEmail = currentUser.email.replace(/[^0-9A-Za-z]/g, '');
            this.userRef = firebase.database().ref().child(userEmail);

            var getfireBaseData = $firebaseObject(this.userRef);
            getfireBaseData.$loaded().then(function (data) {
                this.populateWithFirebaseData(data.$value);
            }.bind(this));
        }.bind(this), 2000);

        this.saveDatatoFirebase = function () {
            var serializedData = this.serialiseList();
            if (this.userRef) {
                this.userRef.set(serializedData);
            }
        }

        this.populateWithFirebaseData = function (data) {
            this.lists = this.unSerialiseList(data);
        }


        this.serialiseList = function () {
            return JSON.stringify(this.lists);
        }

        this.unSerialiseList = function (listData) {
            return JSON.parse(listData);
        }

        this.addList = function () {
            if (this.newListName.length > 0) {
                var name = this.newListName;
                var unique = name.replace(/\s/, '-');
                this.lists.push({
                    name: this.newListName,
                    unique: unique,
                    addCardOpen: false,
                    cards: []
                });
                this.newListName = "";
                SweetAlert.swal("Good Job", "You created a new list", "success");
                this.saveDatatoFirebase();
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

                function (isConfirm) {
                    if (isConfirm) {
                        this.lists.splice(listIndex, 1);
                        this.saveDatatoFirebase();
                        SweetAlert.swal("Your list has been deleted!");
                    } else {
                        SweetAlert.swal("Your list was not deleted.");
                    }
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
            this.saveDatatoFirebase();
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
                function (isConfirm) {
                    if (isConfirm) {
                        this.lists[listIndex]['cards'].splice(cardIndex, 1);
                        this.saveDatatoFirebase();
                        SweetAlert.swal("Your card has been deleted!");
                    } else {
                        SweetAlert.swal("Your card was not deleted.");
                    }

                }.bind(this));
        }
        this.addItem = function (list, card) {
            var listIndex = this.lists.indexOf(list);
            var cardIndex = this.lists[listIndex].cards.indexOf(card);
            console.log(listIndex, cardIndex);
            if (listIndex > -1 && cardIndex > -1) {
                this.lists[listIndex].cards[cardIndex].toDoItems.push({
                    name: this.newToDo,
                    isChecked: false
                })
                console.log(this.lists[listIndex]);
            }
            this.newToDo = '';
            this.saveDatatoFirebase();
        }
    }]);
