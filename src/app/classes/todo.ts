export class Todo {
  id: number;
  text: string;
  date: Date;
  numberOfLikes: number;

  constructor(id: number, text: string, numberOfLikes: number) {
    this.id = id;
    this.text = text;
    this.date = new Date();
    this.numberOfLikes = numberOfLikes;
  }
}
