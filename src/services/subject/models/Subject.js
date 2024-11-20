export default class Subject{
    constructor(classId, name, description, classDate, groupId, professorId){
        this.classId = classId;
        this.name = name;
        this.description = description;
        this.classDate = classDate;
        this.groupId = groupId;
        this.professorId = professorId;
    }

    getJSON(){
        return JSON.stringify(this);
    }
}
