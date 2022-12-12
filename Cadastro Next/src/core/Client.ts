export default class Client {
  id: string
  name: string
  age: number

  constructor(name: string, age: number, id: string) {
    this.name = name
    this.age = age
    this.id = id
  }

  static void() {
    return new Client("", 0, "")
  }

  getId() {
    return this.id
  }

  getName() {
    return this.name
  }
  getAge() {
    return this.age
  }
}
