export interface iCourse {
  courseId: number,
  courseName: string,
  instituteId: number,
  courseDuration: number,
  courseFee: number,
  royaltyType: string|undefined,
  royaltyValue: number,
  subjects: iSubject[]
}

export interface iSubject {
  subjectId: number,
  subjectName: string,
}
    
export class Course  {
  public courseId: number = 0;
  public courseName: string;
  public instituteId: number;
  public courseDuration: number;
  public courseFee: number;
  public royaltyType: string|undefined;
  public royaltyValue: number;
  public subjects: iSubject[] = [];

    constructor(
      courseId: number, 
      courseName: string, 
      instituteId: number, 
      courseDuration: number, 
      courseFee: number, 
      royaltyType: string|undefined,
      royaltyValue: number, 
      subjects: iSubject[]) {
        this.courseId = courseId;
        this.courseName = courseName;
        this.instituteId = instituteId;
        this.courseDuration = courseDuration;
        this.courseFee = courseFee;
        this.royaltyType = royaltyType;
        this.royaltyValue = royaltyValue;
        this.subjects = [...subjects];
    }
 }

        

