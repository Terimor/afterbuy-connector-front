export const columns = [
    {id: 'order_id', numeric: true, disablePadding: false, label: 'Order ID'},
    {id: 'title', numeric: false, disablePadding: false, label: 'Title'},
    {id: 'quantity', numeric: true, disablePadding: false, label: 'Quantity'},
    {id: 'price', numeric: true, disablePadding: false, label: 'Price'},
    {id: 'volume', numeric: true, disablePadding: false, label: 'Volume'},
    {id: 'product_code', numeric: false, disablePadding: false, label: 'Product code'},
];

export const flattenResponse = (rows) => {
    return rows.map((row) => {
        return {
            ...row, volume: row.volume ? `${row.volume.amount} ${row.volume.unit}` : '-'
        }
    })
}