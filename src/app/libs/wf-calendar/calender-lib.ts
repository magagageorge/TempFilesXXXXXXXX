export class Month {
    id: number;
    name: string;
}

export class Day {
    id: number;
    name: string;
}

export class Year {
    id: number;
    name: string;
}

export class CalenderLib {
    /* declarations for date Inputs */
    util_days: Day[] = [];
    util_months: Month[] = [];
    util_years: Year[] = [];
    selected_day: any;
    selected_month: any;
    selected_year: any;
    withDays:boolean=true;
    max_year:number=2025;
    min_year:number=1900;
    constructor() {
        this.setDays();
        this.setMonths();
        this.setYears();
        this.selected_day = '';
        this.selected_month = '';
        this.selected_year = '';
    }

    setMonths() {
        this.util_months = [
            { id: 1, name: 'January' },
            { id: 2, name: 'February' },
            { id: 3, name: 'March' },
            { id: 4, name: 'April' },
            { id: 5, name: 'May' },
            { id: 6, name: 'June' },
            { id: 7, name: 'July' },
            { id: 8, name: 'August' },
            { id: 9, name: 'September' },
            { id: 10, name: 'October' },
            { id: 11, name: 'November' },
            { id: 12, name: 'December' }
        ]
    }

    getDate(): string {
        var date = '';
        if (this.selected_month != '' && this.selected_day != '' && this.selected_year != '') {
            date = this.selected_year + '-' + ((this.selected_month < 10) ? '0' + this.selected_month : this.selected_month) + '-' + ((this.selected_day < 10) ? '0' + this.selected_day : this.selected_day);
        }
        return date;
    }

    setDays() {
        if(this.withDays){
        var max: number = 31;
        var d: number = 1;

        if (this.selected_month != '') {
            if ((this.selected_month < 8 && (this.selected_month % 2) == 1) || (this.selected_month > 7 && (this.selected_month % 2) == 0)) {
                max = 31;
            } else {
                if (this.selected_month == 2) {
                    if (this.selected_year != '' && (this.selected_year % 4 == 0)) {
                        max = 29;
                    } else {
                        max = 28;
                    }
                } else {
                    max = 30;
                }
            }
        }

        if (this.selected_day > max) {
            this.selected_day = '';
        }        
        this.util_days = [];
        while (d <= max) {
            this.util_days.push({ id: d, name: '' + d + '' });
            d++;
        }
    }
    }


    setYears() {
        var y: number = this.max_year;
        while (y > this.min_year) {
            this.util_years.push({ id: y, name: '' + y + '' });
            y--;
        }
    }

    dayChanged(dayId: number) {
        this.selected_day = dayId;
    }
    monthChanged(monthId: number) {
        this.selected_month = monthId;
        this.setDays();
    }
    yearChanged(yearId: number) {
        this.selected_year = yearId;
        this.setDays();
    }

}
