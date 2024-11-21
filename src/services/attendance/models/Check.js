export default class Student{
    constructor(attendanceId, studentId, classId){
        this.attendanceId = attendanceId;
        this.studentId = studentId;
        this.classId = classId;
    }

    getJSON(){
        return JSON.stringify(this);
    }
}
