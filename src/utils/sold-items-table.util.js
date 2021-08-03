export const columns = [
    {id: 'order_id', label: 'Order ID'},
    {id: 'title', label: 'Title'},
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
            date_time: row.order.date_time
        }
    })
}