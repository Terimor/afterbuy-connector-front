export const columns = [
    {id: 'order_id', label: 'Order ID'},
    {id: 'title', label: 'Title'},
    {id: 'quantity', label: 'Quantity'},
    {id: 'price', label: 'Price'},
    {id: 'volume', label: 'Volume'},
    {id: 'product_code', label: 'Product code'},
    {id: 'afterbuy_account', label: 'Afterbuy account'},
    {id: 'date_time', label: 'Date'},
];

export const flattenResponse = (rows) => {
    return rows.map((row) => {
        return {
            ...row,
            volume: row.volume ? `${row.volume.amount} ${row.volume.unit}` : '-',
            afterbuy_account: row.order.afterbuy_account_name,
            date_time: row.order.date_time
        }
    })
}