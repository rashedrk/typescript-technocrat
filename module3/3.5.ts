{
    //Access modifiers
    class BankAccount {
        public readonly id: number;
        public name: string;
        // private _balance: number;
        protected _balance: number;

        constructor(id: number, name: string, balance: number) {
            this.id = id;
            this.name = name;
            this._balance = balance;
        }

        addDeposit(amount: number) {
            return this._balance = this._balance + amount;
        }

        getBalance() {
            return this._balance;
        }
    };

    class StudentAccount extends BankAccount {
        constructor(id: number, name: string, balance: number) {
            super(id, name, balance);
        }

        
    };

    const account = new BankAccount(111, 'Mr. X', 200);
    account.addDeposit(20);
    const balance = account.getBalance();
    console.log(balance);
    
    //
}