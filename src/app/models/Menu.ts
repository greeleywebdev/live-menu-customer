export interface Menu {
    _id: string,
    name: string,
    logo: string,
    address: Address,
    menu: {
        categories: Array<Category>
    };
}

export interface Address {
    street_number: number,
    street_name: string,
    city: string,
    state: string,
    zip_code: number
}
export interface Category {
    name: string;
    sections: Array<Section>;
}

export interface Section {
    name: string;
    items: Array<MenuItem>;
}

export interface MenuItem {
    name: string,
    sub_head: string,
    price: number,
    attributes: Array<string>,
    description: string,
    is_active: boolean
}
