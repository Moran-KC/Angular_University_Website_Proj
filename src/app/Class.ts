import {
  Teacher
} from "./teachers/Teacher";

export class Class {
  public teacher: Teacher | undefined;
  constructor(
    public id: string,
    public className: string,
    public studentsNumber: number,
    public classAddress: string
  ) {}

}

export let naturalSciences: Class = new Class('natural', 'Natural Sciences', 210, '2.5.14')


export let humanities: Class = new Class('Humanities', 'Humanities Studies', 136, '2.2.25')


export let preparatory: Class = new Class('Preparatory', 'Preparatory program', 98, '1.2.5')
