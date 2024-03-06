import coursesData from './courses.json';

export interface Course {
    id: number;
    name: string;
    summary: string;
    description: string;
    course_link: string;
  }

const courses: Course[] = coursesData as Course[];

export default courses;

