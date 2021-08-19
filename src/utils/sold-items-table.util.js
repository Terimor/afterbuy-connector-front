export const columns = [
    {id: 'order_id', label: 'Order ID'},
    {id: 'title', label: 'Title'},
    {id: 'category', label: 'Category'},
    {id: 'quantity', label: 'Quantity'},
    {id: 'price', label: 'Price'},
    {id: 'volume', label: 'Volume'},
    {id: 'product_code', label: 'Product code'},
    {id: 'afterbuy_account', label: 'Afterbuy account'},
    {id: 'external_id', label: 'Afterbuy ID'},
    {id: 'date_time', label: 'Date'},
];

export const flattenResponse = (rows) => {
    return rows.map((row) => {
        return {
            ...row,
            order_id: row.order.id,
            volume: row.volume ? `${row.volume.amount} ${row.volume.unit}` : '-',
            afterbuy_account: row.order.afterbuy_account_name,
            external_id: row.order.external_id,
            date_time: row.order.date_time,
            category: row?.category?.name,
        }
    })
}


const extractNumberPartFromString = (string) => {
    const matches = string.match(/\d/g);

    if (matches) {
        return matches.join("");
    }

    return null;
}

export const applyFilters = (rows, filters) => {
    return rows.filter((row) => {
        const order_id = parseInt(filters.order_id);
        if (!isNaN(order_id)) {
            if (row.order_id !== order_id) {
                return false;
            }
        }

        const title = filters.title;
        if (title) {
            if (!row.title.toLowerCase().toString().includes(title.toLowerCase())) {
                return false;
            }
        }

        const category = filters.category;
        if (category) {
            if (row.category !== category) {
                return false;
            }
        }

        const min_quantity = filters.min_quantity;
        if (min_quantity) {
            if (+row.quantity < +min_quantity) {
                return false;
            }
        }

        const max_quantity = filters.max_quantity;
        if (max_quantity) {
            if (+row.quantity > +max_quantity) {
                return false;
            }
        }

        const min_price = filters.min_price;
        if (min_price) {
            if (+row.price < +min_price) {
                return false;
            }
        }

        const max_price = filters.max_price;
        if (max_price) {
            if (+row.price > +max_price) {
                return false;
            }
        }

        const min_volume = filters.min_volume;
        if (min_volume) {
            if (+extractNumberPartFromString(row.volume) < +min_volume) {
                return false;
            }
        }

        const max_volume = filters.max_volume
        if (max_volume) {
            if (+extractNumberPartFromString(row.volume) > +max_volume) {
                return false;
            }
        }

        const product_code = filters.product_code;
        if (product_code) {
            if (!row?.product_code?.toLowerCase()?.includes(product_code.toLowerCase())) {
                return false;
            }
        }

        const afterbuy_id = filters.afterbuy_id;
        if (afterbuy_id) {
            if (!row.external_id.toString().includes(afterbuy_id)) {
                return false;
            }
        }

        const min_date = filters.min_date;
        if (min_date) {
            if (row.date_time <= min_date) {
                return false;
            }
        }

        const max_date = filters.max_date;
        if (max_date) {
            if (row.date_time >= max_date) {
                return false;
            }
        }

        return true;
    });
}