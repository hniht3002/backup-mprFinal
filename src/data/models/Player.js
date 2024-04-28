import { randomNumberInRange, randomOptions } from "../../utils/Random"

class Player {
    constructor(email) {
      this.id = Math.random()
      this.email = email || ""
      this.name = randomOptions([
        'Emma', 'Liam', 'Olivia', 'Noah', 'Ava', 'William', 'Sophia', 'Elijah', 'Isabella', 'James',
        'Mia', 'Benjamin', 'Charlotte', 'Lucas', 'Amelia', 'Henry', 'Harper', 'Alexander', 'Evelyn', 'Michael',
        'Abigail', 'Daniel', 'Emily', 'Logan', 'Madison', 'Matthew', 'Victoria', 'David', 'Grace', 'Joseph',
        'Chloe', 'Jackson', 'Natalie', 'Samuel', 'Lily', 'Gabriel', 'Avery', 'John', 'Addison', 'Ryan',
        'Hannah', 'Nicholas', 'Aubrey', 'Christopher', 'Ella', 'Joshua', 'Samantha', 'Andrew', 'Leah', 'Carter',
        'Aria', 'Anthony', 'Zoe', 'Thomas', 'Audrey', 'Ethan', 'Allison', 'Christian', 'Sofia', 'Isaac',
        'Alexa', 'Jack', 'Camila', 'Jonathan', 'Anna', 'Luke', 'Nora', 'Owen', 'Penelope', 'Gavin',
        'Sarah', 'Wyatt', 'Elizabeth', 'Dylan', 'Mila', 'Nathan', 'Claire', 'Hunter', 'Aaliyah', 'Eli',
        'Stella', 'Isaiah', 'Gabriella', 'Julian', 'Lucy', 'Levi', 'Alyssa', 'Aaron', 'Taylor', 'Charles'
    ])
      this.age = 0
      this.sex = randomOptions(["Male", "Female"])
      this.happiness = randomNumberInRange(50, 60)
      this.health = randomNumberInRange(20, 60)
      this.smart = randomNumberInRange(30, 70)
      this.look = randomNumberInRange(20, 60)
      this.skills = 0
      this.university = ""
      this.bank = ""
      this.relationShip = [],
      this.amount = 0
      this.friendList = []
      this.course = []
      this.job =[]
      this.elementarySchool = false
      this.secondarySchool = false
      this.university = false
      this.higherEducation = false
      this.alive = true
    }
    
  }
  
  export default Player;
  