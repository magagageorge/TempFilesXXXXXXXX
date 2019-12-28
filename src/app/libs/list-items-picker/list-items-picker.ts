export class WbListItem {
    id: any;
    name: any;
}

export class ListItemsPicker {
    itemsList: WbListItem[];
    selectedItemsList: WbListItem[];
    filterBy: string;
    constructor() {
        this.itemsList = [];
        this.selectedItemsList = [];
        this.filterBy='';
    }

    filterByName(): WbListItem[] {
        if(this.filterBy.trim()==''){
            return this.itemsList;
        }
        const filterValue = this.filterBy.toLowerCase();
        return this.itemsList.filter(item => item.name.toLowerCase().indexOf(filterValue) === 0);
    }

    filterById(id: any): WbListItem[] {
        return this.itemsList.filter(item => item.id === id);
    }

    selectItem(item:WbListItem){
        this.selectedItemsList.push(item);
        this.itemsList = this.itemsList.filter((x: any) => x.id !== item.id);
    }

    unselectItem(item:WbListItem){
        this.itemsList.push(item);
        this.selectedItemsList = this.selectedItemsList.filter((x: any) => x.id !== item.id);
    }

}
