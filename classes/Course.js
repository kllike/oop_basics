class Course {
    constructor(name){
        this.name = name
        this.grades = []  
    }

    getGrades(){
        return this.grades
    }

    getAverageGrade() {
        if (this.grades.length === 0) {
            return -1;
        }
        const total = this.grades.reduce((sum, item) => sum + item.grade, 0);
        return total / this.grades.length;
    }

    addGrade(student, grade){
        const newGrade = {
            student: student,
            grade: grade
        }
        this.grades.push(newGrade) 
    } 
    description() {
        return `Course: ${this.name}`;
    }
}

module.exports = Course