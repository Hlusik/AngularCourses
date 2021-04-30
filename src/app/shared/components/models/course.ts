export class Course {
    constructor(
        public id: string = '',
        public title: string = '',
        public description: string = '',
        public creationDate: Date = null,
        public duration: number = null,
        public authors: string[] = null,
    ) { }
}
