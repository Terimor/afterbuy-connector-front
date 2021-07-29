export const columns = [
    {id: 'order_id', label: 'Order ID'},
    {id: 'title', label: 'Title'},
    {id: 'quantity', label: 'Quantity'},
    {id: 'price', label: 'Price'},
    {id: 'volume', label: 'Volume'},
    {id: 'product_code', label: 'Product code'},
];

export const flattenResponse = (rows) => {
    return rows.map((row) => {
        return {
            ...row, volume: row.volume ? `${row.volume.amount} ${row.volume.unit}` : '-'
        }
    })
}