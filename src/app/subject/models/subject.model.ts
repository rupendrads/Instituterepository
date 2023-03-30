export interface iSubject {
    subjectId: number,
    subjectName: string,
    InstituteId: number
  }
      
  export class Subject {
    public subjectId: number;
    public subjectName: string;
    public instituteId: number;
  
      constructor(
        subjectId: number, 
        subjectName: string,
        instututeId: number, 
        ) {
          this.subjectId = subjectId;
          this.subjectName = subjectName;
          this.instituteId = instututeId;
      }
   }
  
          
  
  