class Zeba {

    constructor(str) {
        this.string = str;
    }

    capitilize () {
        this.string = this.string.charAt(0).toUpperCase() + this.string.slice(1);
        return this;
    }

    upper() {
        try {
            this.string = this.string.split(" ");
            for (let i = 0, x = this.string.length; i < x; i++) {
                this.string[i] = this.string[i][0].toUpperCase() + this.string[i].substr(1);
        
            }
            this.string = this.string.join(" ");
            return this;       
        } catch {
            return this;
        }
    }

    allupper() {
        this.string = this.string.toUpperCase();
        return this;
    }

    fullTrim (change = false) {
        this.string = this.string.trim();
        change = change ? change : ' ';
        this.string = this.string.replace(/\s+/g, change);
        return this;
    }


} // End of the Class



module.exports = Zeba;