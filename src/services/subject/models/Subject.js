export default class Student{
    constructor(classId, firstName, lastName, siiauCode, registerDate,email = null){
        this.studentId = studentId;
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
