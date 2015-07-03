var arr = [];

for (var i = 0; i < 10000; i++) {
  var data = FunctionalSharedStack();
  data.push(1);
  data.pop();
  arr.push(data);
}


console.log('done');

/* Notes
processor     2.7GHz Intel Core i5  | 3.06 GHz Intel Core 2 Duo

Functional Queue:
instantiation -     8.4ms (6.15%)   | 4.4ms (5.45%)
enqueue -           12.7ms (9.23%)  | 4.4ms (5.45%)
dequeue -           23.2ms (16.92%) | 17.7ms (21.82%)
size -              21.1ms (15.38%) | 17.7ms (21.82%)

memory - 5,520,592 (55%), 

Functional Stack:
instantiation - 12.9ms (8.00%) | 2.7ms (4.35%)
push -           8.6ms (5.33%) | 5.4ms (8.70%)
pop -           27.0ms (16.67%)| 20.2ms (32.61%)
size -         23.7ms (14.67%) | 16.2ms (26.09%)

memory - 5,520,808 (44%)

---

Functional Shared Stack:


memory - 2,719,928 (28%) | 2,719,928 (36%)
*/
