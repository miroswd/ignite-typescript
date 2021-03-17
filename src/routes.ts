import {Request, Response} from 'express'
import CreateCourseService from './CreateCourseService'

export function createCourse(request:Request, response: Response){
  CreateCourseService.execute({
    name:'NodeJs',
    duration: 10,
    educator: 'Dani'
  })

  CreateCourseService.execute({
    name:'ReactJs',
    educator: 'Diego'
  })
  return response.status(200).json({msg:'Bom dia'})
}