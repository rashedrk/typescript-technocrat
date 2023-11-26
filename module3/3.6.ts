{
    //getter and setter
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

        // addDeposit(amount: number) {
        //      this._balance = this._balance + amount;
        // }

        //using setter
        set deposit(amount: number) {
            this._balance = this._balance + amount;
        }


        // getBalance() {
        //     return this._balance;
        // }

        //using getter
        get balance() {
            return this._balance;
        }
    };


    const account = new BankAccount(111, 'Mr. X', 200);

    // account.addDeposit(20);
    account.deposit = 20;

    // const balance = account.getBalance();
    const balance = account.balance;
    console.log(balance);

    //
}