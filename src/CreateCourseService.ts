interface Course {
  name: string;
  duration?: number; // opcional
  educator: string;
}

class CreateCourseService{
  execute({name, duration=5, educator}:Course ){
    console.log(name, duration, educator)
  }
}

export default new CreateCourseService();