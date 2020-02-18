class Stringer {
    private string: string;

    constructor(str: string) {
        this.string = str;
    }

    capitilize () {
        this.string = this.string.charAt(0).toUpperCase() + this.string.slice(1);
        return this;
    }

    upper() {
        try {
            const string = this.string.split(" ");
            for (let i = 0, x = string.length; i < x; i++) {
                string[i] = string[i][0].toUpperCase() + string[i].substr(1);
        
            }
            this.string = string.join(" ");
            return this;       
        } catch {
            return this;
        }
    }

    allupper() {
        this.string = this.string.toUpperCase();
        return this;
    }
    
    /**
     * Optional
     * @param change Any placeholder instead of the spaces (Optional)
     */
    fullTrim (change = ' ') {
        this.string = this.string.trim();
        this.string = this.string.replace(/\s+/g, change);
        return this;
    }

    value(): string {
        return this.string;
    }


} // End of the Class


module.exports = (str: string) => {
    return new Stringer(str);
};