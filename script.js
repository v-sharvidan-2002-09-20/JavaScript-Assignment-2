// 1.
let transactions = [
  { type: "deposit", amount: 100 },
  { type: "withdrawal", amount: 50 },
  { type: "deposit", amount: 200 },
  { type: "withdrawal", amount: 30 },
];

function groupByType(transactions) {
  let grouped = {};

  transactions.forEach((trans) => {
    let type = trans.type;
    if (!grouped[type]) {
      grouped[type] = [];
    }
    grouped[type].push(trans);
  });

  return grouped;
}

console.log(groupByType(transactions));

// 2.
let employees = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 35 },
  { name: "Charlie", age: 30 },
];
let ageLimit = 30;

function filterEmployees(employees, ageLimit) {
  return employees.filter((labour) => labour.age <= ageLimit);
}

console.log(filterEmployees(employees, ageLimit));

// 3.
let classes = [
  ["Alice", "Bob", "Charlie"],
  ["David", "Alice", "Eve"],
  ["Frank", "George", "Bob"],
];

function checkDuplicates(classes) {
  let nameSet = new Set();

  for (let cent of classes) {
    for (let nick of cent) {
      if (nameSet.has(nick)) {
        return true;
      }
      nameSet.add(nick);
    }
  }

  return false;
}

console.log(checkDuplicates(classes));

// 4.
function date_time() {
  const now = new Date();

  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");

  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

console.log(date_time());

// 5.
function calculateAge(birthdate) {
  const birth_date = new Date(birthdate);
  const today = new Date();

  let age = today.getFullYear() - birth_date.getFullYear();
  const month_diff = today.getMonth() - birth_date.getMonth();
  const day_diff = today.getDate() - birth_date.getDate();

  if (month_diff < 0 || (month_diff === 0 && day_diff < 0)) {
    age--;
  }

  return age;
}

console.log(calculateAge("1990-06-15"));

// 6.
function addDays(date, days) {
  const result_date = new Date(date);
  result_date.setDate(result_date.getDate() + days);

  const year = result_date.getFullYear();
  const month = String(result_date.getMonth() + 1).padStart(2, "0");
  const day = String(result_date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

console.log(addDays("2022-06-15", 10));

// 7.
function dateDifference(date1, date2) {
  const first_date = new Date(date1);
  const second_date = new Date(date2);

  const time_diff = second_date - first_date;

  const day_diff = time_diff / (1000 * 60 * 60 * 24);

  return Math.abs(day_diff);
}

console.log(dateDifference("2022-06-15", "2023-06-15"));

// 8.
let userPreferences = new Map();

function setPreference(key, value) {
  userPreferences.set(key, value);
}

function getPreference(key) {
  return userPreferences.get(key);
}

setPreference("theme", "dark");
setPreference("fontSize", "16px");

console.log(getPreference("theme"));
console.log(getPreference("fontSize"));

// 9.
function countOccurrences(arr) {
  let occ_map = new Map();

  arr.forEach((str) => {
    if (occ_map.has(str)) {
      occ_map.set(str, occ_map.get(str) + 1);
    } else {
      occ_map.set(str, 1);
    }
  });

  return occ_map;
}
let strings = ["apple", "banana", "apple", "orange", "banana", "apple"];
console.log(countOccurrences(strings));

// 10.
let employees = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

function mapEmployeeIdsToNames(employees) {
  let employeeMap = new Map();

  employees.forEach((employee) => {
    employeeMap.set(employee.id, employee.name);
  });

  return employeeMap;
}

let employeeMap = mapEmployeeIdsToNames(employees);
console.log(employeeMap);

// 11.
let inventory = new Map();

function addItem(itemName, quantity) {
  inventory.set(itemName, quantity);
}

function updateItemQuantity(itemName, quantity) {
  if (inventory.has(itemName)) {
    let current_quantity = inventory.get(itemName);
    inventory.set(itemName, current_quantity + quantity);
  } else {
    console.log("Item not found");
  }
}

function checkItemQuantity(itemName) {
  return inventory.get(itemName);
}

addItem("apple", 100);
addItem("banana", 150);
updateItemQuantity("apple", 50);
console.log(checkItemQuantity("apple"));
console.log(checkItemQuantity("banana"));

// 12.
function removeDuplicates(arr) {
  let unique_num = new Set(arr);
  return Array.from(unique_num);
}

let numbers = [1, 2, 2, 3, 4, 4, 5];
console.log(removeDuplicates(numbers));

// 13.
function intersection(arr1, arr2) {
  let set1 = new Set(arr1);
  let set2 = new Set(arr2);

  let result = [];

  set1.forEach((item) => {
    if (set2.has(item)) {
      result.push(item);
    }
  });

  return result;
}

let array1 = [1, 2, 3, 4];
let array2 = [3, 4, 5, 6];
console.log(intersection(array1, array2));

// 14.
function union(...arrays) {
  let resultSet = new Set();

  arrays.forEach((array) => {
    let array_set = new Set(array);
    array_set.forEach((item) => resultSet.add(item));
  });

  return Array.from(resultSet);
}

let array1 = [1, 2, 3];
let array2 = [3, 4, 5];
let array3 = [5, 6, 7];

console.log(union(array1, array2, array3));

// 15.
function removeItemsFromSet(items, set) {
  items.forEach((item) => {
    set.delete(item);
  });
}

let mySet = new Set([1, 2, 3, 4, 5]);
let itemsToRemove = [2, 3];

removeItemsFromSet(itemsToRemove, mySet);
console.log([...mySet]);

// 16.
function updateAttendance(newAttendance, overallAttendance) {
  newAttendance.forEach((student) => {
    overallAttendance.add(student);
  });
  return overallAttendance;
}

let overallAttendance = new Set(["Alice", "Bob"]);
let todayAttendance = ["Charlie", "Alice"];

overallAttendance = updateAttendance(todayAttendance, overallAttendance);

console.log([...overallAttendance]);
