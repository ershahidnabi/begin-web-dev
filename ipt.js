class Account {
    constructor(accountNum, accountName, accountBal) {
        this.accountNum = accountNum;
        this.accountName = accountName;
        this.accountBal = accountBal;
    }
    deposit(amount) {
        this.accountBal += amount;
        console.log(`Deposited: $${amount}. New balance: $${this.accountBal}`);
    }
    withdraw(amount) {
        if (amount > this.accountBal) {
            console.log("Insufficient funds");
        } else {
            this.accountBal -= amount;
            console.log(
                `Withdrew: $${amount}. New balance: $${this.accountBal}`
            );
        }
    }
    checkBalance() {
        console.log(`Current balance: $${this.accountBal}`);
    }

    transactions() {
        console.log(
            `Account Number: ${this.accountNum}, Name: ${this.accountName}, Balance: $${this.accountBal}`
        );
    }
}

class Customer {
    constructor() {
        this.customerId = customerId;
        this.customerName = customerName;
        this.customerName = customerName;
    }
    newAccount() {
        console.log(
            `New account created for ${this.customerName} with ID: ${this.customerId}`
        );
    }
    viewAccountDetails() {
        console.log(
            `Customer ID: ${this.customerId}, Name: ${this.customerName}, Address: ${this.customerAddress}`
        );
    }
    performTRansaction(account, type, amount) {
        if (type === "deposit") {
            account.deposit(amount);
        } else if (type === "withdraw") {
            account.withdraw(amount);
        } else {
            console.log("Invalid transaction type");
        }
    }
}

class Bank {
    bankName = "Global Bank";

    createAccount(customer) {
        customer.newAccount();
        console.log(
            `Account created at ${this.bankName}, ${this.bankLocation}`
        );
    }
    viewCustomerDetails(customer) {
        customer.viewAccountDetails();
    }
}
j;
