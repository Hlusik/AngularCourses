export class User {
    constructor(
        public id: number = 0,
        public email: string = '',
        public name: string = '',
        public password: string = '',
    ) { }
}