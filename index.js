// let balance = 500.00;

class Account {
  constructor(username) {
    this.username = username;
    this.balance = 0;
  }
  currentBalance() {
    console.log(`Current balance: $${this.balance}`)
  }
}

class Transaction {
  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }
}

class Deposit extends Transaction {

  get value() {
    return this.amount;
  }

  commit() {
    this.account.balance = this.value;
    console.log(`Transaction: Deposited $${this.value}`);
    console.log(`New Balance: $${this.account.balance}`);
  }
}

class Withdrawal extends Transaction {

  get value() {
    return this.amount * -1;
  }

  commit() {
    this.account.balance = this.value;
    console.log(`Transaction: Withdrew $${this.value}`);
    console.log(`New Balance: $${this.account.balance}`);
  }
}

// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected

const myAccount = new Account("snow-patrol")

t3 = new Deposit(100.00, myAccount);
t3.commit();

t1 = new Withdrawal(50.25, myAccount);
t1.commit();

t2 = new Withdrawal(9.99, myAccount);
t2.commit();
