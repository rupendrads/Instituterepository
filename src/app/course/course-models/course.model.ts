export class Course {
    public id: number;
    public instituteId: number;
    public courseName: string;
    public subjects: string;
    public duration: number;
    public fee: number;

    constructor(id: number, instituteId: number, courseName: string, subjects: string, duration: number, fee: number,) {
        this.id = id;
        this.instituteId = instituteId;
        this.courseName = courseName;
        this.subjects = subjects;
        this.duration = duration;
        this.fee = fee;
    }

}
        

