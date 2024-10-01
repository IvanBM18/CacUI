export default class Student{
    constructor(student_id, firstName, lastName, siiauCode, registerDate,email = null){
        this.student_id = student_id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.siiauCode = siiauCode;
        this.registerDate = registerDate;
        this.email = email;
    }

    getJSON(){
        return JSON.stringify(this);
    }
}