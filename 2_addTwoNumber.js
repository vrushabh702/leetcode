function ListNode(val,next){
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

var addTwoNumbers = function(l1,l2){
    let dummy = new ListNode(0);
    let current = dummy
    let carry = 0;
    let step = 1;

    console.log("Addiing two numbers represented as linked lists: ")
    console.log("Initial dummy node -> 0");

    while(l1 || l2 || carry){
        let x=  l1 ? l1.val : 0;
        let y = l2 ? l2.val : 0;
        let total = x + y + carry;
        carry = Math.floor(total/10)
        let digit = total % 10

        console.log(`\n Step ${step++}:`);
        console.log(`- l1 digit: ${x}, l2 digit: ${y}, carry: ${carry}`);
        console.log(`- Sum :; ${x} + ${y} + ${carry} = ${total}`)
        console.log(`- New digit: ${digit}, new carry: ${carry}`)

        current.next = new ListNode(digit)
        current = current.next;

        let result = [];
        let temp = dummy.next;
        while(temp){
            result.push(temp.val);
            temp = temp.next
        }
        console.log(`- current results: [${result.join(' -> ')}]`)

        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null
    }
    return dummy.next
}

function createList(arr){
    let dummy = new ListNode(0);
    let current = dummy; 
    for(let num of arr){
        current.next = new ListNode(num)
        current = current.next
    }
    return dummy.next
}

function printList(list){
    let result = [];
    while(list){
        result.push(list.val);
        list = list.next
    }
    console.log(`[${result.join(' -> ')}]`);
}

const l1 = createList([2,4,3]);
const l2 = createList([5,6,4]);

console.log("\nInput Lists:");
console.log("l1:")
printList(l1)
console.log("l2:")
printList(l2);

console.log("\nCalculation steps:");
const result = addTwoNumbers(l1,l2)

console.log("\nFinal result:");
printList(result)