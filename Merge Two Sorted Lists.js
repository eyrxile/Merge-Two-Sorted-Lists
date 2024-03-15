function ListNode(val){
    this.val = val;
    this.next = null;
}

function arrayToList(arr) {
    if (!arr.length) return null;
    const head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}

function listToArray(head) {
    const result = [];
    while (head !== null) {
        result.push(head.val);
        head = head.next;
    }
    return result;
}

var mergeTwoLists = function(list1, list2) {
    let dummy = new ListNode(-1);
    let current = dummy;

    while(list1 !== null && list2 !== null){
        if(list1.val < list2.val){
            current.next = list1;
            list1 = list1.next;
        } else{
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }

    if(list1 !== null){
        current.next = list1;
    }

    if(list2 !== null){
        current.next = list2;
    }

    return dummy.next;
};

//Example usage:
const list1_1 = arrayToList([1, 2, 4]);
const list2_1 = arrayToList([1, 3, 4]);
let mergedList_1 = mergeTwoLists(list1_1, list2_1);
console.log(listToArray(mergedList_1));

const list1_2 = arrayToList([]);
const list2_2 = arrayToList([]);
let mergedList_2 = mergeTwoLists(list1_2, list2_2);
console.log(listToArray(mergedList_2));

const list1_3 = arrayToList([]);
const list2_3 = arrayToList([0]);
let mergedList_3 = mergeTwoLists(list1_3, list2_3);
console.log(listToArray(mergedList_3));