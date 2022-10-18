class node {
    constructor(value, next=null){
        this.value = value;
        this.next = next;
    }
}
class linkedList{
    constructor(){
        this.head = null
        this.size = 0;
    }

    insertFirst( data ){
        this.head = new node ( data, this.head)
    }

}