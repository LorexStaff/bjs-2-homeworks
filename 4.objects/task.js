function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

let student1 = new Student("Елена", "женский", 19);
let student2 = new Student("Иван", "мужской", 21);
let student3 = new Student("Егор", "мужской", 20);

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
};

Student.prototype.addMarks = function (...marks) {
  if (this.marks != undefined) {
    this.marks.push(...marks);
  }
};

Student.prototype.getAverage = function () {
  if (this.marks == undefined || this.marks.length === 0) {
    return 0;
  }
  const sum = this.marks.reduce((acc, mark) => acc + mark, 0);
  return sum / this.marks.length;
};

Student.prototype.exclude = function (reason) {
  this.excluded = reason;
  delete this.marks;
  delete this.subject;
};
