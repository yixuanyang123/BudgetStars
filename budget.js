export class budget {
    constructor(amount, categories){
        this._amount = 0;
        this._categories = {};
    }
    set amount(a) {
        this._amount = a;
    }
    addCategory(cat){
        this._categories[cat] = 0;
    }
    setCategory(cat, funds){
        if (amount > 0 && amount - funds >= 0){
            this._amount -= funds;
            this._categories[cat] = funds;
        }
        else {
            console.log('All out of money :(')
        }
    }
    dissolveCategory(cat){
        this._amount += this._categories[cat];
        delete this._categories[cat];
    }
    get amount(){
        return this._amount;
    }
    get categories(){
        return this._categories;
    }

}