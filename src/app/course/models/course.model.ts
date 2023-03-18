export interface iCourse {
    courseId: number,
    courseName: string,
    instituteId: number,
    courseDuration: number,
    courseFee: number
  }

export interface iSubject {
    subjectId: number,
    subjectName: string,
  }
  
export interface iCourseSubject {
   courseId: number,
   subjectId: number 
  }   
  
export class Course implements iCourse {
    public courseId: number;
    public instituteId!: number;
    public courseName: string;
    public Ssubjects:string[];
    public courseDuration: number;
    public courseFee: number;

    constructor(courseId: number, courseName: string, Ssubjects: string[], courseDuration: number, courseFee: number,) {
        this.courseId = courseId;
        this.courseName = courseName;
        this.Ssubjects = Ssubjects;
        this.courseDuration = courseDuration;
        this.courseFee = courseFee;
    }

}

export class iSubject {
  public subjectId: number;
  public subjectName: string;
  
  constructor(subjectId: number, subjectName: string) {
      this.subjectId = subjectId;
      this.subjectName = subjectName;
   }
}
        

