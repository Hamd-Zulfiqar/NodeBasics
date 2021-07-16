module.exports =  class Student {
    constructor(name, father_name, class_no) {
        this.name = name;
        this.father_name = father_name;
        this.class_no = class_no;
    }

    getfullname() {
        return `name: ${this.name + " " + this.father_name}`;
    }
}