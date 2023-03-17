export interface iCourse {
  courseId: number,
  courseName: string,
  instituteId: number,
  courseDuration: number,
  courseFee: number,
  subjects: iSubject[]
}

export interface iSubject {
  subjectId: number,
  subjectName: string,
}
    
export class Course implements iCourse {
  public courseId: number = -1;
  public courseName: string;
  public instituteId: number;
  public courseDuration: number;
  public courseFee: number;
  public subjects: iSubject[] = [];

    constructor(courseName: string, instituteId: number, courseDuration: number, courseFee: number, subjects: iSubject[]) {
        this.courseName = courseName;
        this.instituteId = instituteId;
        this.courseDuration = courseDuration;
        this.courseFee = courseFee;
        this.subjects = [...subjects];
    }
}

        

