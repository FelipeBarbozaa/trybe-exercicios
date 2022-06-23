export default interface Enrollable {
  _enrollment: string;
  generateEnrollment(): string;
}