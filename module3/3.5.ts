{
    // access modifiers

    class BankAccount {
        public readonly id: number;
        public name: string;
        protected _balance: number;
        constructor(id: number, name: string, balance: number) {
            this.id = id;
            this.name = name;
            this._balance = balance;
        }

        addDeposit(amount: number) {
            this._balance += amount;
        }
        getBalance() {
            return this._balance;
        }
    }


        const poorAccount = new BankAccount(2, "kakon", 200)

        poorAccount.addDeposit(100);
       const myBlc= poorAccount.getBalance();
        console.log(`Your Balance is ${myBlc}`);

    class StudentAccount extends BankAccount {
        test() {
            this._balance
        }
    }


}