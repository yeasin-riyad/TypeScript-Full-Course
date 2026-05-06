class BankAccount {
  public owner: string;

  private balance = 0;  //শুধু TypeScript level restriction. compile হলে JS-এ normal property হয়ে যায়

  #otp = 123456;  //👉 এটা hard private property. JavaScript/TypeScript-এর true private field 🔐

  constructor(owner: string) {
    this.owner = owner;
  }

  deposit(amt: number) {
    if (amt <= 0) throw new Error("amount must be positive");
    this.balance += amt;
  }

  getBalance() {
    return this.balance;
  }

  verifyOtp(code: number) {
    return this.#otp === code; //only accessibjle inside the class
  }
}

const acc = new BankAccount("Sangam");
acc.deposit(5000);
console.log(acc.getBalance());

// acc.balance
// acc.#otp


// 🧠 4. কখন # ব্যবহার করবে?
// sensitive data (OTP, password, token)