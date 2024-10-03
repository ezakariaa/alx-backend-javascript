export function taskFirst() {
  const task = 'I prefer const when I can.'; // Using const for task
  return task;
}

export function getLast() {
  return ' is okay';
}

export function taskNext() {
  let combination = 'But sometimes let'; // Using let for combination
  combination += getLast();
  
  return combination;
}
