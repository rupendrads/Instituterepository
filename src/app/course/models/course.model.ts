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

