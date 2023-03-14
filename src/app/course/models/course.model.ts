export interface iCourse {
    id: number,
    name: string,
    instituteId: number,
    duration: number,
    fee: number
  }

export interface iSubject {
    id: number,
    name: string,
  }
  
export interface iCourseSubject {
   courseId: number,
   subjectId: number 
  }   
  
export class Course implements iCourse {
    public id: number;
    public name: string;
    public instituteId: number;
    public duration: number;
    public fee: number;

    constructor(id: number, name: string, instituteId: number, duration: number, fee: number,) {
        this.id = id;
        this.name = name;
        this.instituteId = instituteId;
        this.duration = duration;
        this.fee = fee;
    }

}

export class iSubject {
  public id: number;
  public name: string;
  
  constructor(id: number, name: string) {
      this.id = id;
      this.name = name;
   }
}
        

