export interface Menu {
    locationId: number;
    categories: Array<Category>;
}

export interface Category {
    categoryName: string;
    categoryList: Array<Section>;
}

export interface Section {
    section: string;
    sectionList: Array<MenuItem>;
}

export interface MenuItem {
    menuItemId: number;
    header: string;
    subHeader: string;
    price: string;
    subCategory1: string;
    subCategory2: string;
    description: string;
    photoLocation: string;
}
